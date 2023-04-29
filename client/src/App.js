import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import BidderLog from "./components/BidderLog/BidderLog";
import GovDashboard from "./components/GovDashboard/GovDashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bidderlog" element={<BidderLog />} />
          <Route path="/gov" element={<GovDashboard />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
