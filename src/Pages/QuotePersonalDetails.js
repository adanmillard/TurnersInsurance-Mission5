import React from "react";
import { NavBar } from "../components/navbar/NavBar";
// import { QuotePersonalDetailsOne } from "../components/quotePersonDetailsOne/QuotePersonalDetailsOne";
import { VechicleDetails } from "../components/quoteVehicleDetails/VechicleDetails";

export const QuotePersonalDetails = () => {
  return (
    <div>
      <NavBar />
      {/* <QuotePersonalDetailsOne /> */}
      <VechicleDetails />
    </div>
  );
};
