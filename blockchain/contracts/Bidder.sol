//SPDX-License-Identifier: MIT 
pragma solidity ^0.8.0;

contract Bidder {
    address public owner;
    uint256 public maximumBid;
    uint256 public biddingEndTime;
    // bool public isEnded;
    address public highestBidder;
    uint256 public highestBid;

    mapping(address => uint256) public bids;

    event BidPlaced(address bidder, uint256 amount);
    event AuctionEnded(address winner, uint256 amount);

     constructor (uint256 _biddingTime) payable{
        owner = msg.sender;
        biddingEndTime = block.timestamp + _biddingTime;
    }
    function publishTender()public payable{
        require(msg.sender == owner, "Owner only can place");
        maximumBid=msg.value;
        
    }
    function placeBid(uint256 bidAmt) public payable {
        // require(!isEnded, "Auction has ended");
        require(bidAmt <= maximumBid, "Bid amount too high");
        require(block.timestamp < biddingEndTime, "Bidding has ended");
        require(msg.sender != owner, "Owner cannot bid");

        if (bidAmt > highestBid) {
         
            highestBidder = msg.sender;
            highestBid = bidAmt;
           
        } 
            bids[msg.sender] += bidAmt;
             emit BidPlaced(highestBidder, highestBid);
        
    }

   function endAuction() public {
    require(msg.sender == owner, "Only owner can end the auction");
    // require(!isEnded, "Auction already ended");

    // isEnded = true;
    emit AuctionEnded(highestBidder, highestBid);
    payable(highestBidder).transfer(highestBid);
    withdrawRemaining();
}

    function withdraw() public {
        require(bids[msg.sender] > 0, "No funds to withdraw");
        uint256 amount = bids[msg.sender];
        bids[msg.sender] = 0;
        payable(msg.sender).transfer(amount);
    }
    function withdrawRemaining() private {
        require(address(this).balance > 0, "Contract has no balance.");
        payable(owner).transfer(address(this).balance);
    }
}
