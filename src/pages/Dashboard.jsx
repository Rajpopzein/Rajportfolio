import {easeOut, motion } from "framer-motion";
import handshake from "../assets/rocket_launch_24dp_FILL0_wght400_GRAD0_opsz24.svg";
import App from "../App";
import {
  faEarthAsia,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Dashboard.css";
import skillsData from "../utility/skillData";
import Skills from "../component/skills/Skills";

function Dashboard() {
  const projects = [
    {
      name: "Zara",
      description: "Chat bot that guides my profile",
      Platform: "React js, Rasa, Python",
      link: "https://github.com/Rajpopzein/Zara-chatbot.git",
    }
  ];

  return (
    <App>
      <main>
        <div className="Lander_page main">
          <div>
            <motion.div
              initial={{ x: "-10%", opacity: 0 }}
              animate={{
                x: "0%",
                opacity: 1,
                transition: {
                  ease: easeOut,
                  delay: 0.1,
                },
              }}
            >
              <h1 className="intro_tag">
                <span className="intor_hisapn">Hi there. </span>I’m Rajkumar, a
                Fullstack Developer and Content Creater.
              </h1>
              <h5 className="subtab">
                A Developer who likes to build interactive things with code.
              </h5>
              <motion.a className="btn_available" href="/about">
                {/* <span className="material-symbols-outlined handshake_img">rocket_launch</span> */}
                <img
                  src={handshake}
                  className="handshake_img"
                  alt="handshake"
                />
                <span>Available For New Project</span>
              </motion.a>
              <p className="minar_insp">let's broaden our connections</p>
            </motion.div>
          </div>
          <div className="rockdiv">
            <motion.div
              initial={{ x: "15%", opacity: 0 }}
              animate={{
                x: "10%",
                opacity: 1,
                transition: {
                  ease: easeOut,
                  delay: 0.1,
                },
              }}
            >
              <img
                className="rocket_image"
                src="/images/rocket-spaceship.png"
                alt="Rocket spaceship"
              />
            </motion.div>
          </div>
        </div>

        <div className="skills_layout main">
          <motion.div
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeIn" }}
            animate={{ scale: 1 }}
            layout
            className="skills_layout_anim"
          >
            <h2 className="primary_color">Skills</h2>
            <h2 className="skills_head">What I'm good at</h2>
            <div className="skills_list">
              {skillsData.map((skill, index) => (
                <Skills index={index} Skill={skill} />
              ))}
            </div>
          </motion.div>
        </div>

        <div className="project main">
          <div>
            <h2 className="primary_color">Highlighted Projects</h2>
            <h2 className="project_head">What I've been working on</h2>
            {/* <img className="airdrop" src={airdrop}/> */}
            <div className="project_list">
              {projects.map((pro, index) => (
                <div className="project_card" key={index}>
                  <h6 className="strong">{pro.name}</h6>
                  <p className="card_content">{pro.description}</p>
                  <h6 className="card_platform">
                    <FontAwesomeIcon icon={faEarthAsia} className="cloudicon" />
                    {pro.Platform}
                  </h6>
                  <a className="View_btn" href={pro?.link}>
                    View
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </App>
  );
}

export default Dashboard;
