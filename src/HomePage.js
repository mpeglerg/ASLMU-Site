import React from "react";
import "./HomePage.css";
import campaignposter from "./images/campaignposter.png";

export default function HomePage() {
  return (
    <div>
      <img
        className="CampaignPoster"
        src={campaignposter}
        alt="campaignposter"
        style={{ marginTop: "-15%" }}></img>
      <h1 className="VoteTitle">vote Anya and Taylor March 26th - April 6th</h1>
    </div>
  );
}
