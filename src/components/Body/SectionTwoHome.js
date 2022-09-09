import React from "react";
import Stack from "@mui/material/Stack";
import "./SectionTwoHome.css";
import Avatar from "@mui/material/Avatar";

export const SectionTwoHome = () => {
  return (
    <div className="sectionTwoBodyHome">
      <div>
        <h2 className="sectionTwoHomeHeader">
          What We Can
          <br />
          Cover
        </h2>
      </div>
      <div>
        <Stack
          direction="row"
          spacing={2.5}
          style={{ justifyContent: "center", textAlign: "center" }}
        >
          <Stack spacing={2}>
            <Avatar
              src="https://i.postimg.cc/kgDQVNF6/covercircles-03.png"
              alt="plane"
              sx={{ width: "290px", height: "390px" }}
            />
            <p1 className="sectionTwoTitles" style={{ marginTop: "-150px" }}>
              Lock & <br />
              Keys
            </p1>
          </Stack>
          <Stack spacing={2}>
            <Avatar
              src="https://i.postimg.cc/bYTk3VmS/covercircles-02.png"
              alt="plane"
              sx={{ width: "290px", height: "390px" }}
            />
            <p1 className="sectionTwoTitles" style={{ marginTop: "-150px" }}>
              Emergency <br />
              Travel
            </p1>
          </Stack>
          <Stack spacing={2}>
            <Avatar
              src="https://i.postimg.cc/fLsSvYXv/covercircles-01.png"
              alt="towing"
              sx={{ width: "290px", height: "390px" }}
            />
            <p1 className="sectionTwoTitles" style={{ marginTop: "-150px" }}>
              Towing &<br /> Storage
            </p1>
          </Stack>
          <Stack spacing={2}>
            <Avatar
              src="https://i.postimg.cc/1RC48kWB/covercircles-04.png"
              alt="vehiclecover"
              sx={{ width: "290px", height: "390px" }}
            />
            <p1 className="sectionTwoTitles" style={{ marginTop: "-150px" }}>
              Vehicle Cover
              <br /> Replacement
            </p1>
          </Stack>
        </Stack>
      </div>
      <br></br>
      <Stack
        direction="row"
        spacing={2.5}
        style={{ justifyContent: "center", textAlign: "center" }}
      >
        <Stack spacing={2}>
          <Avatar
            src="https://i.postimg.cc/2jK8k46X/covercircles-05.png"
            alt="screen"
            sx={{ width: "290px", height: "390px" }}
          />
          <p1 className="sectionTwoTitles" style={{ marginTop: "-150px" }}>
            Windscreen &<br />
            Window Glass Cover
          </p1>
        </Stack>
        <Stack spacing={2}>
          <Avatar
            src="https://i.postimg.cc/j5jtK5rb/covercircles-06.png"
            alt="trailor"
            sx={{ width: "290px", height: "390px" }}
          />
          <p1 className="sectionTwoTitles" style={{ marginTop: "-150px" }}>
            Trailor
            <br />
            Cover
          </p1>
        </Stack>
        <Stack spacing={2}>
          <Avatar
            src="https://i.postimg.cc/RZzmhGzG/covercircles-07.png"
            alt="theft"
            sx={{ width: "290px", height: "390px" }}
          />
          <p1 className="sectionTwoTitles" style={{ marginTop: "-150px" }}>
            Hire Car
            <br />
            After Theft
          </p1>
        </Stack>
        <Stack spacing={2}>
          <Avatar
            src="https://i.postimg.cc/vDFJ18CD/covercircles-08.png"
            alt="replacement"
            sx={{ width: "290px", height: "390px" }}
          />
          <p1 className="sectionTwoTitles" style={{ marginTop: "-150px" }}>
            New For Old Car
            <br /> Replacement
          </p1>
        </Stack>
      </Stack>
      <br></br>
    </div>
  );
};
