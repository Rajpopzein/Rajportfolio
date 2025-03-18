import React from 'react'
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Skills.css";

const Skills = ({index, Skill}) => {
  return (
    <motion.div
    whileInView={{ opacity: 1  }}
    transition={{ duration: 1, ease: "easeOut" }}
    animate={{ scale: 1 }}
    className="skill_card"
    layout
    key={index}
  >
    <FontAwesomeIcon icon={Skill.icon} className="skill_icon" />
    <h3>{Skill.name}</h3>
  </motion.div>
  )
}

export default Skills
