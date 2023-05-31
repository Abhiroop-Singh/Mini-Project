import React from "react";
import abi from "./contract/Bidder.json";
import { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import BidderLog from "./components/BidderLog/BidderLog";
import GovDashboard from "./components/GovDashboard/GovDashboard";
import UserDashboard from "./components/UserDashboard/UserDashboard";
import ReviewerDashboard from "./components/ReviewerDashboard/ReviewerDashboard";
import TenderList from "./components/Tenders/TenderList";
import TenderDetails from "./components/Tenders/TenderDetails";
import Dummydata from "./components/GovDashboard/Dummydata";
import GovLogin from "./components/Authentication/GovLogin";
import ReviewerLogin from "./components/Authentication/ReviewerLogin";
import { ethers } from "ethers";

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });
  const [account, setAccount] = useState("None");
  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = "0xb2a3299033B665c80BFAFdB25af96F1b887bb656";
      // 0x7e94641D89234F913768DE9008E9816ef5cFA079
      const contractABI = abi.abi;
      try {
        const { ethereum } = window;

        if (ethereum) {
          const account = await ethereum.request({
            method: "eth_requestAccounts",
          });

          window.ethereum.on("chainChanged", () => {
            window.location.reload();
          });

          window.ethereum.on("accountsChanged", () => {
            window.location.reload();
          });

          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const contract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
          );
          setAccount(account);
          setState({ provider, signer, contract });
        } else {
          alert("Please install metamask");
        }
      } catch (error) {
        console.log(error);
      }
    };
    connectWallet();
  }, []);
  console.log(state);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bidderlog" element={<BidderLog />} />
          <Route path="/gov" element={<GovDashboard state={state} />} />
          <Route path="/user" element={<UserDashboard val={state} />} />
          <Route path="/reviewer" element={<ReviewerDashboard />} />
          <Route path="/tenders" element={<TenderList />}  />
          <Route path="/tenderdetails/:id" element={<TenderDetails val={state} />}  />
          <Route path="/success" element={<Dummydata />} />
          <Route path="/govLogin" element={<GovLogin />} />
          <Route path="/reviewerLogin" element={<ReviewerLogin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
