import React, { useState } from "react";
import "./Tender.css";
import { useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const TenderDetails = () => {
  const navigate = useNavigate();
  const [tender, setTender] = useState({});
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

  const toast = useToast();

  const success = () => {
    toast({
      title: "Bid Placed Successfully!",
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "top-left",
    });
    navigate('/user');
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
        <button onClick={success}>
          Place A Bid
        </button>
        </div>
      </div>
    </div>
  );
};

export default TenderDetails;
