import React from "react";
import "./SectionFourHome.css"
import Stack from '@mui/material/Stack';

export const SectionFourHome = () => {
    return (
      <div className="sectionFourBodyHome">
        <br></br>
        <div className="sectionFourHomeHeader">
        <h2>Make Claims<br/>In Four Easy<br/>Steps</h2>
        </div>
        <div>
        <Stack direction="row" spacing={2} style={{justifyContent: "center"}} >
        <p4 className="sectionFourCircles">Call us with your registration and policy number to lodge your claim.</p4>
        <img src="https://i.postimg.cc/3NL0dKj2/Arrow-5.png" alt="arrow" className="arrowSectionFour"></img>
        <p4 className="sectionFourCircles">You take your car to a reputable repairer and give them your claim number. </p4>
        <img src="https://i.postimg.cc/3NL0dKj2/Arrow-5.png" alt="arrow" className="arrowSectionFour"></img>
        <p4 className="sectionFourCircles">Your car will be assessed to ensure quality repairs and costs are fair and reasonable.</p4>
        <img src="https://i.postimg.cc/3NL0dKj2/Arrow-5.png" alt="arrow" className="arrowSectionFour"></img>
        <p4 className="sectionFourCircles">We’ll manage the process and payments with the repairer, and keep you updated on progress.</p4>
      </Stack>
      </div>
      <br></br><br></br><br></br><br></br>
      </div>

    )}