import React from "react";
import "./Tender.css";
import { Link } from "react-router-dom";

const TenderDetails = () => {
  return (
    <div>
      <nav>
        <h1>
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
        </h1>
        <ul>
          <li>
            <Link to={"/"}>Contract Award</Link>
          </li>
          <li>
            <Link to={"/"}>Publish Tender</Link>
          </li>
          <li>
            <Link to={"/bidderlog"}>Bidder Login/Signup</Link>
          </li>
        </ul>
      </nav>
      <div className="maindetailstend">
        <div className="leftpart">
          <div className="listingdata" id="listdata1">
            <div className="headingslisting" id="bdetails">
              Basic Details
            </div>
            <div className="textspan1">
              <h1 className="texth2">Organization chain : &nbsp;</h1>
              <p className="textp2"> value</p>
            </div>
            <div className="textspan1">
              <h1 className="texth2">Tender RefNo. : &nbsp;</h1>
              <p className="textp2"> value</p>
            </div>
            <div className="textspan1">
              <h1 className="texth2">TenderID : &nbsp;</h1>
              <p className="textp2"> value</p>
            </div>
            <div className="textspan1">
              <h1 className="texth2">Tender Type: &nbsp;</h1>
              <p className="textp2"> value</p>
            </div>
            <div className="textspan1">
              <h1 className="texth2">Tender Category : &nbsp;</h1>
              <p className="textp2"> value</p>
            </div>
          </div>
          <div className="listingdata">
            <div className="headingslisting" id="tenderdoc">
              Tender Documents
            </div>
            <div className="textspan1">
              <h1 className="texth2">TenderNotice1.pdf &nbsp;</h1>
              <Link to={"/"} className="linkpdf1">
                Download
              </Link>
            </div>
            <div className="textspan1">
              <h1 className="texth2">TenderNotice2.pdf &nbsp;</h1>
              <Link to={"/"} className="linkpdf1">
                Download
              </Link>
            </div>
          </div>
        </div>
        <div className="rightpart">
          <div className="listingdata" id="listdata1">
            <div className="headingslisting" id="criticald">
              Critical Details
            </div>
            <div className="textspan1">
              <h1 className="texth2">Published Date &nbsp;</h1>
              <p className="textp2"> value</p>
            </div>
            <div className="textspan1">
              <h1 className="texth2">Bid Submission Start Date &nbsp;</h1>
              <p className="textp2"> value</p>
            </div>
            <div className="textspan1">
              <h1 className="texth2">Bid Submission End Date &nbsp;</h1>
              <p className="textp2"> value</p>
            </div>
          </div>
          <div className="listingdata">
            <div className="headingslisting" id="inviter">
              Tender Inviting Authority
            </div>
            <div className="textspan1">
              <h1 className="texth2">Name &nbsp;</h1>
              <p className="textp2"> value</p>
            </div>
            <div className="textspan1">
              <h1 className="texth2">Address &nbsp;</h1>
              <p className="textp2"> value</p>
            </div>
          </div>
        </div>
      </div>
      <div id="upbid">
        <div className="headingslisting" id="upbid1">
          Place A Bid
        </div>
        <div className="textspan1">
          <h1 className="texth2" id="h12323">
            Upload a pdf &nbsp;
          </h1>
          <div className="upbidinner">
            <input type="file" name="" id="" />
            <input type="submit" value="Submit" id="submitbuttonbidup" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenderDetails;
