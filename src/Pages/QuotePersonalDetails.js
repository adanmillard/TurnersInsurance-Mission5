import React from "react";
import { NavBar } from "../components/navbar/NavBar";
import { PersonalDetails } from "../components/quotePersonDetails/PersonalDetails";
import { VehicleDetails } from "../components/quoteVehicleDetails/VehicleDetails";
import { AdditionalDriversSelect } from "../components/additionalDrivers/AdditionalDriversSelect";
import { AdditionalDriversForm } from "../components/additionalDrivers/AdditionalDriversForm";
import { ContactDetails } from "../components/quotePersonDetails/ContactDetails";

export const QuotePersonalDetails = () => {
  return (
    <div>
      <NavBar />
      <PersonalDetails />
      <ContactDetails />
      <VehicleDetails />
      <AdditionalDriversSelect />
      <AdditionalDriversForm />
    </div>
  );
};
