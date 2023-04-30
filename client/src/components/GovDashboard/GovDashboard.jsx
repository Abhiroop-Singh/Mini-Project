import React,{useState,useEffect} from "react";
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

const [active, setActive] = useState([]);
const [allotted, setAllotted] = useState([]);
const [closed, setClosed] = useState([]);
let a=[];let b=[];let c=[]
useEffect(() => {
 fetchData();
}, [])
const fetchData=async()=>{
  const res=await fetch("/api/tender/tenderdisplay",{
    method:"POST",
    headers:{
      "content-type":"application/json"
    },
    
  })
  const d=await res.json();
  const data=d.data
 
  for(let i=0;i<data.length;i++){
    if(data[i].status==="active"){
        a.push(data[i])
    }
    else if(data[i].status==="alloted"){
      b.push(data[i])
    }
    else{
      c.push(data[i]);
    }
  }
  setActive(a);
  setAllotted(b);
  setClosed(c);
  
}
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
                      {
                        active.map((e)=>{
                          return   <tr>
                          <td>{e.tenderTitle}</td>
                          <td>{e.referenceNumber}</td>
                          <td>{e.bidOpeningDate}</td>
                          <td>{e.bidClosingDate}</td>
                        </tr>
                        })
                      }
                    
                     
                    </table>
                  </TabPanel>
                  <TabPanel>
                    <table className="gdbtable">
                      {allotted.map((e)=>{
                        return  <tr>
                        <td>{e.tenderTitle}</td>
                        <td>{e.referenceNumber}</td>
                        <td>{e.bidOpeningDate}</td>
                        <td>{e.bidClosingDate}</td>
                      </tr>
                      })}
                     
                     
                    </table>
                  </TabPanel>
                  <TabPanel>
                    <table className="gdbtable">
                    {closed.map((e)=>{
                        return  <tr>
                        <td>{e.tenderTitle}</td>
                        <td>{e.referenceNumber}</td>
                        <td>{e.bidOpeningDate}</td>
                        <td>{e.bidClosingDate}</td>
                      </tr>
                      })}
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
