import React from "react";
import logo from "./logo.svg";
import "./App.css";
import campaignlogo from "./images/campaignlogo.png";
import campaignposter from "./images/campaignposter.png";

import AnyaTaylorHeadshot from "./images/AnyaTaylorHeadshot.JPG";
import AnyaHeadshot from "./images/Anyaheadshot.JPG";
//import { Document } from "react-pdf";
import AppTabs from "./AppTabs.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <AppTabs className="testing" />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/AboutUs">
              <AboutUs />
            </Route>
            <Route exact path="/Campaign">
              <Campaign />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

function Home() {
  return (
    <div>
      {/* <h1 className="Header">Anya Montgomery for ASLMU President</h1> */}
      {/* <img src={campaignlogo} alt="campaignlogo" width="500px"></img> */}
      {/* <img
        className="AnyaTaylorHeadshot"
        src={AnyaTaylorHeadshot}
        alt="AnyaTaylorHeadshot"
        width="500px"
        //border="10px"
        border-color="white"></img> */}
      <img
        className="CampaignPoster"
        src={campaignposter}
        alt="campaignposter"
        width="cover"
        style={{ marginTop: "-9%" }}></img>
    </div>
  );
}

function Campaign() {
  return (
    <div className="Campaign">
      <h2 className="PlatformTitle">Our Platform</h2>
      <div className="MissionText">
        <h3 className="MissionTitle">We believe in our Mission: </h3>
        <p>
          No student’s success should be hindered by racial bias, mental health,
          gender exclusivity, inaccessibility, or food insecurity. As members of
          the current ASLMU administration, we will use our experiential
          knowledge, privileges, approachability, and intersectional identities
          to center the student voice and continue making LMU a healthy and
          exciting place to call home. If elected, we will continue the dream of
          past and current student leaders, while thinking forward and catering
          to the immediate needs of the LMU student body.
        </p>
      </div>
      <div className="HealingText">
        <h3 className="HealingTitle">We believe in Healing...</h3>
        <p>
          There is a consistent need for opportunities to heal and recharge from
          the impact of academics and extracurricular involvements. We’ll
          collaborate with SPS to increase service accessibility and
          transparency in the way of an alternative appointment-booking system.
          We hope to provide resources for students struggling to communicate
          with professors about their mental health needs. Many students are
          overcommitted and often neglect de-stressing. We plan to implement a
          cumulative point system that rewards students for their ongoing
          attendance at sporting events and the student-organized programming
          that brings life to the LMU experience.
        </p>
      </div>
      <div className="CommunityText">
        <h3 className="CommunityTitle">We believe in Community... </h3>
        <p>
          We'll continue our current hands-on work in getting menstrual hygiene
          products in more public restrooms and demanding LMU’s divestment from
          fossil fuel companies. We will also engage with organizations such as
          LGBTSS to improve resources for our trans students and staff. With
          support from grassroots student-media platforms, such as LMU Agency,
          we will advocate for continued action on these initiatives and develop
          the campus understanding of intersectional issues that center the
          experiences of communities of color. We’ll collaborate with
          departments including CSA and EIS to encourage campus-wide reflection
          on our mission, sometimes savioristic practices, and the ways that we
          can come together to improve our Lion community and beyond.
        </p>
      </div>
      <div className="SloganText">
        <h3>With all of us together, “the Dream lives on"</h3>
      </div>
      <div className="LogoImage">
        <img src={campaignlogo} alt="camapignlogo"></img>
      </div>
    </div>
  );
}

function AboutUs() {
  return (
    <div>
      <img
        className="AnyaHeadshot"
        src={AnyaHeadshot}
        alt="AnyaHeadshot"
        width="25%"
      />
      <h1>About Anya:</h1>
      <p>Women’s and Gender Studies Major, African American Studies Minor</p>
      <h1>About Taylor:</h1>
      <p>Anti-racism Studies, Spanish Double Major</p>
      <img
        className="AnyaTaylorHeadshot"
        src={AnyaTaylorHeadshot}
        alt="AnyaTaylorHeadshot"
        width="50%"
      />
      <h2>Involvements: </h2>
      <p>
        ASLMU Secretary ASLMU NCAA Senator Women’s Swim Team Sursum Corda
        Service-Org, VP of Mission and Social Justice Marians Service-Org,
        Co-Chair of Special Events WHH Library, Circulations Manager
        Intercultural Facilitator Program TEAM, Founder and President
      </p>
    </div>
  );
}

export default App;
