import React from "react";
import "./HomePage.css";
import LRhodesEndorsement from "./images/Endorsements/LRhodesEndorsement.JPG";
import RaymondEndorsement from "./images/Endorsements/RaymondEndorsement.JPG";
import AlexisEndorsement from "./images/Endorsements/Alexis DeBever.JPG";
import HavanaEndorsement from "./images/Endorsements/Havana Campo.JPG";
import IsaEndorsement from "./images/Endorsements/Isa Coty.JPG";
import JonahEndorsement from "./images/Endorsements/Jonah Sãenz.JPG";
import JoshEndorsement from "./images/Endorsements/Josh Seaman.JPG";
import RosieEndorsement from "./images/Endorsements/Rosie Cruz 2.JPG";
import TaylorEndorsement from "./images/Endorsements/Taylor Keinath.JPG";
import "./EndorsementPage.css";

export default function EndorsementPage() {
  return (
    <div>
      <h1 className="EndorsementTitle">Proudly Endorsed By</h1>
      <div className="Endorsement">
        <img className="LilaEndorsement" src={LRhodesEndorsement}></img>
        <img className="RaymondEndorsement" src={RaymondEndorsement}></img>
        <img className="AlexisEndorsement" src={AlexisEndorsement}></img>
        <img className="HavanaEndorsement" src={HavanaEndorsement}></img>
        <img className="IsaEndorsement" src={IsaEndorsement}></img>
        <img className="JonahEndorsement" src={JonahEndorsement}></img>
        <img className="JoshEndorsement" src={JoshEndorsement}></img>
        <img className="RosieEndorsement" src={RosieEndorsement}></img>
        <img className="TaylorEndorsement" src={TaylorEndorsement}></img>
      </div>
      <h3 className="QuoteTitle">What people are saying</h3>
      <div className="EndorsementQuotes">
        <p className="LilaQuote">
          <div className="Quote">
            “I’m voting for Anya and Taylor because I know they will foster an
            administration centered around social justice and use inclusive
            practices to serve the needs of all students.”
          </div>{" "}
          <br />
          <div className="Author">-Lila Rhodes</div>
        </p>
        <p className="RaymondQuote">
          <div className="Quote">
            “Anya and Taylor are some of the most genuine, kind, and
            intellectual people I know. I know for a fact that if elected they
            would do everything in their power to make and revise policies to
            reflect the needs of everyone best the can.”{" "}
          </div>
          <br /> <div className="Author">-Raymond CangKimVo </div>
        </p>
        <p className="AlexisQuote">
          <div className="Quote">
            "I’m voting for Anya and Taylor because through their past
            experience of leading social orgs and ASLMU they’ve already made so
            much change on campus. They’re effective and driven and have the
            right mindset to lead LMU into a better future. They’re also
            incredibly inclusive with every group on campus and actively listen
            to what everyone has to say."{" "}
          </div>
          <br /> <div className="Author">-Alexis DeBever </div>
        </p>
        <p className="HavanaQuote">
          <div className="Quote">
            "Taylor and Anya are not just amazing leaders, they are adaptable,
            always challenging themselves to be better than the day before. They
            also make it a point to listen to all sides of a story, carefully
            contemplating the impact each of their decisions will make. Will
            Divest LMU is a cause that is close to my heart, I know Taylor and
            Anya will work for solutions effecting each student on this campus.
            I believe Anya and Taylor are a force to be reckoned with and the
            type of strong leaders the LMU community deserves at the helm of
            ASLMU."{" "}
          </div>
          <br /> <div className="Author">-Havana Campo </div>
        </p>{" "}
        <p className="IsaQuote">
          <div className="Quote">
            "I am supporting Anya and Taylor for President and Vice President
            for ASLMU because they are running a platform that is POC and LGBTQ+
            centered. For every initiative, the two will be taking a race-based
            approach to it. I know that Anya and Taylor will work hard to
            achieve the things they want to improve at LMU, because they stand
            up and support those who need it, even when no one is watching."
          </div>{" "}
          <br /> <div className="Author">-Isa Coty </div>
        </p>
        <p className="JonahQuote">
          <div className="Quote">
            "I support Anya and Taylor because of their commitment to student
            equity as well as their advocacy for a healthier, more inclusive
            community at LMU. I believe that they will have a lasting impact for
            both current and future students alike."{" "}
          </div>
          <br /> <div className="Author">-Jonah Sãenz </div>
        </p>{" "}
        <p className="JoshQuote">
          <div className="Quote">
            "Anya and Taylor are great candidates for President and
            Vice-President. Their platform has a strong focus on social justice
            in many different aspects on campus which is very important to me.
            Both Anya and Taylor have proven that they are fit for their
            positions through their involvement on campus in Service Orgs,
            Athletics, Ethnic and Intercultural Services, TEAM, and more. I know
            they are committed to LMU and will be great leaders of ASLMU."{" "}
          </div>
          <br />
          <div className="Author"> -Josh Seaman </div>
        </p>{" "}
        <p className="RosieQuote">
          <div className="Quote">
            " I support Taylor and Anya because I believe that their platform
            puts pressing social justice issues, such as DivestLMU, at the top
            of their agenda. Taylor and Anya’s platform is at the forefront of
            providing minorities, women and other marginalized communities with
            the tools and support to succeed at LMU."{" "}
          </div>
          <br /> <div className="Author">-Rosie Cruz </div>
        </p>{" "}
        <p className="TaylorQuote">
          <div className="Quote">
            "I believe Tay P and Anya would be a perfect fit for the ASLMU VP
            position. I had the opportunity to work alongside Tay P when we were
            both SAM leaders (Student-Athlete Mentors). Anya and I are both
            Women’s and Gender Studies majors and have a common interest in
            social justice. I believe these two would excel in this position and
            are willing to go the extra mile in order to strengthen our
            community and work towards justice for the students at LMU."{" "}
          </div>
          <br /> <div className="Author">-Taylor Keinath </div>
        </p>
      </div>
    </div>
  );
}
