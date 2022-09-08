import React from "react";
import { ContactDetails } from "./ContactDetails";
import { DetailsForm } from "./DetailsForm";
import { useNavigate } from "react-router-dom";
import { ProgressBar } from "../progressBar/ProgressBar";

export const PersonalDetails = () => {
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
  };

  return (
    <div className="QPD-main-container">
      <ProgressBar />
      <form onSubmit={handleSubmit}>
        <h1 className="PD-h1">Personal Information</h1>
        <DetailsForm />
        <h1 className="CI-h1">Contact Information</h1>
        <ContactDetails />
        <div className="back-and-next-btn">
          <button onClick={() => navigate("/")} className="back-btn">
            {" "}
            &lt; Back{" "}
          </button>
          <button
            type="submit"
            onClick={() => navigate("/personal-details/vehicle-details")}
            className="next-btn"
          >
            {" "}
            Next{" "}
          </button>
        </div>
      </form>
    </div>
  );
};
