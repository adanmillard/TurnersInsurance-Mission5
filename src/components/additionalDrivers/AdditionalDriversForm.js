import React, { useState } from "react";
import { DetailsForm } from "../quotePersonDetails/DetailsForm";
import { useNavigate } from "react-router-dom";

export const AdditionalDriversForm = ({ setAddDrivers }) => {
  const [addAnotherDriver, setAddAnotherDriver] = useState(false);
  let navigate = useNavigate();

  const addAnotherDriverFN = () => {
    setAddAnotherDriver(true);
  };

  const cancelDrivers = () => {
    setAddDrivers(false);
  };

  return (
    <div>
      <div className="DF-AD-container">
        <DetailsForm />
      </div>
      <div className="DF-AD-container">
        {addAnotherDriver && <DetailsForm />}
      </div>
      <div className="cover-up">
        <div className="cancel-add-btns">
          <button className="cancel-btn" onClick={() => cancelDrivers()}>
            Cancel Additional Driver
          </button>
          <button
            className={addAnotherDriver ? "hidden" : "add-btn"}
            onClick={() => addAnotherDriverFN()}
          >
            + Add Another Driver
          </button>
        </div>
      </div>
      <div className="back-and-next-btn">
        <button
          onClick={() => navigate("/personal-details/vehicle-details")}
          className="back-btn"
        >
          {" "}
          &lt; Back{" "}
        </button>
        <button type="submit" className="next-btn">
          {" "}
          Next{" "}
        </button>
      </div>
    </div>
  );
};
