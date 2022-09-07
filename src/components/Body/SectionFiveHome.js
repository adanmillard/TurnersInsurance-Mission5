import React from "react";
import "./SectionFiveHome.css"
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';

export const SectionFiveHome = () => {
    return (
        <div className="sectionFiveBodyHome">
            <div className="sectionFiveHomeHeader">
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                <h4 className="testimonialsSecFive">TESTIMONIALS</h4>
                <h2 className="sectionFiveTitle">Read What Others<br/>Have to Say</h2>
            </div>
        <div className="testimonialCards">
            <Stack direction="row" spacing={10} className="testCardsandImg">
                {/* CARD ONE - TESTIMONIALS */}
                <Stack spacing={13} className="testImgvsCardSpace">
            <img src="https://i.postimg.cc/xdYF5rFN/Ellipse-7.png" alt="testimonial1" className="testimonialImage"></img>
            <Card sx={{ maxWidth: 345 }} style={{borderRadius: "40px"}}>
          <p8 className="testCardText">
          <br/>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt”
          </p8>
    </Card>
    </Stack>
{/* CARD TWO - TESTIMONIALS */}
    <Stack spacing={13} className="testImgvsCardSpace">
            <img src="https://i.postimg.cc/5jd3nGSR/Ellipse-8.png" alt="testimonial2" className="testimonialImage"></img>
            <Card sx={{ maxWidth: 345 }} style={{borderRadius: "40px"}}>
          <p8 className="testCardText">
          <br/>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt”
          </p8>
    </Card>
    </Stack>
{/* CARD THREE - TESTIMONIALS */}
    <Stack spacing={13} className="testImgvsCardSpace">
            <img src="https://i.postimg.cc/tgCL3ZTV/Ellipse-9.png" alt="testimonial3" className="testimonialImage"></img>
            <Card sx={{ maxWidth: 345 }} style={{borderRadius: "40px"}}>
          <p8 className="testCardText">
          <br/>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt”
          </p8>
    </Card>
    </Stack>
    </Stack>
    </div>
        </div>
    )}