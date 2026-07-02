import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShuttleSpace } from "@fortawesome/free-solid-svg-icons";
import App from "../../App";
import "./contact.css";
import soccer from "../../assets/marse.jfif";
import site from "../../content/site.json";

function Contact() {
  const { contact } = site;
  const f = contact.fields;
  return (
    <App>
      <div className="main">
        <motion.div
          className="contact-card panel"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="contact-card-details">
            <span className="eyebrow">{contact.eyebrow}</span>
            <h1 className="contact_head">{contact.heading}</h1>
            <p className="contact_sub">{contact.subtitle}</p>

            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="conatact-name">
                <input placeholder={f.firstName} aria-label={f.firstName} />
                <input placeholder={f.lastName} aria-label={f.lastName} className="last_name" />
              </div>
              <div className="Contact-conten-pages">
                <input placeholder={f.email} aria-label={f.email} type="email" />
                <textarea placeholder={f.message} aria-label={f.message} />
              </div>
              <button className="mars-btn mono" type="submit">
                {contact.button} <FontAwesomeIcon icon={faShuttleSpace} />
              </button>
            </form>
          </div>

          <div className="contact_showcase">
            <img src={soccer} alt="Astronaut on Mars" className="marse-img" />
          </div>
        </motion.div>
      </div>
    </App>
  );
}

export default Contact;
