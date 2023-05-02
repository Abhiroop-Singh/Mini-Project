import React, { useState } from "react";
import "./Tender.css";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const TenderDetails = () => {
  const [tender, setTender] = useState({});
  const { state } = useLocation();
  // const [havebid, sethavebid] = useState(false);
  var usemail = localStorage.getItem("email");
  // if (usemail != null) {
  //   sethavebid(true);
  //   console.log(usemail);
  // }

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
        <ul>
          <li>
            <Link to={"/"}>Homepage</Link>
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
              <p className="textp2"> {tender.governingAuthority}</p>
            </div>
            <div className="textspan1">
              <h1 className="texth2">Tender RefNo. : &nbsp;</h1>
              <p className="textp2"> {tender.referenceNumber}</p>
            </div>
            <div className="textspan1">
              <h1 className="texth2">TenderID : &nbsp;</h1>
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
            {usemail != null ? "Upload a pdf &nbsp;" : "Login to place a bid"}
          </h1>

          {usemail != null ? (
            <div className="upbidinner">
              <input type="file" name="" id="" />
              <input
                type="submit"
                value="Submit"
                className="submitbuttonbidup"
              />
            </div>
          ) : (
            <Link to={"/bidderlog"} className="submitbuttonbidup">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default TenderDetails;
