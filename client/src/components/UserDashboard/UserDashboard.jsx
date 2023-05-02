import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./UserDashboard.css";

const UserDashboard = () => {
  const user_email = localStorage.getItem("email");

  //storing info of tenders 
  const [previousTender, setPreviousTender] = useState([]);
  const [biddedTender, setBiddedTender] = useState([]);
  const [allotedTender, setAllotedTender] = useState([]);

  let p=[],b=[],a=[];
  const fetchTenders = async () => {
    const res = await axios.post("/api/user/userTender", {
      email: user_email, 
    }); 
    // setPreviousTender(res.data.message[0].previousTenders);
    // setBiddedTender(res.data.message[0].biddedTenders);
    // setAllotedTender(res.data.message[0].allotedTenders);

    p=res.data.message[0].previousTenders;
    b=res.data.message[0].biddedTenders;
    a=res.data.message[0].allotedTenders;

    localStorage.setItem('previous',JSON.stringify(p));
    localStorage.setItem('bidded',JSON.stringify(b));
    localStorage.setItem('alloted',JSON.stringify(a));

    await getTenderDetails();
  };

  const getTenderDetails = async()=>{ 

    let prevInfo=[],bidInfo=[],allotInfo=[];
    const previous = JSON.parse(localStorage.getItem('previous'));
    const bidded =JSON.parse(localStorage.getItem('bidded'));
    const alloted =JSON.parse(localStorage.getItem('alloted'));

    // console.log(previous);
    for(let i=0;i<previous.length;i++){
      const response=await axios.post('/api/tender/tenderdetails',{refno:previous[i]});
      prevInfo.push(response.data.data);
    }
    for(let i=0;i<bidded.length;i++){
      const response=await axios.post('/api/tender/tenderdetails',{refno:bidded[i]});
      bidInfo.push(response.data.data);
    }
    for(let i=0;i<alloted.length;i++){
      const response=await axios.post('/api/tender/tenderdetails',{refno:alloted[i]});
      allotInfo.push(response.data.data);
    }

    setPreviousTender(prevInfo);
    setBiddedTender(bidInfo);
    setAllotedTender(allotInfo);
    
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
        {allotedTender.map((val) => {
          return (
            <div className="udbdata">
              <Link to={`/tenderDetails/${val.referenceNumber}`} state={{ tender: val.referenceNumber }}>
                Tender Title: {val.tenderTitle} <br />
                Reference Number: {val.referenceNumber} <br />
              </Link>
            </div>
          );
        })}
        <div className="tender" id="biddedudb">
          Bidded Tenders
        </div>
        {biddedTender.map((val) => {  
          return (
            <div className="udbdata">
              <Link to={`/tenderDetails/${val.referenceNumber}`} state={{ tender: val.referenceNumber }}>
                Tender Title: {val.tenderTitle} <br />
                Reference Number: {val.referenceNumber} <br />
              </Link>
            </div>
          );
        })}
        <div className="tender" id="prevudb">
          Previous Tenders
        </div>
        {previousTender.map((val) => {
          console.log(val);
          return (
            <div className="udbdata">
              <Link to={`/tenderDetails/${val.referenceNumber}`} state={{ tender: val.referenceNumber }}>
                Tender Title: {val.tenderTitle} <br />
                Reference Number: {val.referenceNumber} <br />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserDashboard;
