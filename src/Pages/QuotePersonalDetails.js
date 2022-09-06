import React from "react";
import "./InsuranceHome.css";
import { Outlet } from "react-router-dom";
import { NavBar } from "../components/navbar/NavBar";
import { PersonalDetails } from "../components/quotePersonDetails/PersonalDetails";
// import { VehicleDetails } from "../components/quoteVehicleDetails/VehicleDetails";
// import { AdditionalDriversSelect } from "../components/additionalDrivers/AdditionalDriversSelect";
// import { AdditionalDriversForm } from "../components/additionalDrivers/AdditionalDriversForm";
import { ContactDetails } from "../components/quotePersonDetails/ContactDetails";

export const QuotePersonalDetails = () => {
  return (
    <div>
      <NavBar />
      <div className="PD-main">
        <PersonalDetails />
        <ContactDetails />
        <Outlet />
      </div>

      {/* <VehicleDetails />
      <AdditionalDriversSelect />
      <AdditionalDriversForm /> */}
    </div>
  );
};
