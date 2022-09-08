import React from "react";

export const ProgressBar = () => {
  return (
    <div className="progress-main-container">
      <div>
        <span className="circle">1</span>
        <p>
          Personal <br /> Details
        </p>
      </div>
      <div>
        <span className="dotted-line"></span>
      </div>

      <div>
        <span className="circle">2</span>
        <p>
          Vehicle <br /> Details
        </p>
      </div>
      <div>
        <span className="dotted-line"></span>
      </div>

      <div>
        <span className="circle">3</span>
        <p>
          Additional <br /> Drivers
        </p>
      </div>
      <div>
        <span className="dotted-line"></span>
      </div>

      <div>
        <span className="circle">4</span>
        <p>
          Compare & <br /> Choose
        </p>
      </div>
    </div>
  );
};
