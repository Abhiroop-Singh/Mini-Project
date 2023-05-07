import { useEffect, React, useState } from "react";
import { Link, json } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import "./ReviewerDashboard.css";
import axios from "axios";

const ReviewerDashboard = () => {
  const [biddingTender, setBiddingTender] = useState([]);
  const [allotedTender, setAllotedTender] = useState([]);

  const getTenders = async () => {
    const res = await axios.get("/api/tender/tenderdisplay");
    const getUser = await axios.get("/api/user/getUser");
    let a = [],b = [];
    a = res.data.data;
    b = getUser.data.data;
    localStorage.setItem("tenders", JSON.stringify(a));
    localStorage.setItem("users", JSON.stringify(b));

    await getTenderStatus();
  };

  const getTenderStatus = async () => {
    const tenderData = JSON.parse(localStorage.getItem("tenders"));
    const users = JSON.parse(localStorage.getItem("users"));

    //allot and bit me reference number stored
    let allot = [],
      bid = [];
    for (let i = 0; i < tenderData.length; i++) {
      if (tenderData[i].status === "bidding") {
        bid.push(tenderData[i].referenceNumber);
      } else {
        allot.push(tenderData[i].referenceNumber);
      }
    }

    let bidUser = [],
      allotUser = [];
    for (let i = 0; i < users.length; i++) {
      for (let j = 0; j < users[i].biddedTenders.length; j++) {
        for (let k = 0; k < bid.length; k++) {
          if (users[i].biddedTenders[j] === bid[k]) {
            bidUser.push(users[i]);
          }
        }
      }
    }

    for (let i = 0; i < users.length; i++) {
      for (let j = 0; j < users[i].allotedTenders.length; j++) {
        for (let k = 0; k < allot.length; k++) {
          if (users[i].allotedTenders[j] === allot[k]) {
            allotUser.push(users[i]);
          }
        }
      }
    }

    setBiddingTender(bidUser);
    setAllotedTender(allotUser);

    // console.log(biddingTender);
  };

  useEffect(() => {
    getTenders();
  }, []);

  const toast = useToast();

  const success = () => {
    toast({
      title: "Rating Successfully Updated!",
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "top-left",
    });
  };

  return (
    <div>
      <nav>
        <div className="navdet">
          <u>
            <b>
              <img
                src={require("../../Assets/images/minilogo.png")}
                alt="mini"
                className="navimg"
              />
              <Link to={"/"}></Link>
            </b>
          </u>
          <h1>Reviewer's Dashboard</h1>
        </div>
        <ul id="ubnavul">
          <li>
            <Link to={"/"}>
              <img
                src={require("../../Assets/images/user.png")}
                alt="mini"
                className="navimg2"
              />
              <p id="udbpnav">Ravindra Sharma</p>
            </Link>
          </li>
          <li>
            <Link to={"/"}>Logout</Link>
          </li>
        </ul>
      </nav>

      <div className="udbmain" id="main1">
        <h1 id="udbnamehead">Hello Ravindra!</h1>
        <h1 id="welcomeudb">Welcome, Sir!</h1>
        <div className="tenderev" id="allotudb">
          Unreviewed Bids
        </div>
        {biddingTender.map((val) => {
          console.log(val);
          return (
            <div className="revdata">
              <div className="textp1">
                {val.biddedTenders.map((tid) => {
                  return (
                    <div className="textspan">
                      <h1 className="texth1">TenderID : &nbsp;</h1>
                      <p className="textp1"> {tid}</p>
                    </div>
                  );
                })}
                <div className="textspan">
                  <h1 className="texth1">Bidder Name : &nbsp;</h1>
                  <p className="textp1">{val.name}</p>
                </div>
                <div className="textspan">
                  <a
                    href="http://localhost:4000/uploads/tender.docx"
                    targer="blank"
                    className="linktoprop"
                  >
                    Download Proposal
                  </a>
                </div>
              </div>
              <div className="textp2">
                <div>
                  <h1 className="texth1">Rating to bidder(Out of 10)</h1>
                  <input type="number" name="" className="ratingip" />
                </div>
                <button onClick={success} className="bsubsbh">
                  Submit
                </button>
              </div>
            </div>
          );
        })}

        <div className="tenderev" id="biddedudb">
          Previous Reviews
        </div>
        {allotedTender.map((val) => {
          return (
            <div className="revdata">
              <div className="textp1">
                {val.allotedTenders.map((tid) => {
                  return (
                    <div className="textspan">
                      <h1 className="texth1">TenderID : &nbsp;</h1>
                      <p className="textp1"> {tid}</p>
                    </div>
                  );
                })}
                <div className="textspan">
                  <h1 className="texth1">Bidder Name : &nbsp;</h1>
                  <p className="textp1">{val.name}</p>
                </div>
                <div className="textspan">
                  <a
                    href="http://localhost:4000/uploads/tender.docx"
                    targer="blank"
                    className="linktoprop"
                  >
                    Download Proposal
                  </a>
                </div>
              </div>
              <div className="textp2">
                <div>
                  <h1 className="texth1">Rating to bidder(Out of 10)</h1>
                  <input type="number" name="" className="ratingip" />
                </div>
                <button onClick={success} className="bsubsbh">
                  Submit
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReviewerDashboard;
