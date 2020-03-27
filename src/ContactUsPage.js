import React from "react";
// import "./HomePage.css";
import "./ContactUsPage.css";
export default function ContactUsPage() {
  return (
    <div>
      <h1 className="ContactUsTitle">Contact Us</h1>

      <iframe
        align="middle"
        frameborder="0"
        marginHeight="0"
        marginWidth="0"
        className="GoogleForm"
        src="https://docs.google.com/forms/d/e/1FAIpQLSfjcqpjY8JgaGFgBQcdGbny_TGzlpLG5QuTuZQz2IULOC6h-g/viewform?usp=sf_link"></iframe>
      <p className="ContactUsTextSection">
        If you have any questions or comments, please reach out via email or or
        social media! If you’re interested in helping out with our campaign,
        we’d love to have you on board! Please fill out the Google Form and
        we’ll be in touch!
      </p>
    </div>
  );
}
