import React, { useEffect, useState } from "react";
import "./Tender.css";
import { useToast } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import axios from "axios";

const TenderList = () => {
  const [tender, setTender] = useState([]);
  const toast = useToast();
  const [havebid, sethavebid] = useState(false);
  var usemail = localStorage.getItem("email");
  if (usemail) {
    sethavebid(true);
  }

  const getTender = async () => {
    const res = await axios.get("/api/tender/tenderdisplay");
    setTender(res.data.data);
  };

  useEffect(() => {
    getTender();
  }, []);

  const success = () => {
    toast({
      title: "Bid Successfully Placed!",
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "top-left",
    });
  };

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
        {havebid ? (
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/bidderlog"}>Bidder Login/Signup</Link>
            </li>
            <li>
              <Link to={"/govLogin"}>Gov Login</Link>
            </li>
            <li>
              <Link to={"/reviewerLogin"}>Reviewer</Link>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
          </ul>
        )}
      </nav>

      {/* <div id="filtersection">
        <h1>Filter Tenders By</h1>
        <div className="filteroption">
          <select name="City" id="City" className="filterdrpdwn">
            <option value="" disabled selected>
              CITY
            </option>
            <option value="Bangalore">Bangalore</option>
            <option value="Pune">Pune</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Gwalior">Gwalior</option>
            <option value="">No Filter</option>
          </select>
          <select name="State" id="State" className="filterdrpdwn">
            <option value="" disabled selected>
              STATE
            </option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Bihar">Bihar</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="">No Filter</option>
          </select>
          <select name="Sector" id="Sector" className="filterdrpdwn">
            <option value="" disabled selected>
              SECTOR
            </option>
            <option value="Civil">Civil</option>
            <option value="Aviation">Aviation</option>
            <option value="Construction">Construction</option>
            <option value="Municipal">Municipal</option>
            <option value="">No Filter</option>
          </select>
        </div>
      </div> */}

      <div className="mainlist">
        <h1>Active Tenders : </h1>
        {tender.map((val) => {
          return (
            <div className="tenderlisting">
              <div className="textp1">
                <div className="textspan">
                  <h1 className="texth1">TenderID : &nbsp;</h1>
                  <p className="textp1"> {val.referenceNumber}</p>
                </div>
                <div className="textspan">
                  <h1 className="texth1">Organization Name : &nbsp;</h1>
                  <p className="textp1"> {val.governingAuthority}</p>
                </div>
              </div>
              <div className="textp2">
                <div className="textspan">
                  <h1 className="texth1">Start Date : &nbsp;</h1>
                  <p className="textp1"> {val.bidOpeningDate}</p>
                </div>
                <div className="textspan">
                  <h1 className="texth1">Start Date : &nbsp;</h1>
                  <p className="textp1"> {val.bidClosingDate}</p>
                </div>
              </div>
              <Link
                to={`/tenderDetails/${val.referenceNumber}`}
                state={{ tender: val.referenceNumber }}
                className="udlinkrl"
              >
                View More Details
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TenderList;
