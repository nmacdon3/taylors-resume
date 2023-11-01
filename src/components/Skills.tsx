import { technicalSkills, leadershipSkills } from "~/content/skills";

import Section from "./Section";
import SubHeading from "./SubHeading";

const Skills = () => {
  return (
    <Section title="Skills">
      <SubHeading text="Technical" />
      {technicalSkills.map((skill) => (
        <li key={skill} className="text-xs print:text-sm text-gray-500 w-40">
          {skill}
        </li>
      ))}
      <div className="mb-3" />
      <SubHeading text="Leadership" />
      {leadershipSkills.map((skill) => (
        <li key={skill} className="text-xs print:text-sm text-gray-500 w-40">
          {skill}
        </li>
      ))}
    </Section>
  );
};

export default Skills;
