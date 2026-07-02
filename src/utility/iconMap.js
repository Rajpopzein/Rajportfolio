import {
  faReact,
  faNode,
  faPython,
  faAws,
  faDocker,
  faGithub,
  faGithubAlt,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

// Content lives in src/content/site.json as string keys; this resolves those
// keys to the actual Font Awesome icon objects (which cannot live in JSON).
const iconMap = {
  react: faReact,
  node: faNode,
  python: faPython,
  aws: faAws,
  docker: faDocker,
  github: faGithub,
  githubAlt: faGithubAlt,
  linkedin: faLinkedinIn,
  twitter: faXTwitter,
};

export default iconMap;
