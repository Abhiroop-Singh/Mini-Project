import React,{useState} from "react";
import axios from 'axios';
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


const GovDashboard = () => {

const [tenderTitle, setTenderTitle] = useState("");
const [authority, setAuthority] = useState("");
const [referenceNumber, setReferenceNumber] = useState("");
const [bidOpeningDate, setBidOpeningDate] = useState("");
const [bidClosingDate, setBidClosingDate] = useState("");
const [tenderDetails, setTenderDetails] = useState("");
const [location, setLocation] = useState("");
const [status, setStatus] = useState("");
const [image,setImage] = useState({});


const handleChange=(e)=>{
  if(e.target.name==="tenderTitle"){
    setTenderTitle(e.target.value)
  } 
  if(e.target.name==="authority"){
    setAuthority(e.target.value)
  } 
  if(e.target.name==="referenceNumber"){
    setReferenceNumber(e.target.value)
  } 
  if(e.target.name==="bidOpeningDate"){
    setBidOpeningDate(e.target.value)
  } 
  if(e.target.name==="bidClosingDate"){
    setBidClosingDate(e.target.value)
  } 
  if(e.target.name==="location"){
    setLocation(e.target.value)
  } 
  if(e.target.name==="status"){
    setStatus(e.target.value)
  } 
  if(e.target.name==="tenderDetails"){
    setTenderDetails(e.target.value)
  }
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
                      </tr>
                      <tr>
                        <td>Tender 1</td>
                        <td>`123432S</td>
                        <td>23-03-23</td>
                        <td>12-02-23</td>
                      </tr>
                      <tr>
                        <td>Tender 1</td>
                        <td>`123432S</td>
                        <td>23-03-23</td>
                        <td>12-02-23</td>
                      </tr>
                      <tr>
                        <td>Tender 1</td>
                        <td>`123432S</td>
                        <td>23-03-23</td>
                        <td>12-02-23</td>
                      </tr>
                      <tr>
                        <td>Tender 1</td>
                        <td>`123432S</td>
                        <td>23-03-23</td>
                        <td>12-02-23</td>
                      </tr>
                    </table>
                  </TabPanel>
                  <TabPanel>
                    <table className="gdbtable">
                      <tr>
                        <th>Tender Title</th>
                        <th>Reference No.</th>
                        <th>Closing Date</th>
                        <th>Bid Opening Date</th>
                      </tr>
                      <tr>
                        <td>Tender 1</td>
                        <td>`123432S</td>
                        <td>23-03-23</td>
                        <td>12-02-23</td>
                      </tr>
                      <tr>
                        <td>Tender 1</td>
                        <td>`123432S</td>
                        <td>23-03-23</td>
                        <td>12-02-23</td>
                      </tr>
                      <tr>
                        <td>Tender 1</td>
                        <td>`123432S</td>
                        <td>23-03-23</td>
                        <td>12-02-23</td>
                      </tr>
                      <tr>
                        <td>Tender 1</td>
                        <td>`123432S</td>
                        <td>23-03-23</td>
                        <td>12-02-23</td>
                      </tr>
                    </table>
                  </TabPanel>
                  <TabPanel>
                    <table className="gdbtable">
                      <tr>
                        <th>Tender Title</th>
                        <th>Reference No.</th>
                        <th>Closing Date</th>
                        <th>Bid Opening Date</th>
                      </tr>
                      <tr>
                        <td>Tender 1</td>
                        <td>`123432S</td>
                        <td>23-03-23</td>
                        <td>12-02-23</td>
                      </tr>
                      <tr>
                        <td>Tender 1</td>
                        <td>`123432S</td>
                        <td>23-03-23</td>
                        <td>12-02-23</td>
                      </tr>
                      <tr>
                        <td>Tender 1</td>
                        <td>`123432S</td>
                        <td>23-03-23</td>
                        <td>12-02-23</td>
                      </tr>
                      <tr>
                        <td>Tender 1</td>
                        <td>`123432S</td>
                        <td>23-03-23</td>
                        <td>12-02-23</td>
                      </tr>
                    </table>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Box>
          </Container>

          
          <form action="/api/tender/uploadTender" method="POST" encType="multipart/form-Data">
          <input type="text" name="tenderTitle" value={tenderTitle} onChange={handleChange} placeholder="TenderTitle"/> 
          <input type="text" name="authority" value={authority} onChange={handleChange}placeholder="Authority"/>
          <input type="text" name="referenceNumber" value={referenceNumber} onChange={handleChange} placeholder="ReferenceNumber"/> 
          <input type="date" name="bidOpeningDate" value={bidOpeningDate} onChange={handleChange}/> 
          <input type="date" name="bidClosingDate" value={bidClosingDate} onChange={handleChange}/> 
          <input type="text" name="tenderDetails" value={tenderDetails} onChange={handleChange}placeholder="Tender Details"/> 
          <input type="text" name="location" value={location} onChange={handleChange} placeholder="Location"/>
          <input type="text" name="status" value={status} onChange={handleChange} placeholder="Status"/> 
          <input type="file" name="image" id="testImage"></input>
          <input type="submit"></input>
          </form>
        </div> 
      </div> 
    </>
  );
};

export default GovDashboard;
