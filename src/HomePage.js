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
        width="cover"
        style={{ marginTop: "-15%" }}></img>
    </div>
  );
}
