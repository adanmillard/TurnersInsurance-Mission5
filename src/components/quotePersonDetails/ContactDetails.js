import React from "react";
import { useNavigate } from "react-router-dom";

export const ContactDetails = () => {
  let navigate = useNavigate();
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
        <div>
          <button onClick={() => navigate("/")}> &lt; Back </button>
          <button
            type="submit"
            onClick={() => navigate("/personal-details/vehicle-details")}
          >
            {" "}
            Next{" "}
          </button>
        </div>
      </form>
    </div>
  );
};
