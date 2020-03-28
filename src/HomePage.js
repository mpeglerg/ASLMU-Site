import React from "react";
import "./HomePage.css";
import logo from "./images/logo.png";
import campaignposter from "./images/campaignposter.png";

export default function HomePage() {
  return (
    <div>
      <img
        className="CampaignPoster"
        src={campaignposter}
        alt="campaignposter"
        style={{ marginTop: "-15%" }}></img>
      <h1 className="VoteTitle">vote Anya and Taylor April 1st - April 3rd</h1>
      <img className="logo" src={logo}></img>
    </div>
  );
}
