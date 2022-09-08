import React from "react";
import "./InsuranceHome.css";
import { Outlet } from "react-router-dom";

export const QuotePersonalDetails = () => {
  return (
    <div>
      <div className="PD-main">
        <Outlet />
      </div>
    </div>
  );
};
