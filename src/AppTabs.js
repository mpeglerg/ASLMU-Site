import React from "react";
import { NavLink } from "react-router-dom";

export default function AppTabs() {
  return (
    <div className="AllTabs">
      <nav
        style={{
          paddingTop: "15px",
          paddingLeft: "15px"
        }}>
        <NavLink
          style={{ textDecoration: "none", color: "#f79051" }}
          className="HomeTab"
          activeClassName="ActiveHomeTab"
          exact
          id="HomeTab"
          to="/">
          <p>
            <font size="6" face="FuturaItalicBold">
              Home
            </font>
          </p>
        </NavLink>
        <NavLink
          style={{ textDecoration: "none", color: "#f79051" }}
          activeClassName="ActiveAboutUsTab"
          id="AboutUsTab"
          to="/AboutUs">
          <p>
            <font size="6" face="FuturaItalicBold">
              About Us
            </font>
          </p>
        </NavLink>
        <NavLink
          style={{
            textDecoration: "none",
            color: "#f79051"
          }}
          activeClassName="ActiveCampaignTab"
          exact
          id="CampaignTab"
          to="/Campaign">
          <p className="CampaignText">
            <font size="6" face="FuturaItalicBold" style={{}}>
              Campaign
            </font>
          </p>
        </NavLink>
      </nav>
    </div>
  );
}
