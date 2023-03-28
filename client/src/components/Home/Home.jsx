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
            <Link to={"/bidderlog"}>Bidder Login/Signup</Link>
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
            <th>Closing Date</th>
            <th>Bid Opening Date</th>
          </tr>
          <tr>
            <td>Tender Title</td>
            <td>Reference No.</td>
            <td>Closing Date</td>
            <td>Bid Opening Date</td>
          </tr>
          <tr>
            <td>Tender Title</td>
            <td>Reference No.</td>
            <td>Closing Date</td>
            <td>Bid Opening Date</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Home;
