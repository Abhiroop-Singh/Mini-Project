import React, { useState, useEffect } from "react";
import axios from "axios";
import "./GovDashboard.css";
import {
  Box,
  Container,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ethers } from "ethers";
const GovDashboard = ({ state }) => {
  const [tenderTitle, setTenderTitle] = useState("");
  const [authority, setAuthority] = useState("");
  const [referenceNumber, setReferenceNumber] = useState("");
  const [bidOpeningDate, setBidOpeningDate] = useState("");
  const [bidClosingDate, setBidClosingDate] = useState("");
  const [tenderDetails, setTenderDetails] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("");
  // const [image, setImage] = useState({});
  const [show, setShow] = useState(false);

  const [active, setActive] = useState([]);
  const [allotted, setAllotted] = useState([]);
  const [closed, setClosed] = useState([]);
  let a = [];
  let b = [];
  let c = [];
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const res = await axios.get("/api/tender/tenderdisplay");
    const data = res.data.data;
    for (let i = 0; i < data.length; i++) {
      if (data[i].status === "bidding") {
        a.push(data[i]);
      } else if (data[i].status === "alloted") {
        b.push(data[i]);
      } else {
        c.push(data[i]);
      }
    }
    setActive(a);
    setAllotted(b);
    setClosed(c);
  };

  const handleChange = (e) => {
    if (e.target.name === "tenderTitle") {
      setTenderTitle(e.target.value);
    }
    if (e.target.name === "authority") {
      setAuthority(e.target.value);
    }
    if (e.target.name === "referenceNumber") {
      setReferenceNumber(e.target.value);
    }
    if (e.target.name === "bidOpeningDate") {
      setBidOpeningDate(e.target.value);
    }
    if (e.target.name === "bidClosingDate") {
      setBidClosingDate(e.target.value);
    }
    if (e.target.name === "location") {
      setLocation(e.target.value);
    }
    if (e.target.name === "status") {
      setStatus(e.target.value);
    }
    if (e.target.name === "tenderDetails") {
      setTenderDetails(e.target.value);
    }
  };

const test=async(e)=>{
  e.preventDefault()
  const { contract } = state;
    const amount = { value: ethers.utils.parseEther("0.003") };
    const transaction =await contract.publishTender(amount);

    // const amount =ethers.utils.parseEther("0.0007")
    // const transaction =await contract.placeBid(amount)

    await transaction.wait();
    // const transaction =await contract.endAuction()
    // await transaction.wait()

    alert("tender published")
    
}
const end=async(e)=>{
  e.preventDefault()
  const { contract } = state;
   
  const transaction =await contract.endAuction()
  await transaction.wait()

   alert("tender Closed")
}

  return (
    <>
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
          <h1>Government Dashboard</h1>
        </div>
        <ul id="gbnavul">
          <li>
            <Link to={"/"}>
              <img
                src={require("../../Assets/images/Ellipse1.png")}
                alt="mini"
                className="navimg1"
              />
            </Link>
          </li>
          <li>
            <Link to={"/"}>Logout</Link>
          </li>
        </ul>
      </nav>

      <div id="maingd">
        <div className="extradata">
          <h1>Welcome, Sir!</h1>
        </div>
        <div>
          <Container maxW="100%">
            <Box
              p={4}
              w="100%"
              bg="white"
              borderRadius="lg"
              borderWidth="2px"
              borderColor={"#ececec"}
              mt={10}
            >
              <Tabs isFitted variant="enclosed">
                <TabList>
                  <Tab _selected={{ bg: "#FFE5BD" }}>Current Tender</Tab>
                  <Tab _selected={{ bg: "#FFDDDD" }}>Allotted Tender </Tab>
                  <Tab _selected={{ bg: "#E8FFC1" }}>Previous Tender</Tab>
                </TabList>

                <TabPanels>
                  <TabPanel>
                    <table className="gdbtable">
                      <tr>
                        <th>Tender Title</th>
                        <th>Reference No.</th>
                        <th>Closing Date</th>
                        <th>Bid Opening Date</th>
                        <th>Amount</th>
                      </tr>
                      {active.map((e) => {
                        return (
                          <tr>
                            <td>{e.tenderTitle}</td>
                            <td>{e.referenceNumber}</td>
                            <td>{e.bidOpeningDate}</td>
                            <td>{e.bidClosingDate}</td>
                           <td> <button className="govSubmit" onClick={test} >Set Amount </button></td>
                          </tr>
                        );
                      })}
                    </table>
                  </TabPanel>
                  <TabPanel>
                    <table className="gdbtable">
                      {allotted.map((e) => {
                        return (
                          <tr>
                            <td>{e.tenderTitle}</td>
                            <td>{e.referenceNumber}</td>
                            <td>{e.bidOpeningDate}</td>
                            <td>{e.bidClosingDate}</td>
                          </tr>
                        );
                      })}
                    </table>
                  </TabPanel>
                  <TabPanel>
                    <table className="gdbtable">
                      {closed.map((e) => {
                        return (
                          <tr>
                            <td>{e.tenderTitle}</td>
                            <td>{e.referenceNumber}</td>
                            <td>{e.bidOpeningDate}</td>
                            <td>{e.bidClosingDate}</td>
                            
                          </tr>
                        );
                      })}
                    </table>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Box>
          </Container>

          <button
            className="showbutton"
            onClick={(e) => {
              setShow(!show);
            }}
          >
            Publish a new Tender
          </button>

          {show && (
            <form
              action="/api/tender/uploadTender"
              method="POST"
              encType="multipart/form-Data"
              id="govform"
            >
              <div className="govforminput">
                <h4>Enter Tender Title</h4>
                <input
                  type="text"
                  name="tenderTitle"
                  value={tenderTitle}
                  onChange={handleChange}
                  placeholder="TenderTitle"
                  className="innergovip"
                />
              </div>
              <div className="govforminput">
                <h4>Enter Name of the Authority</h4>
                <input
                  type="text"
                  name="authority"
                  value={authority}
                  onChange={handleChange}
                  placeholder="Authority"
                  className="innergovip"
                />
              </div>
              <div className="govforminput">
                <h4>Enter a Reference Number</h4>
                <input
                  type="text"
                  name="referenceNumber"
                  value={referenceNumber}
                  onChange={handleChange}
                  placeholder="ReferenceNumber"
                  className="innergovip"
                />
              </div>
              <div className="govforminput">
                <h4>Enter Bid-Opening Date</h4>
                <input
                  type="date"
                  name="bidOpeningDate"
                  value={bidOpeningDate}
                  onChange={handleChange}
                  className="innergovip"
                />
              </div>
              <div className="govforminput">
                <h4>Enter Bid-Closing Date</h4>{" "}
                <input
                  type="date"
                  name="bidClosingDate"
                  value={bidClosingDate}
                  onChange={handleChange}
                  className="innergovip"
                />
              </div>
              <div className="govforminput">
                <h4>Enter Tender details</h4>
                <textarea
                  name="tenderDetails"
                  value={tenderDetails}
                  onChange={handleChange}
                  placeholder="Tender Details"
                  className="textareagov"
                />
              </div>
              <div className="govforminput">
                <h4>Enter the Location</h4>
                <input
                  type="text"
                  name="location"
                  value={location}
                  onChange={handleChange}
                  placeholder="Location"
                  className="innergovip"
                />
              </div>
              <div className="govforminput">
                <h4>Enter the Status</h4>
                <input
                  type="text"
                  name="status"
                  value={status}
                  onChange={handleChange}
                  placeholder="Status"
                  className="innergovip"
                />
              </div>
              <div className="govforminput">
                <h4>Upload a file</h4>
                <input type="file" name="image" id="testImage"></input>
              </div>
              <button type="submit" className="govSubmit" >
                Submit Tender
              </button>
              {/* <button className="govSubmit" onClick={test} >
                Set Amount
              </button> */}
            </form>
          )}
        </div>
      </div>
    
          {/* <button onClick={test}>
            Pay
          </button> */}
          
        
        <form onSubmit={end}>
          <button type="submit">
            end
          </button>
          
        </form>
    </>
  );
};

export default GovDashboard;
