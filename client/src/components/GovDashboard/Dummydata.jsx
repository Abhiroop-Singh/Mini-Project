import React, { useEffect, useState } from "react";
import "./GovDashboard.css";

const Dummydata = () => {
    const [seconds, setSeconds] = useState(5);



  useEffect(() => {
    let interval = null;
 
      interval = setInterval(() => {
        if(seconds>0){
        setSeconds(seconds => seconds - 1);}
      }, 1000);
     
    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <div id="dummy">Success
        {seconds}s
        </div>
    
  );

};

export default Dummydata;
