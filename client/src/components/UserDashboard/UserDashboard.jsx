import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./UserDashboard.css";
import Counter from "../counter/Counter";

const UserDashboard = () => {
  const user_email = localStorage.getItem("email");

  //storing info of tenders
  const [previousTender, setPreviousTender] = useState([]);
  const [biddedTender, setBiddedTender] = useState([]);
  const [allotedTender, setAllotedTender] = useState([]);
  const [username, setUsername] = useState("User");

  let p = [],
    b = [],
    a = [];
  const fetchTenders = async () => {
    const us = await axios.get("/api/user/getUser", {
      email: user_email,
    });

    setUsername(us.data.data[0].name);
    const res = await axios.post("/api/user/userTender", {
      email: user_email,
    });
    // setPreviousTender(res.data.message[0].previousTenders);
    // setBiddedTender(res.data.message[0].biddedTenders);
    // setAllotedTender(res.data.message[0].allotedTenders);

    p = res.data.message[0].previousTenders;
    b = res.data.message[0].biddedTenders;
    a = res.data.message[0].allotedTenders;

    localStorage.setItem("previous", JSON.stringify(p));
    localStorage.setItem("bidded", JSON.stringify(b));
    localStorage.setItem("alloted", JSON.stringify(a));

    await getTenderDetails();
  };

  const getTenderDetails = async () => {
    let prevInfo = [],
      bidInfo = [],
      allotInfo = [];
    const previous = JSON.parse(localStorage.getItem("previous"));
    const bidded = JSON.parse(localStorage.getItem("bidded"));
    const alloted = JSON.parse(localStorage.getItem("alloted"));

    // console.log(previous);
    for (let i = 0; i < previous.length; i++) {
      const response = await axios.post("/api/tender/tenderdetails", {
        refno: previous[i],
      });
      prevInfo.push(response.data.data);
    }
    for (let i = 0; i < bidded.length; i++) {
      const response = await axios.post("/api/tender/tenderdetails", {
        refno: bidded[i],
      });
      bidInfo.push(response.data.data);
    }
    for (let i = 0; i < alloted.length; i++) {
      const response = await axios.post("/api/tender/tenderdetails", {
        refno: alloted[i],
      });
      allotInfo.push(response.data.data);
    }

    setPreviousTender(prevInfo);
    setBiddedTender(bidInfo);
    setAllotedTender(allotInfo);
  };
  const logout = () => {
    localStorage.removeItem("email");
  };

  useEffect(() => {
    fetchTenders();
  }, []);

  return (
    <div id="abc12">
      <nav>
        <div className="navdet">
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
              <p id="udbpnav">{username}</p>
            </Link>
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
      </nav>

      <div className="udbmain">
        <h1 id="udbnamehead">Hello {username}!</h1>
        <h1 id="welcomeudb">Welcome, Sir!</h1>
        <Counter />
        <div className="tender" id="allotudb">
          Allotted Tenders
        </div>
        {allotedTender.map((val, idx) => {
          return (
            <div className="udbdata" id={idx}>
              <div className="idharbox">
                Tender Title: {val.tenderTitle} <br />
                Reference Number: {val.referenceNumber} <br />
              </div>
              <div className="udharbox">
                <Link
                  to={`/tenderDetails/${val.referenceNumber}`}
                  state={{ tender: val.referenceNumber }}
                  className="udlinkrl"
                >
                  View More Details
                </Link>
              </div>
            </div>
          );
        })}
        <div className="tender" id="biddedudb">
          Bidded Tenders
        </div>
        {biddedTender.map((val, idx) => {
          return (
            <div className="udbdata" id={idx}>
              <div className="idharbox">
                Tender Title: {val.tenderTitle} <br />
                Reference Number: {val.referenceNumber} <br />
              </div>
              <div className="udharbox">
                <Link
                  to={`/tenderDetails/${val.referenceNumber}`}
                  state={{ tender: val.referenceNumber }}
                  className="udlinkrl"
                >
                  View More Details
                </Link>
              </div>
            </div>
          );
        })}
        <div className="tender" id="prevudb">
          Previous Tenders
        </div>
        {previousTender.map((val, idx) => {
          // console.log(val);
          return (
            <div className="udbdata" id={idx}>
              <div className="idharbox">
                Tender Title: {val.tenderTitle} <br />
                Reference Number: {val.referenceNumber} <br />
              </div>
              <div className="udharbox">
                <Link
                  to={`/tenderDetails/${val.referenceNumber}`}
                  state={{ tender: val.referenceNumber }}
                  className="udlinkrl"
                >
                  View More Details
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserDashboard;
