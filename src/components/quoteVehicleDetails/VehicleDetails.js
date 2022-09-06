import React from "react";
import { useNavigate } from "react-router-dom";

export const VehicleDetails = () => {
  let navigate = useNavigate();
  return (
    <div>
      <form>
        <div>
          <h1>Vehicle Details</h1>
        </div>
        <div>
          <label>License Plate</label>
          <input type="text" />
          <label>Year</label>
          <input type="text" />
        </div>
        <div>
          <label>Make</label>
          <input type="text" />
          <label>Model</label>
          <input type="text" />
        </div>
        <div>
          <label>Where is the car parked at night?</label>
          <input type="text"></input>
          <input type="text"></input>
          <input type="text"></input>
          <input type="text"></input>
        </div>
        <div>
          <button
            onClick={() => navigate("/personal-details/contact-information")}
          >
            {" "}
            &lt; Back{" "}
          </button>
          <button
            type="submit"
            onClick={() => navigate("/personal-details/additional-drivers")}
          >
            {" "}
            Next{" "}
          </button>
        </div>
      </form>
    </div>
  );
};
