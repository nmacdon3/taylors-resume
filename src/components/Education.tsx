import { EducationType, education } from "~/content/education";

import Section from "./Section";

const EducationItem = ({ education }: { education: EducationType }) => {
  return (
    <div>
      <h5 className="text-xs print:text-sm font-medium text-motif">
        {education.school}
      </h5>
      <h5 className="text-xs print:text-sm opacity-80 text-motif">
        {education.duration}
      </h5>
      <h4 className="text-xs print:text-sm  mt-1  w-40  text-gray-500">
        <span className="font-medium text-gray-700">{education.title}</span>,{" "}
        <br />
        {education.subTitle}
      </h4>
    </div>
  );
};

const Education = () => {
  return (
    <Section title="Education">
      {education.map((item) => (
        <EducationItem key={item.title} education={item} />
      ))}
    </Section>
  );
};

export default Education;
