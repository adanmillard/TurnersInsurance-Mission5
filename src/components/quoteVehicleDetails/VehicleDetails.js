import React from "react";
import { NextAndBackButtons } from "../nextAndBackButtons/NextAndBackButtons";

export const VehicleDetails = () => {
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
        <NextAndBackButtons />
      </form>
    </div>
  );
};
