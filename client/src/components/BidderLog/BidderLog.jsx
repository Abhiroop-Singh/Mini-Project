import "./bidderlog.css";
import React from "react";
import {
  Box,
  Container,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Text,
} from "@chakra-ui/react";
import UserLogin from "../Authentication/UserLogin";
import UserSignup from "../Authentication/UserSignup";

const BidderLog = () => {
  return (
    <div id="pplogin">
      <Container maxW="70rem">
        <Box
          display="flex"
          justifyContent="center"
          p={3}
          w="100%"
          m="40px 0 15px 0"
          bg="white"
          borderRadius="lg"
          borderWidth="2px"
          borderColor={"#ececec"}
        >
          <Text fontSize={"4xl"} fontFamily="Work Sans">
            Bidder
          </Text>
        </Box>
        <Box
          p={4}
          w="100%"
          bg="white"
          borderRadius="lg"
          borderWidth="2px"
          borderColor={"#ececec"}
        >
          <Tabs isFitted variant="soft-rounded">
            <TabList>
              <Tab _hover={{ bg: "rgb(240, 254, 240)" }}>Login</Tab>
              <Tab _hover={{ bg: "rgb(240, 254, 240)" }}>SignUp</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <UserLogin />
              </TabPanel>
              <TabPanel>
                <UserSignup />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    </div>
  );
};

export default BidderLog;
