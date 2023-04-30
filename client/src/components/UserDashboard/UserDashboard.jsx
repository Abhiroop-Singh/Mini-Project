import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import "./UserDashboard.css";

const UserDashboard = () => {

  const user_email = localStorage.getItem('email');

  const [previousTender, setPreviousTender] = useState([]);
  const [biddedTender, setBiddedTender] = useState([]);
  const [allotedTender, setAllotedTender] = useState([]);

  const fetchTenders = async () => {
    const res = await axios.post('/api/user/userTender', {
      email: user_email
    });
    setPreviousTender(res.data.message[0].previousTenders);
    setBiddedTender(res.data.message[0].biddedTenders);
    setAllotedTender(res.data.message[0].allotedTenders);
    console.log(allotedTender);
  };

  useEffect(() => {
    fetchTenders();
  }, []);

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
        {
          allotedTender.map((val)=>{
            return (
              <div className="udbdata">
                Reference Number: {val} <br />
              </div>
            )
          })
        }
        <div className="tender" id="biddedudb">
          Bidded Tenders
        </div>
        {
          biddedTender.map((val)=>{
            return (
              <div className="udbdata">
                Reference Number: {val} <br />
              </div>
            )
          })
        }
        <div className="tender" id="prevudb">
          Previous Tenders
        </div>
        {
          previousTender.map((val)=>{
            return (
              <div className="udbdata">
                Reference Number: {val} <br />
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default UserDashboard;
