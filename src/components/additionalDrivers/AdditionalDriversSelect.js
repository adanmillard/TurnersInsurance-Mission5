import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AdditionalDriversForm } from "./AdditionalDriversForm";
import { ProgressBar } from "../progressBar/ProgressBar";

export const AdditionalDriversSelect = () => {
  const [addDrivers, setAddDrivers] = useState(false);
  const vehicleDetails = true;
  const personalComplete = true;
  let navigate = useNavigate();
  const addingDrivers = () => {
    setAddDrivers(true);
  };

  return (
    <div>
      <ProgressBar
        vehicleDetails={vehicleDetails}
        personalComplete={personalComplete}
      />
      <div className="AD-main-container">
        <h1 className="AD-h1">Additional Drivers</h1>
        <div>
          <div className="AD-question-container">
            <p>Will there be any additional drivers?</p>
            <div className="btn-container">
              <button onClick={addingDrivers} className="AD-btn">
                Yes
              </button>
              <button className="AD-btn">No</button>
            </div>
          </div>
          <div className={addDrivers ? "hidden" : "AD-back-btn"}>
            <button
              onClick={() => navigate("/personal-details/vehicle-details")}
              className="back-btn"
            >
              {" "}
              &lt; Back{" "}
            </button>
          </div>
        </div>
        <div>
          {addDrivers && (
            <AdditionalDriversForm setAddDrivers={setAddDrivers} />
          )}
        </div>
      </div>
    </div>
  );
};
