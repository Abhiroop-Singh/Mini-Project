import React from "react";
import { Routes, Route,BrowserRouter } from "react-router-dom"
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import Homepage from './components/Homepage/Homepage'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;