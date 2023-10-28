import { EducationType, useEducation } from "~/content/education";

import Section from "./Section";

const EducationItem = ({ education }: { education: EducationType }) => {
  return (
    <div>
      <h4 className="text-xs print:text-sm  w-40  text-gray-500">
        <span className="font-medium text-gray-700">{education.title}</span>,{" "}
        {education.subTitle}
      </h4>
      <h5 className="text-xs print:text-sm mt-1 font-medium text-motif">
        {education.school}
      </h5>
      <h5 className="text-xs print:text-sm opacity-80 mt-1 text-motif">
        {education.duration}
      </h5>
    </div>
  );
};

const Education = () => {
  const educationItems = useEducation();

  return (
    <Section title="Education">
      {educationItems?.map((item) => (
        <EducationItem key={item.id} education={item} />
      ))}
    </Section>
  );
};

export default Education;
