import React, { useEffect } from "react";
import "./counter.css";

const Counter = () => {
  useEffect(function () {
    const c = document.querySelectorAll(".ch");
    c.forEach((item) => {
      item.innerText = "0";

      const updateCounter = () => {
        const target = +item.getAttribute("data-target");
        const a = +item.innerText;

        const increment = target / 3200000000000000;
        if (a < target) {
          item.innerText = `${Math.ceil(a + increment)}`;
          setTimeout(updateCounter, 30);
        } else {
          item.innerText = target;
        }
      };
      updateCounter();
    });
  }, []);

  return (
    <div className="count-container">
      <div className="col-container">
        <div className="counter-box">
          <h2 data-target="56" class="ch">
            100
          </h2>
          <h3 class="tex">Bids Acceptance Percentage</h3>
        </div>
      </div>
      <div className="col-container">
        <div className="counter-box">
          <h2 data-target="7.8" class="ch">
            10
          </h2>
          <h3 class="tex">User Rating</h3>
        </div>
      </div>
      {/* <div className="col-container">
        <div className="counter-box">
          <img src={require("../../Assets/c.jpeg")} className="cim" alt="" />
          <h2 data-target="13" class="ch">
            13
          </h2>
          <h4 class="tex">Unresolved</h4>
        </div>
      </div> */}
    </div>
  );
};

export default Counter;
