import React from "react";

import AnyaTaylorHeadshot from "./images/AnyaTaylorHeadshot.JPG";
import AnyaHeadshot from "./images/Anyaheadshot.JPG";
import TaylorHeadshot from "./images/TaylorHeadshot.jpg";
import "./AboutUsPage.css";

export default function AboutUsPage() {
  return (
    <div>
      <h1 className="MeetYourRepsTitle">Meet Your Representatives</h1>
      <img
        className="AnyaHeadshot"
        src={AnyaHeadshot}
        alt="AnyaHeadshot"
        width="25%"
      />
      <div className="AboutAnyaSection">
        <h1 className="AboutAnyaTitle">About Anya:</h1>
        <p className="AnyaSectionText">
          Anya is a Women’s and Gender Studies Major and African American
          Studies Minor in the Class of 2021. Throughout their time at LMU they
          have taken on numerous leadership positions including 2019-2020 ASLMU
          Senator, Sursum Corda Service Organization VP of Mission and Social
          Justice, and Circulations Manager at the William H. Hannon Library. In
          all of their activities, Anya has lead with intention and care, and
          intends to continue to do so if elected 2020-2021 ASLMU President. To
          learn more about Anya's involvements{" "}
          <a href="https://www.linkedin.com/in/anya-montgomery-b5b926141/">
            {" "}
            click here
          </a>
          .
        </p>
      </div>
      <img
        className="TaylorHeadshot"
        src={TaylorHeadshot}
        alt="TaylorHeadshot"
        width="25%"
      />
      <div className="AboutTaylorSection">
        <h1 className="AboutTaylorTitle">About Taylor:</h1>
        <p className="TaylorSectionText">
          Taylor is Anti-racism Studies and Spanish Double Major in the Class of
          2021. While at LMU, Taylor has taken on the roles of 2019-2020 ASLMU
          NCAA Senator and Marians Service-Org Co-Chair of Special Events.
          Taylor has paved her own way at LMU, creating her own major and
          founding TEAM, an anti-racism affinity group. Taylor is also involved
          in LMU's Intercultural Facilitator program, conducting implicit bias
          trainings and more. Additionally, Taylor is a student athlete on the
          LMU Women's Swim Team. To learn more about Taylor's involvements{" "}
          <a href="https://www.linkedin.com/in/taylor-pajunen/"> click here</a>.
        </p>
      </div>

      <h1 className="InvolvementsTitle"> Combined Involvements: </h1>
      <div className="InvolvementsSection">
        <div className="AnyaInvolvements">
          <p>ASLMU Secretary </p>
          <p>Sursum Corda Service-Org; VP of Mission and Social Justice </p>
          <p>WHH Library; Circulations Manager</p>
        </div>
        <div className="TaylorInvolvements">
          <p>ASLMU NCAA Senator </p>
          <p>Marians Service-Org; Co-Chair of Special Events </p>
          <p>Women’s Swim Team</p>
          <p>Intercultural Facilitator Program</p>
          <p>TEAM; Founder and President</p>
        </div>
      </div>
      <img
        className="AnyaTaylorHeadshot"
        src={AnyaTaylorHeadshot}
        alt="AnyaTaylorHeadshot"
        width="50%"
      />
    </div>
  );
}
