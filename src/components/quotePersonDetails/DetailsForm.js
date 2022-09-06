import React from "react";

export const DetailsForm = () => {
  return (
    <div>
      <form>
        <div>
          <label>First Name</label>
          <input type="text" />
          <label>Last Name</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="gender">Gender</label>
          <select name="gender" required>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <label>D.O.B</label>
          <input type="date" />
        </div>
        <div>
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
