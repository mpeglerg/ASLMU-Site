import React from "react";
import "./App.css";

import AppTabs from "./AppTabs.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./HomePage.js";
import CampaignPage from "./CampaignPage.js";
import AboutUsPage from "./AboutUsPage.js";
import EndorsementPage from "./EndorsementPage.js";
import ContactUsPage from "./ContactUsPage.js";
import GalleryPage from "./GalleryPage";
import InstagramPage from "./InstagramPage";
import CalendarPage from "./CalendarPage";
import COVIDPage from "./COVIDPage.js";
function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <AppTabs className="testing" />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/AboutUs">
              <AboutUsPage />
            </Route>
            <Route exact path="/Campaign">
              <CampaignPage />
            </Route>
            <Route exact path="/Endorsement">
              <EndorsementPage />
            </Route>
            <Route exact path="/ContactUs">
              <ContactUsPage />
            </Route>
            <Route exact path="/Gallery">
              <GalleryPage />
            </Route>
            <Route exact path="/Instagram">
              <InstagramPage />
            </Route>
            <Route exact path="/Calendar">
              <CalendarPage />
            </Route>
            <Route exact path="/COVID19">
              <COVIDPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
