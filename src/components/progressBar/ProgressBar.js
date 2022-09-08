import React from "react";

export const ProgressBar = ({ personalComplete, vehicleDetails }) => {
  console.log(personalComplete);
  return (
    <div className="progress-main-container">
      <div className="circle-containers">
        <span className="circle-complete">1</span>
        <p>
          Personal <br /> Details
        </p>
      </div>
      <div className="circle-containers">
        <span className={personalComplete ? "circle-complete" : "circle"}>
          2
        </span>
        <p>
          Vehicle <br /> Details
        </p>
      </div>
      <div className="circle-containers">
        <span className={vehicleDetails ? "circle-complete" : "circle"}>3</span>
        <p>
          Additional <br /> Drivers
        </p>
      </div>
      <div className="circle-containers">
        <span className="circle">4</span>
        <p>
          Compare & <br /> Choose
        </p>
      </div>
      <span className="dotted-line"></span>
    </div>
  );
};
