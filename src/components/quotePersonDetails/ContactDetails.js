import React from "react";

export const ContactDetails = () => {
  return (
    <div className="CD-container">
      <div className="CD-form">
        <form>
          <div className="CD-email-container">
            <label>Email</label>
            <input type="email" />
          </div>
          <div className="CD-address-container">
            <label>Address</label>
            <input autoComplete="street-address" className="line1"></input>
            <div className="CD-address-small-inputs">
              <input autoComplete="address-level2" className="line2"></input>
              <input autoComplete="address-level1" className="line3"></input>
              <input autoComplete="postal-code" className="line4"></input>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
