import React from "react";
import "./HomeBody.css"
import Button from "@mui/material/Button";



export const HomeBody = () => {
  return (
<div>
<img
            src="https://i.postimg.cc/5N92hFNT/image3.png"
            alt="turnersLogo"
            className="turnersLogosec1"
            style={{
              width: "160px",
              height: "33px",
            }} />
    <body/>
    <div class="section1">
    <div className="textOpening">
    <h1 className="openingLine">Manage your insurance and <br/>vehicles all in one place!</h1>
    <p>We've been helping Kiwis buy and sells used cars for over 50 <br/>
    years. And if you want car insurance, we can sort that out for<br/>you as well.</p>
    <Button
            variant="contained"
            sx={{
              borderRadius: 30,
              height: "68px",
              width: "270px",
              fontSize: "24px",
              textTransform: "none",
            }}
          >
            Get A Quote
          </Button>
    </div>
    <img src="https://i.postimg.cc/QCvLnW5N/carBlue.png" alt="homeCar" className="CarImg"/>
    </div>
    </div>
  );
};
