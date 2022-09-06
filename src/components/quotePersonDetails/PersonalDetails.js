import React from "react";
import { ContactDetails } from "./ContactDetails";
import { DetailsForm } from "./DetailsForm";

export const PersonalDetails = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
  };

  return (
    <div className="QPD-main-container">
      <form onSubmit={handleSubmit}>
        <div>
          <h1>Personal Details</h1>
          <div>
            <DetailsForm />
          </div>
        </div>
        <ContactDetails />
      </form>
    </div>
  );
};
