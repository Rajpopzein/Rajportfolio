import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Skills.css";

const Skills = ({ index, Skill }) => {
  const handleMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", ((e.clientX - r.left) / r.width) * 100 + "%");
  };

  return (
    <motion.div
      className="sys"
      onPointerMove={handleMove}
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 18 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.05 }}
    >
      <div className="sys_dot">
        <FontAwesomeIcon icon={Skill.icon} />
      </div>
      <div className="sys_meta">
        <div className="sys_name">{Skill.name}</div>
        <div className="sys_status mono">
          status <b>{Skill.status}</b>
        </div>
      </div>
      <div className="signal">
        <i />
        <i />
        <i />
        <i />
      </div>
    </motion.div>
  );
};

export default Skills;
