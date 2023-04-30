import React from "react";
import "./Tender.css";
import { Link } from "react-router-dom";

const TenderList = () => {
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
      <div id="filtersection">
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
      </div>
      <div className="mainlist">
        <h1>Active Tenders : </h1>

        <div className="tenderlisting">
          <div className="textp1">
            <div className="textspan">
              <h1 className="texth1">TenderID : &nbsp;</h1>
              <p className="textp1"> 1234567</p>
            </div>
            <div className="textspan">
              <h1 className="texth1">Organization Name : &nbsp;</h1>
              <p className="textp1"> PWD</p>
            </div>
            <div className="textspan">
              <Link to={"/"} className="linktoprop">
                {" "}
                View More
              </Link>
            </div>
          </div>
          <div className="textp2">
            <div className="textspan">
              <h1 className="texth1">Tender Type : &nbsp;</h1>
              <p className="textp1"> Construction</p>
            </div>
            <div className="textspan">
              <h1 className="texth1">Start Date : &nbsp;</h1>
              <p className="textp1"> 27-02-2023</p>
            </div>
            <div className="textspan">
              <h1 className="texth1">Start Date : &nbsp;</h1>
              <p className="textp1"> 27-02-2023</p>
            </div>
          </div>
        </div>
        <div className="tenderlisting">
          <div className="textp1">
            <div className="textspan">
              <h1 className="texth1">TenderID : &nbsp;</h1>
              <p className="textp1"> 1234567</p>
            </div>
            <div className="textspan">
              <h1 className="texth1">Organization Name : &nbsp;</h1>
              <p className="textp1"> PWD</p>
            </div>
            <div className="textspan">
              <Link to={"/"} className="linktoprop">
                {" "}
                View More
              </Link>
            </div>
          </div>
          <div className="textp2">
            <div className="textspan">
              <h1 className="texth1">Tender Type : &nbsp;</h1>
              <p className="textp1"> Construction</p>
            </div>
            <div className="textspan">
              <h1 className="texth1">Start Date : &nbsp;</h1>
              <p className="textp1"> 27-02-2023</p>
            </div>
            <div className="textspan">
              <h1 className="texth1">Start Date : &nbsp;</h1>
              <p className="textp1"> 27-02-2023</p>
            </div>
          </div>
        </div>
        <div className="tenderlisting">
          <div className="textp1">
            <div className="textspan">
              <h1 className="texth1">TenderID : &nbsp;</h1>
              <p className="textp1"> 1234567</p>
            </div>
            <div className="textspan">
              <h1 className="texth1">Organization Name : &nbsp;</h1>
              <p className="textp1"> PWD</p>
            </div>
            <div className="textspan">
              <Link to={"/"} className="linktoprop">
                {" "}
                View More
              </Link>
            </div>
          </div>
          <div className="textp2">
            <div className="textspan">
              <h1 className="texth1">Tender Type : &nbsp;</h1>
              <p className="textp1"> Construction</p>
            </div>
            <div className="textspan">
              <h1 className="texth1">Start Date : &nbsp;</h1>
              <p className="textp1"> 27-02-2023</p>
            </div>
            <div className="textspan">
              <h1 className="texth1">Start Date : &nbsp;</h1>
              <p className="textp1"> 27-02-2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenderList;
