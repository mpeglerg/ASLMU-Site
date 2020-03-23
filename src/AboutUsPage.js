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
          Studies Minor in the Class of 2021. Throughout their time at LMU she
          has taken on numerous leadership positions including 2019-2020 ASLMU
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
          Taylor is Anti-racism Studies, Spanish Double Major in the Class of
          2021. While at LMU, Taylor has taken on the roles of 2019-2020 ASLMU
          NCAA Senator, Marians Service-Org Co-Chair of Special Events, TEAM
          Founder and President. Additionally, Taylor is student athlete on the
          LMU Women's Swim Team. To learn more about Taylor's involvements{" "}
          <a href="https://www.linkedin.com/in/taylor-pajunen/"> click here</a>
        </p>
      </div>

      <h1 className="InvolvementsTitle"> Combined Involvements: </h1>
      <p className="InvolvementsSection">
        ASLMU Secretary, ASLMU NCAA Senator, Women’s Swim Team, Sursum Corda
        Service-Org; VP of Mission and Social Justice, Marians Service-Org;
        Co-Chair of Special Events, WHH Library; Circulations Manager,
        Intercultural Facilitator Program, TEAM; Founder and President
      </p>
      <img
        className="AnyaTaylorHeadshot"
        src={AnyaTaylorHeadshot}
        alt="AnyaTaylorHeadshot"
        width="50%"
      />
    </div>
  );
}
