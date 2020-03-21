import React from "react";
//import "./AppTabs.css";
//import homeIcon from "./images/home.svg";
import { NavLink } from "react-router-dom";

//import url("fonts/FuturaBoldItalic.ttf")

export default function AppTabs() {
  return (
    <div className="AllTabs">
      <nav style={{ paddingTop: "15px", paddingLeft: "15px" }}>
        <NavLink
          style={{ textDecoration: "none", color: "#f79051" }}
          className="HomeTab"
          activeClassName="ActiveHomeTab"
          exact
          id="HomeTab"
          to="/">
          <p>
            <font face="FuturaItalicBold">Home</font>
          </p>
          {/* <img src={homeIcon} alt="homeIcon" width="30px" height="30px"></img> */}
        </NavLink>
        <NavLink
          style={{ textDecoration: "none", color: "#f79051" }}
          activeClassName="ActiveAboutUsTab"
          id="AboutUsTab"
          to="/AboutUs">
          <p>
            <font face="FuturaItalicBold">About Us</font>
          </p>
        </NavLink>
        <NavLink
          style={{ textDecoration: "none", color: "#f79051" }}
          activeClassName="ActiveCampaignTab"
          exact
          id="CampaignTab"
          to="/Campaign">
          <p className="CampaignText">
            <font face="FuturaItalicBold">Campaign</font>
          </p>
        </NavLink>
      </nav>
    </div>
  );
}
