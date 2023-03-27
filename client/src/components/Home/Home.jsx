import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <nav>
        <h1>
          <u>
            <b>
              <Link to={"/"}>eTender</Link>
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
            <Link to={"/"}>Bidder Login/Signup</Link>
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
    </div>
  );
};

export default Home;
