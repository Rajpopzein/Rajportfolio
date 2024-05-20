import React from "react";
import App from "../../App";
import "../About_page/about.css";

function About() {
  return (
    <App>
      <div className="main about_main">
        <div className="about_name_head">
          <h2 className="about_head">
            Hey there, Rajkumar here. Delighted to meet you.
          </h2>
          <div className="contact_email">
            <p>Email</p>
            <a href="mailto:rajkumarrbtech@hotmail.com">rajkumarrbtech@hotmail.com</a>
          </div>
          <div className="social_media">
            <p>Get in touch</p>
            <i class="fa-brands fa-linkedin-in"></i>
            <i class="fa-brands fa-github-alt"></i>
            <i class="fa-brands fa-x-twitter"></i>
          </div>
        </div>
        <div className="breif_para">
          <p className="para_content">
            As a Full Stack Developer, I thrive on tackling intricate
            challenges, crafting impactful, and user-centric solutions across
            diverse platforms, all rooted in thorough research and data
            analysis.
          </p>
          <p className="para_content">
            Unlike the traditional image of a designer confined to an
            Illustrator artboard, I approach design holistically. You'll often
            find me deeply engaged in stylesheets, meticulously refining font
            sizes, and strategizing layouts to ensure seamless user experiences.
            My dedication lies in delivering not just visually appealing
            interfaces but also technically robust solutions.
          </p>
          <p className="para_content">
            Understanding that in the realm of business, the initial impression
            is paramount, I recognize the pivotal role of website design in
            seizing these opportunities. A stellar website transcends mere
            aesthetics; it embodies functionality and user-friendliness.
            Leveraging my programming background, I adeptly navigate technical
            complexities, while simultaneously crafting polished and intuitive
            websites. Moreover, my comprehensive grasp of recognized technical
            standards and contemporary development methodologies ensures that my
            solutions are not only elegant but also scalable and efficient.
          </p>
        </div>
      </div>
    </App>
  );
}

export default About;
