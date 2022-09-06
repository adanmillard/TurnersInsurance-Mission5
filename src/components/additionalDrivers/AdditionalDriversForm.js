import React from "react";
import { NextAndBackButtons } from "../nextAndBackButtons/NextAndBackButtons";
import { PersonalDetails } from "../quotePersonDetails/PersonalDetails";

export const AdditionalDriversForm = () => {
  return (
    <div>
      <div>
        <PersonalDetails />
        <div>
          <button>Cancel Additional Driver</button>
          <button>+ Add Another Driver</button>
        </div>
        <NextAndBackButtons />
      </div>
    </div>
  );
};
