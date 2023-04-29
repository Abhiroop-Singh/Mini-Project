import React from "react";
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
        </div>
      </div>
    </>
  );
};

export default GovDashboard;
