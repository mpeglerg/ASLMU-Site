import React from "react";
import "./HomePage.css";
import LRhodesEndorsement from "./images/LRhodesEndorsement.JPG";
import RaymondEndorsement from "./images/RaymondEndorsement.JPG";
import "./EndorsementPage.css";

export default function EndorsementPage() {
  return (
    <div>
      <h1 className="EndorsementTitle">Endorsements</h1>
      <div className="Endorsement">
        <img className="LilaEndorsement" src={LRhodesEndorsement}></img>
        <img className="RaymondEndorsement" src={RaymondEndorsement}></img>
        <p className="LilaQuote">
          “I’m voting for Anya and Taylor because I know they will foster an
          administration centered around social justice and use inclusive
          practices to serve the needs of all students.” <br />
          -Lila Rhodes
        </p>
        <p className="RaymondQuote">
          “Anya and Taylor are some of the most genuine, kind, and intellectual
          people I know. I know for a fact that if elected they would do
          everything in their power to make and revise policies to reflect the
          needs of everyone best the can.” <br /> -Raymond CangKimVo
        </p>
      </div>
    </div>
  );
}
