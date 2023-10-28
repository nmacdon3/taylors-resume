import { BsDot } from "react-icons/bs";
import { HiChevronRight } from "react-icons/hi";

import { jobs, JobType } from "~/content/jobs";

import Section from "./Section";
import SubHeading from "./SubHeading";

const Job = ({ job }: { job: JobType }) => {
  return (
    <div className="text-motif">
      <SubHeading text={job.title} />
      <div className="flex items-center  space-x-1  text-xs print:text-sm  tracking-wider ">
        <span className="font-medium ">{job.company}</span>
        <BsDot className="h-4 w-4" />
        <span className="opacity-90"> {job.duration}</span>
      </div>
      <p className="text-xs print:text-sm text-gray-500 text-justify mt-2 mb-2">
        {job.description}
      </p>
      {job.responsibilities.map((resp) => (
        <li key={resp} className="text-xs print:text-sm text-gray-500 ml-2">
          {resp}
        </li>
      ))}
    </div>
  );
};

const Experience = () => {
  return (
    <Section title="Experience">
      {jobs.map((job) => (
        <div
          key={job.title}
          className="pb-7 flex items-start ml-1  translate-y-1 -translate-x-1"
        >
          <HiChevronRight className="h-4 w-4  rounded-full shrink-0  mr-1 -translate-x-1 text-accent" />
          <Job job={job} />
        </div>
      ))}
    </Section>
  );
};

export default Experience;
