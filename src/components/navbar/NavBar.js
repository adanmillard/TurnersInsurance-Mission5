import React from "react";
import "./NavBar.css"
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  let navigate = useNavigate();
  return (
    <div>
      {/* Header for Home Page */}
      <header className="IHHeader">
        <Stack spacing={5.1} direction="row">
          {/* TURNERS LOGO */}
          <img
            src="https://i.postimg.cc/5N92hFNT/image3.png"
            alt="turnersLogo"
            style={{
              width: "160px",
              height: "33px",
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          />
          {/* SEARCH ICON & BUTTON - NO INPUT FIELD ADDED */}
          <Button
            variant="text"
            sx={{ fontSize: "13px", color: "#333", textTransform: "none" }}
          >
            <img
              src="https://i.postimg.cc/bv1Qy5kJ/Vector-2.png"
              alt="searchIcon"
              style={{
                width: 12,
                paddingRight: 10,
              }}
            />
            Find a Car
          </Button>
          {/* HOW TO BUY BUTTON */}
          <Button
            variant="text"
            sx={{ fontSize: "13px", color: "#333", textTransform: "none" }}
          >
            How to Buy
            <img
              src="https://i.postimg.cc/MKGLdYbr/Vector-1.png"
              alt="arwDwnIcon"
              style={{
                width: 12,
                paddingLeft: 3,
              }}
            />
          </Button>
          {/* SELL YOUR CAR BUTTON */}
          <Button
            variant="text"
            sx={{ fontSize: "13px", color: "#333", textTransform: "none" }}
          >
            Sell your Car
            <img
              src="https://i.postimg.cc/MKGLdYbr/Vector-1.png"
              alt="arwDwnIcon"
              style={{
                width: 12,
                paddingLeft: 5,
              }}
            />
          </Button>
          {/* FINANCE BUTTON */}
          <Button
            variant="text"
            sx={{ fontSize: "13px", color: "#333", textTransform: "none" }}
          >
            Finance
            <img
              src="https://i.postimg.cc/MKGLdYbr/Vector-1.png"
              alt="arwDwnIcon"
              style={{
                width: 12,
                paddingLeft: 5,
              }}
            />
          </Button>
          {/* CAR INSURANCE BUTTON */}
          <Button
            variant="text"
            sx={{ fontSize: "13px", color: "#333", textTransform: "none" }}
          >
            Car Insurance
            <img
              src="https://i.postimg.cc/MKGLdYbr/Vector-1.png"
              alt="arwDwnIcon"
              style={{
                width: 12,
                paddingLeft: 5,
              }}
            />
          </Button>
          {/* TURNERS SUBSCRIPTION */}
          <Button
            variant="text"
            sx={{ fontSize: "13px", color: "#333", textTransform: "none" }}
          >
            Turners Subscription
            <img
              src="https://i.postimg.cc/MKGLdYbr/Vector-1.png"
              alt="arwDwnIcon"
              style={{
                width: 12,
                paddingLeft: 5,
              }}
            />
          </Button>
          {/* GET A QUOTE BUTTON - FILLED BACKGROUND */}
          <Button
            variant="contained"
            sx={{
              borderRadius: 30,
              height: "35px",
              fontSize: "13px",
              textTransform: "none",
            }}
            onClick={() => navigate("/personal-details/contact-information")}
          >
            Get A Quote
          </Button>
          {/* MY ACCOUNT BUTTON - FILLED BACKGROUND */}
          <Button
            variant="contained"
            sx={{
              borderRadius: 30,
              height: "35px",
              fontSize: "13px",
              textTransform: "none",
            }}
          >
            <img
              src="https://i.postimg.cc/tJp5Z9DM/Vector.png"
              alt="personIcon"
              style={{ paddingRight: 10, width: "15px" }}
            />
            My Account
          </Button>
        </Stack>
      </header>
    </div>
  );
};
