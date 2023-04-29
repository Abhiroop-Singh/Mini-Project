import React from "react";
import { Link } from "react-router-dom";
import "./UserDashboard.css";
const UserDashboard = () => {
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
          <h1>Bidder's Dashboard</h1>
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
      <div className="udbmain">
        <h1 id="udbnamehead">Hello Ravindra!</h1>
        <h1 id="welcomeudb">Welcome, Sir!</h1>
        <div className="tender" id="allotudb">
          Allotted Tenders
        </div>
        <div className="udbdata">
          data1:data <br />
          data2: data <br /> data3: data
        </div>
        <div className="udbdata">
          data1:data <br />
          data2: data <br /> data3: data
        </div>
        <div className="udbdata">
          data1:data <br />
          data2: data <br /> data3: data
        </div>
        <div className="tender" id="biddedudb">
          Bidded Tenders
        </div>
        <div className="udbdata">
          data1:data <br />
          data2: data <br /> data3: data
        </div>
        <div className="udbdata">
          data1:data <br />
          data2: data <br /> data3: data
        </div>
        <div className="udbdata">
          data1:data <br />
          data2: data <br /> data3: data
        </div>
        <div className="tender" id="prevudb">
          Previous Tenders
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
