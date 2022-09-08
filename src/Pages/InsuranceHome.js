import React from "react";
import "./InsuranceHome.css";
import { NavBar } from "../components/navbar/NavBar";
import { HomeBody } from "../components/Body/HomeBody";
import { SectionTwoHome } from "../components/Body/SectionTwoHome";
import { SectionThreeHome } from "../components/Body/SectionThreeHome";
import { SectionFourHome } from "../components/Body/SectionFourHome";
import { SectionFiveHome } from "../components/Body/SectionFiveHome";
import { SectionSixHome } from "../components/Body/SectionSixHome";
import { HomeFooter } from "../components/Body/HomeFooter";

export const InsuranceHome = () => {
  return (
    <div>
      <NavBar />
      <HomeBody /><br></br><br></br><br></br>
      <SectionTwoHome />
      <SectionThreeHome />
      <SectionFourHome />
      <SectionFiveHome />
      <SectionSixHome />
      <HomeFooter />
    </div>
  );
};
