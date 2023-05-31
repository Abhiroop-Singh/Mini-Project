import React, { useState } from "react";
import "./Tender.css";
import { useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { ethers } from "ethers";

const TenderDetails = ({ val }) => {
  const navigate = useNavigate();
  const [tender, setTender] = useState({});
  const [price, setPrice] = useState("");
  const { state } = useLocation();

  var usemail = localStorage.getItem("email");

  const getTenderDetails = async () => {
    const referenceNumber = state.tender;
    const res = await axios.post("/api/tender/tenderdetails", {
      refno: referenceNumber,
    });
    setTender(res.data.data);
    console.log(res.data.data);
  };

  useEffect(() => {
    getTenderDetails();
  }, []);

  var usemail = localStorage.getItem("email");
  const logout = () => {
    localStorage.removeItem("email");
  };

  //placing bid function

  const test = async () => {
    const { contract } = val;

    const amount = ethers.utils.parseEther(price);

    const transaction = await contract.placeBid(amount);
    await transaction.wait();
    console.log("bid placed successfully");
    let url = window.location.pathname;
    url = url.split("/");
    url = url[url.length - 1];
    console.log(url);
    const data = await axios.post("/api/user/addtender", {
      email: localStorage.getItem("email"),
      url: url,
    });
  };

  const handleNum = (e) => {
    setPrice(e.target.value);
  };

  const toast = useToast();

  const success = () => {
    toast({
      title: "Bid Placed Successfully!",
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "top-left",
    });
    navigate("/");
  };

  return (
    <div>
      <nav>
        <h1>
          <u>
            <b>
              <Link to={"/"}>
                <img
                  src={require("../../Assets/images/minilogo.png")}
                  alt="mini"
                  className="navimg"
                />
              </Link>
            </b>
          </u>
        </h1>
        {usemail ? (
          <ul>
            <li>
              <Link to={"/user"}>Dashboard</Link>
            </li>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/"} onClick={logout}>
                Logout
              </Link>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <Link to={"/"}>Homepage</Link>
            </li>
          </ul>
        )}
      </nav>

      <div className="maindetailstend">
        <div className="leftpart">
          <div className="listingdata" id="listdata1">
            <div className="headingslisting" id="bdetails">
              Basic Details
            </div>
            <div className="textspan1">
              <h1 className="texth2">Organization chain : &nbsp;</h1>
              <p className="textp2"> {tender.governingAuthority}</p>
            </div>
            <div className="textspan1">
              <h1 className="texth2">Tender RefNo. : &nbsp;</h1>
              <p className="textp2"> {tender.referenceNumber}</p>
            </div>

            <div className="textspan1">
              <h1 className="texth2">Tender Title : &nbsp;</h1>
              <p className="textp2"> {tender.tenderTitle}</p>
            </div>
          </div>
          <div className="listingdata">
            <div className="headingslisting" id="tenderdoc">
              Tender Documents
            </div>
            <div className="textspan1">
              <h1 className="texth2">TenderNotice1.pdf &nbsp;</h1>
              <a
                href={`http://localhost:4000/uploads/${tender.myFile}`}
                className="linkpdf1"
                target="blank"
              >
                Download
              </a>
            </div>
          </div>
        </div>
        <div className="rightpart">
          <div className="listingdata" id="listdata1">
            <div className="headingslisting" id="criticald">
              Critical Details
            </div>
            <div className="textspan1">
              <h1 className="texth2">Bid Submission Start Date &nbsp;</h1>
              <p className="textp2"> {tender.bidOpeningDate}</p>
            </div>
            <div className="textspan1">
              <h1 className="texth2">Bid Submission End Date &nbsp;</h1>
              <p className="textp2"> {tender.bidClosingDate}</p>
            </div>
          </div>
          <div className="listingdata">
            <div className="headingslisting" id="inviter">
              Tender Inviting Authority
            </div>
            <div className="textspan1">
              <h1 className="texth2">Name &nbsp;</h1>
              <p className="textp2"> {tender.governingAuthority}</p>
            </div>
          </div>
        </div>
      </div>
      <div id="upbid">
        <div className="headingslisting" id="upbid1">
          Place A Bid
        </div>
        <div className="textspan1" id="absbh">
          <h1 className="texth2" id="h12323">
            To place a bid{" "}
          </h1>
          <label>Enter amount for tender:</label>
          <input
            type="text"
            name="num"
            onChange={handleNum}
            style={{ backgroundColor: "whitesmoke", border: "solid 0.01cm" }}
          />
          {usemail ? (
            <button className="submitbuttonbidup" onClick={test}>
              Submit Bid
            </button>
          ) : (
            <Link to={"/bidderlog"} className="upbidinner">
              <button className="submitbuttonbidup">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default TenderDetails;
