import React from "react";
import "./HomeFooter.css"
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export const HomeFooter = () => {
    return (
      <div className="HomeFooterSection">
        <Stack direction="row" spacing={5} className="footerHomeContentAll">
            <p className="copyRight2022">2022 Turners</p>
            <Button
            variant="text" style={{color: "white", textTransform: "none", fontSize: "14px"}}>
                <img src="https://i.postimg.cc/h4XxMKYQ/Vector-3.png" alt="branchDetails" style={{width: "20px", height: "18px", paddingRight: "15px"}}></img>
                Branch Details
            </Button>
            <Button
            variant="text" style={{color: "white", textTransform: "none", fontSize: "14px"}}>
                <img src="https://i.postimg.cc/NFvdBL9F/Vector-4.png" alt="facebook" style={{width: "10px", height: "18px", paddingRight: "15px"}}></img>
                Facebook
            </Button>
            <Button
            variant="text" style={{color: "white", textTransform: "none", fontSize: "14px"}}>
                <img src="https://i.postimg.cc/N0J03rn8/Vector-5.png" alt="branchDetails" style={{width: "22px", height: "17px", paddingRight: "15px"}}></img>
                Newsletter
            </Button>
            <Button
            variant="text" style={{color: "white", textTransform: "none", fontSize: "14px"}}>
                <img src="https://i.postimg.cc/N0J03rn8/Vector-5.png" alt="branchDetails" style={{width: "22px", height: "17px", paddingRight: "15px"}}></img>
                Email Alerts
            </Button>
            <Button
            variant="text" style={{color: "white", textTransform: "none", fontSize: "14px"}}>
                <img src="https://i.postimg.cc/kgh39Fn5/Vector-6.png" alt="branchDetails" style={{width: "20px", height: "20px", paddingRight: "15px"}}></img>
                Instagram
            </Button>
        </Stack>
      </div>
    )}