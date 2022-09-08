import React from "react";
import { useNavigate } from "react-router-dom";
import { ProgressBar } from "../progressBar/ProgressBar";

export const VehicleDetails = () => {
  const personalComplete = true;
  let navigate = useNavigate();
  return (
    <div>
      <ProgressBar personalComplete={personalComplete} />
      <div className="VD-main-container">
        <div>
          <h1 className="VD-h1">Vehicle Details</h1>
        </div>
        <form>
          <div className="VD-form-container">
            <div className="VD-license-and-year">
              <div className="VD-license-left">
                <label>License Plate</label>
                <input type="text" className="test" />
              </div>
              <div className="VD-year-right">
                <label>Year</label>
                <input type="text" className="test" />
              </div>
            </div>
            <div className="VD-make-and-model">
              <div>
                <label className="VD-make-left">Make</label>
                <input type="text" className="test" />
              </div>
              <div className="VD-model-right">
                <label>Model</label>
                <input type="text" className="test" />
              </div>
            </div>
            <div className="VD-car-park">
              <div className="VD-carpark-address">
                <label>Where is the car parked at night?</label>
                <input type="text" autoComplete="street-address"></input>
              </div>
              <div className="VD-carpark-address-line2">
                <input type="text" autoComplete="address-level2"></input>
                <input type="text" autoComplete="address-level1"></input>
                <input type="text" autoComplete="postal-code"></input>
              </div>
            </div>
          </div>
          <div className="back-and-next-btn">
            <button
              className="back-btn"
              onClick={() => navigate("/personal-details/contact-information")}
            >
              {" "}
              &lt; Back{" "}
            </button>
            <button
              className="next-btn"
              type="submit"
              onClick={() => navigate("/personal-details/additional-drivers")}
            >
              {" "}
              Next{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
