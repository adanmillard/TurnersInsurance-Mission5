import React from "react";

export const DetailsForm = () => {
  return (
    <div className="DF-container">
      <form>
        <div className="FN-LN-container">
          <div className="FN-left">
            <label>First Name</label>
            <input type="text" autoComplete="first-name" />
          </div>
          <div className="LN-right">
            <label>Last Name</label>
            <input type="text" autoComplete="last-name" />
          </div>
        </div>
        <div className="gender-DOB-container">
          <div className="gender-left">
            <label htmlFor="gender">Gender</label>
            <select name="gender" required>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="DOB-right">
            <label>D.O.B</label>
            <input type="date" />
          </div>
        </div>
        <div className="license-type-container">
          <label htmlFor="license-type">
            What type of driving license do you have?
          </label>
          <select name="license-type" required>
            <option value="full">NZ Full</option>
            <option value="restricted">NZ Restricted</option>
            <option value="Overseas">Overseas License</option>
            <option value="none">None</option>
          </select>
        </div>
      </form>
    </div>
  );
};
