import site from "../content/site.json";
import iconMap from "./iconMap";

// Skill names/statuses are edited in src/content/site.json; here we attach the
// Font Awesome icon component resolved from each item's `icon` key.
const skillsData = site.skills.items.map((skill) => ({
  ...skill,
  icon: iconMap[skill.icon],
}));

export default skillsData;
