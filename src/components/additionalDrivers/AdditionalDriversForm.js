import React, { useState } from "react";
import { NextAndBackButtons } from "../nextAndBackButtons/NextAndBackButtons";
import { DetailsForm } from "../quotePersonDetails/DetailsForm";

export const AdditionalDriversForm = ({ setAddDrivers }) => {
  const [addAnotherDriver, setAddAnotherDriver] = useState(false);

  const addAnotherDriverFN = () => {
    setAddAnotherDriver(true);
  };

  const cancelDrivers = () => {
    setAddDrivers(false);
  };

  return (
    <div>
      <div>
        <DetailsForm />
      </div>
      <div>{addAnotherDriver && <DetailsForm />}</div>
      <div>
        <button onClick={() => cancelDrivers()}>
          Cancel Additional Driver
        </button>
        <button onClick={() => addAnotherDriverFN()}>
          + Add Another Driver
        </button>
        <NextAndBackButtons />
      </div>
    </div>
  );
};
