import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import BidderLog from "./components/BidderLog/BidderLog";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bidderlog" element={<BidderLog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
