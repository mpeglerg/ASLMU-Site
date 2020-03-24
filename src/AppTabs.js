import React from "react";
import { NavLink } from "react-router-dom";

export default function AppTabs() {
  return (
    <div className="AllTabs">
      <nav
        style={{
          paddingTop: "15px",
          paddingLeft: "15px",
          zIndex: 1,
          position: "absolute"
        }}>
        <NavLink
          style={{ textDecoration: "none", color: "#f79051" }}
          className="HomeTab"
          activeClassName="ActiveHomeTab"
          exact
          id="HomeTab"
          to="/">
          <p>
            <font
              size="6"
              face="FuturaItalicBold"
              style={{ backgroundColor: "#e8f6fa" }}>
              <a className="HomeTab"> Home </a>
            </font>
          </p>
        </NavLink>
        <NavLink
          style={{
            textDecoration: "none",
            color: "#f79051"
          }}
          activeClassName="ActiveAboutUsTab"
          id="AboutUsTab"
          to="/AboutUs">
          <p>
            <font
              size="6"
              face="FuturaItalicBold"
              style={{ backgroundColor: "#e8f6fa" }}>
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
            <font
              size="6"
              face="FuturaItalicBold"
              style={{ backgroundColor: "#e8f6fa" }}>
              Campaign
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
          id="EndorsementTab"
          to="/Endorsement">
          <p className="EndorsementText">
            <font
              size="6"
              face="FuturaItalicBold"
              style={{ backgroundColor: "#e8f6fa" }}>
              Endorsements
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
          id="ContactUsTab"
          to="/ContactUs">
          <p className="ContactUsText">
            <font
              size="6"
              face="FuturaItalicBold"
              style={{ backgroundColor: "#e8f6fa" }}>
              Contact Us
            </font>
          </p>
        </NavLink>
        <NavLink
          style={{
            textDecoration: "none",
            color: "#f79051"
          }}
          activeClassName="ActiveGalleryTab"
          exact
          id="GalleryTab"
          to="/Gallery">
          <p className="GalleryText">
            <font
              size="6"
              face="FuturaItalicBold"
              style={{ backgroundColor: "#e8f6fa" }}>
              Gallery
            </font>
          </p>
        </NavLink>
        <NavLink
          style={{
            textDecoration: "none",
            color: "#f79051"
          }}
          activeClassName="ActiveInstagramTab"
          exact
          id="InstagramTab"
          to="/Instagram">
          <p className="InstagramText">
            <font
              size="6"
              face="FuturaItalicBold"
              style={{ backgroundColor: "#e8f6fa" }}>
              Instagram
            </font>
          </p>
        </NavLink>
        {/* <NavLink
          style={{
            textDecoration: "none",
            color: "#f79051"
          }}
          activeClassName="ActiveCOVIDTab"
          exact
          id="COVIDTab"
          to="/COVID19">
          <p className="COVIDText">
            <font
              size="6"
              face="FuturaItalicBold"
              style={{ backgroundColor: "#e8f6fa" }}>
              COVID-19 Response
            </font>
          </p>
        </NavLink> */}
      </nav>
    </div>
  );
}
