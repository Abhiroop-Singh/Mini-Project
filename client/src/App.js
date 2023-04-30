import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import BidderLog from "./components/BidderLog/BidderLog";
import GovDashboard from "./components/GovDashboard/GovDashboard";
import UserDashboard from "./components/UserDashboard/UserDashboard";
import ReviewerDashboard from "./components/ReviewerDashboard/ReviewerDashboard";
import TenderList from "./components/Tenders/TenderList";
import TenderDetails from "./components/Tenders/TenderDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bidderlog" element={<BidderLog />} />
          <Route path="/gov" element={<GovDashboard />} />
          <Route path="/user" element={<UserDashboard />} />
          <Route path="/review" element={<ReviewerDashboard />} />
          <Route path="/tenders" element={<TenderList />} />
          <Route path="/tenderdetails/:id" element={<TenderDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
