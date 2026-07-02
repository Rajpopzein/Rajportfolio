import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import App from "../App";
import "./Dashboard.css";
import skillsData from "../utility/skillData";
import Skills from "../component/skills/Skills";
import site from "../content/site.json";

function Dashboard() {
  const { hero, skills, projects } = site;
  const navigate = useNavigate();
  const [launching, setLaunching] = useState(false);

  const handleLaunch = () => {
    if (launching) return;
    setLaunching(true);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.setTimeout(() => {
      setLaunching(false);
      navigate(hero.cta.path);
    }, reduce ? 150 : 1300);
  };

  return (
    <App>
      <div className="lander main">
        <motion.div
          className="hero_copy"
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { ease: "easeOut", duration: 0.6 } }}
        >
          <div className="coord mono">
            {hero.coords.map((c) => (
              <span key={c.label}>
                {c.label} <b>{c.value}</b>
              </span>
            ))}
          </div>
          <h1 className="intro_tag">
            <span className="intro_grad">{hero.greeting}</span> {hero.headline}
          </h1>
          <p className="subtab">{hero.subtitle}</p>
          <div className="cta_row">
            <button type="button" className="launch mono" onClick={handleLaunch}>
              {launching ? "LIFTOFF" : hero.cta.label} <span className="ar">↗</span>
            </button>
            <button
              type="button"
              className="ghost_link mono"
              onClick={() => navigate(hero.ghostLink.path)}
            >
              {hero.ghostLink.label}
            </button>
          </div>
        </motion.div>

        <div className="rocket_stage">
          <div className="orbit" />
          <div className="orbit two" />
          <div className="glow" />
          <motion.img
            className={launching ? "rocket_image launching" : "rocket_image"}
            src="/images/rocket-spaceship.png"
            alt="Rocket spaceship"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1, transition: { delay: 0.15, duration: 0.6 } }}
          />
        </div>
      </div>

      <section className="block main">
        <div className="block_head">
          <span className="idx">{skills.index}</span>
          <h2>{skills.title}</h2>
        </div>
        <div className="systems">
          {skillsData.map((skill, index) => (
            <Skills key={skill.name} index={index} Skill={skill} />
          ))}
        </div>
      </section>

      <section className="block main">
        <div className="block_head">
          <span className="idx">{projects.index}</span>
          <h2>{projects.title}</h2>
        </div>
        <div className="mission_log">
          {projects.items.map((pro) => (
            <motion.div
              className="entry"
              key={pro.name}
              whileInView={{ y: 0, opacity: 1 }}
              initial={{ y: 24, opacity: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <span className="entry_code mono">{pro.code}</span>
              <h3>{pro.name}</h3>
              <p>{pro.description}</p>
              <span className="stack mono">{pro.stack}</span>
              <div className="entry_acts">
                <a className="btn2 solid mono" href={pro.link}>
                  View <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
                {pro.preview && (
                  <a className="btn2 wire mono" href={pro.preview}>
                    Preview
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </App>
  );
}

export default Dashboard;
