import React from "react";
import "./CampaignPage.css";

export default function CampaignPage() {
  return (
    <div className="Campaign">
      <div className="LogoImage"></div>
      <h2 className="PlatformTitle">Our Platform</h2>
      <div className="MissionSection">
        <h3 className="MissionTitle">
          We believe in our <span style={{ color: "#f79051" }}>Mission...</span>{" "}
        </h3>
        <p className="SectionText">
          No student’s success should be hindered by racial bias, mental health,
          gender exclusivity, inaccessibility, or food insecurity. As members of
          the current ASLMU administration, we will use our experiential
          knowledge, privileges, approachability, and intersectional identities
          to center the <span style={{ color: "#f79051" }}>student voice</span>{" "}
          and continue making LMU a healthy and exciting place to call home. If
          elected, we will{" "}
          <span style={{ color: "#f79051" }}> continue the dream </span> of past
          and current student leaders, while thinking forward and catering to
          the immediate needs of the LMU student body.
        </p>
      </div>
      <div className="HealingSection">
        <h3 className="HealingTitle">
          We believe in <span style={{ color: "#f79051" }}>Healing...</span>
        </h3>
        <p className="SectionText">
          There is a consistent need for opportunities to{" "}
          <span style={{ color: "#f79051" }}> heal and recharge </span> from the
          impact of academics and extracurricular involvements. We’ll
          collaborate with SPS to{" "}
          <span style={{ color: "#f79051" }}>
            {" "}
            increase service accessibility{" "}
          </span>{" "}
          and transparency in the way of an alternative appointment-booking
          system. We hope to provide resources for students struggling to
          communicate with professors about their mental health needs. Many
          students are overcommitted and often neglect de-stressing. We plan to
          implement a cumulative point system that rewards students for their
          ongoing attendance at sporting events and the student-organized
          programming that brings life to the{" "}
          <span style={{ color: "#f79051" }}> LMU experience. </span>
        </p>
      </div>
      <div className="CommunitySection">
        <h3 className="CommunityTitle">
          We believe in <span style={{ color: "#f79051" }}>Community...</span>{" "}
        </h3>
        <p className="SectionText">
          We'll continue our current hands-on work in getting{" "}
          <span style={{ color: "#f79051" }}> menstrual hygiene products </span>{" "}
          in more public restrooms and demanding LMU’s{" "}
          <span style={{ color: "#f79051" }}>
            divestment from fossil fuel companies{" "}
          </span>
          . We will also engage with organizations such as LGBTSS to improve{" "}
          <span style={{ color: "#f79051" }}>
            resources for our trans students and staff{" "}
          </span>
          . With support from grassroots student-media platforms, such as LMU
          Agency, we will advocate for continued action on these initiatives and
          develop the campus understanding of intersectional issues that center
          the experiences of communities of color. We’ll collaborate with
          departments including CSA and EIS to encourage campus-wide reflection
          on our mission, sometimes savioristic practices, and the ways that we
          can come together to improve our Lion community and beyond.
        </p>
      </div>
      <h3 className="SloganText">
        With all of us together, “the Dream lives on"
      </h3>
    </div>
  );
}
