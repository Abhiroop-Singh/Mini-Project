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
    </div>
  );
};

export default TenderDetails;
