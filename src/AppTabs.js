import React from "react";
//import "./AppTabs.css";
//import homeIcon from "./images/home.svg";
import { NavLink } from "react-router-dom";

export default function AppTabs() {
  return (
    <nav>
      <NavLink activeClassName="ActiveHomeTab" exact id="HomeTab" to="/">
        Home
        {/* <img src={homeIcon} alt="homeIcon" width="30px" height="30px"></img> */}
      </NavLink>
      <NavLink activeClassName="ActiveAboutUsTab" id="AboutUsTab" to="/AboutUs">
        About Us
      </NavLink>
      <NavLink
        activeClassName="ActiveCampaignTab"
        exact
        id="CampaignTab"
        to="/Campaign">
        Campaign
      </NavLink>
    </nav>
  );
}
