import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import App from "../../App";
import "../About_page/about.css";
import site from "../../content/site.json";
import iconMap from "../../utility/iconMap";

function About() {
  const { about } = site;
  return (
    <App>
      <div className="about_main main">
        <div className="about_name_head">
          <div className="coord mono">
            {about.coords.map((c) => (
              <span key={c.label}>
                {c.label} <b>{c.value}</b>
              </span>
            ))}
          </div>
          <h2 className="about_head">{about.heading}</h2>

          <div className="contact_email">
            <p className="eyebrow">{about.emailLabel}</p>
            <a href={`mailto:${about.email}`}>{about.email}</a>
          </div>

          <div className="social_media">
            <p className="eyebrow">{about.socialLabel}</p>
            <div className="social_row">
              {about.socials.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={iconMap[s.icon]} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          className="brief_para panel"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {about.paragraphs.map((para, i) => (
            <p className="para_content" key={i}>
              {para}
            </p>
          ))}
        </motion.div>
      </div>
    </App>
  );
}

export default About;
