import React from "react";

import AnyaTaylorHeadshot from "./images/AnyaTaylorHeadshot.JPG";
import AnyaHeadshot from "./images/Anyaheadshot.JPG";

export default function AboutUsPage() {
  return (
    <div>
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
          Studies Minor in the Class of 2021. Throughout her time at LMU she has
          taken on numerous leadership positions including 2019-2020 ASLMU
          Senator, Sursum Corda Service Organization VP of Mission and Social
          Justice, and Circulations Manager at the William H. Hannon Library. In
          all of her activities, Anya has lead with intention and care, and
          intends to continue to do so if elected 2020-2021 ASLMU President.
        </p>
      </div>
      <img
        className="AnyaTaylorHeadshot"
        src={AnyaTaylorHeadshot}
        alt="AnyaTaylorHeadshot"
        width="50%"
      />
      <div className="AboutTaylorSection">
        <h1 className="AboutTaylorTitle">About Taylor:</h1>
        <p className="TaylorSectionText">
          Taylor is Anti-racism Studies, Spanish Double Major in the Class of
          20xx. While at LMU, Taylor has taken on the roles of 2019-2020 ASLMU
          NCAA Senator, Marians Service-Org Co-Chair of Special Events, TEAM
          Founder and President. Additionally, Taylor is student athlete on the
          LMU Women's Swim Team.
        </p>
      </div>

      <h1 className="InvolvementsTitle"> Combined Involvements: </h1>
      <p>
        ASLMU Secretary, ASLMU NCAA Senator, Women’s Swim Team, Sursum Corda
        Service-Org; VP of Mission and Social Justice, Marians Service-Org;
        Co-Chair of Special Events, WHH Library; Circulations Manager,
        Intercultural Facilitator Program, TEAM; Founder and President
      </p>
    </div>
  );
}
