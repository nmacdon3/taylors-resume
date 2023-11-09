import { technicalSkills, leadershipSkills } from "~/content/skills";

import Section from "./Section";
import SubHeading from "./SubHeading";

const Skills = () => {
  return (
    <Section title="Skills">
      <SubHeading text="Technical" />
      <ul className="ml-3 -translate-y-1">
        {technicalSkills.map((skill) => (
          <li
            key={skill}
            style={{ listStyleType: "circle" }}
            className="text-xs print:text-sm text-gray-500 w-40"
          >
            {skill}
          </li>
        ))}
      </ul>
      <div className="mb-3" />
      <SubHeading text="Leadership" />
      <ul className="ml-3 -translate-y-1">
        {leadershipSkills.map((skill) => (
          <li
            key={skill}
            style={{ listStyleType: "circle" }}
            className="text-xs print:text-sm text-gray-500 w-40"
          >
            {skill}
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Skills;
