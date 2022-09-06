import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AdditionalDriversForm } from "./AdditionalDriversForm";

export const AdditionalDriversSelect = () => {
  const [addDrivers, setAddDrivers] = useState(false);
  let navigate = useNavigate();
  const addingDrivers = () => {
    setAddDrivers(true);
  };

  return (
    <div>
      <div>
        <h1>Additional Drivers</h1>
        <div>
          <p>will there be any additional Drivers?</p>
          <button onClick={addingDrivers}>Yes</button>
          <button>No</button>
        </div>
        <button onClick={() => navigate("/personal-details/vehicle-details")}>
          {" "}
          &lt; Back{" "}
        </button>
      </div>
      <div>
        {addDrivers && <AdditionalDriversForm setAddDrivers={setAddDrivers} />}
      </div>
    </div>
  );
};
