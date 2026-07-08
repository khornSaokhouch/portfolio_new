import { projects } from "./projects";
import { certificates } from "./certificates";
import { education } from "./education";
import { categorizedSkills } from "./skills";

// Flatten skills into a simple list
const allSkills = categorizedSkills.flatMap((cat) =>
  cat.list.map((s) => s.name)
);

const portfolioKnowledge = {
  owner: {
    name: "Khorn Saokhouch",
    role: "Frontend / Full Stack Developer",
    email: "khornsaokhouch4456@gmail.com",
    github: "https://github.com/khornSaokhouch",
    telegram: "https://t.me/Khouch04",
    location: "Phnom Penh, Cambodia",
  },
  education,
  skills: categorizedSkills,
  allSkillNames: allSkills,
  projects,
  certificates,
};

export type PortfolioKnowledge = typeof portfolioKnowledge;
export default portfolioKnowledge;
