import React from "react";
import { NextAndBackButtons } from "../nextAndBackButtons/NextAndBackButtons";

export const ContactDetails = () => {
  return (
    <div>
      <form>
        <div>
          <h1>Contact Information</h1>

          <div>
            <label>Email</label>
            <input type="email" />
          </div>
          <div>
            <label>Address</label>
            <input type="text"></input>
            <input type="text"></input>
            <input type="text"></input>
            <input type="text"></input>
          </div>
        </div>
        <NextAndBackButtons />
      </form>
    </div>
  );
};
