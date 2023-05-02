import React, { useEffect, useState } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import axios from "axios";
const Home = () => {
  const [tenders, setTenders] = useState([])
  useEffect(() => {
    fetchTenders();
   
  }, [])
  const fetchTenders=async()=>{
    const a=await axios.get("/api/tender/tenderdisplay");
    // console.log(a.data.data)
    setTenders(a.data.data)
  }
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
            <Link to={"/tenders"}>All Tenders</Link>
          </li>
          <li>
            <Link to={"/bidderlog"}>User Login/Signup</Link>
          </li>
          <li>
            <Link to={"/reviewerLogin"}>Reviewer</Link>
          </li>
          <li>
            <Link to={"/govLogin"}>Gov Login</Link>
          </li>
        </ul>
      </nav>
      <div id="sbs">
        <div className="sbs1">
          It's a competition among different parties to win a tender.
        </div>
        <div className="sbs2">
          <img
            src="https://res.cloudinary.com/dhg0kwh9c/image/upload/v1679928115/bidpic_wktmqq.png"
            alt=""
          />
        </div>
      </div>
      <div className="brs">
        <h1 className="brsh1">BROWSE TENDER</h1>
        <div className="btnsbrs">
          <button className="brsbt">Cities</button>
          <button className="brsbt">State</button>
          <button className="brsbt">Sector</button>
        </div>
      </div>
      <div className="ltd">
        <h1 className="brsh1">LATEST TENDERS</h1>
        <table>
          <tr>
            <th>Tender Title</th>
            <th>Reference No.</th>
            <th>Status</th>
            <th>Governing Authority</th>
          </tr>
          {tenders.map((val)=>{
            return <tr>
            <td>{val.tenderTitle}</td>
            <td>{val.referenceNumber}</td>
            <td>{val.status}</td>
            <td>{val.governingAuthority}</td>
          </tr>
          })}
          
        </table>
      </div>
    </div>
  );
};

export default Home;
