import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./GovDashboard.css";

const Dummydata = () => {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    let interval = null;

    interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds => seconds - 1);
      }
    }, 1000);

    setTimeout(() => {
      navigate('/gov');
    }, 5000);
    return () => {clearInterval(interval);};
  }, [seconds]);

  return (
    <div id="dummy">Success
    <br></br>
      {seconds}s
    </div>

  );

};

export default Dummydata;
