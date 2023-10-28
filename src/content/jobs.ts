export interface JobType {
  title: string;
  company: string;
  duration: string;
  description: string;
  responsibilities: string[];
}

export const jobs: JobType[] = [
  {
    title: "Key Account Representative",
    company: "Solenis Canada ULC, Pulp & Paper Division",
    duration: "July 2020 - Present",
    description: `Irving Tissue 2020-2021, Lake Utopia 2022-Present`,
    responsibilities: [
      "Organized and executed high level trials and meetings",
      "Worked with various departments to determine opportunities for improvements and implemented them",
      "Developed regular reports, managed inventory, made safety and process improvements",
      "Developed training material and lockout procedures for operations",
      "Successfully commissioned new equipment and applications",
    ],
  },
  {
    title: "Orientation Chair",
    company: "University of New Brunswick Student Union",
    duration: "2018",
    description: `Orientation char for the summer lol`,
    responsibilities: [
      "Successfully planned, organized, and executed Orientation Week for over 1000 new students",
      "Interviewed, selected, and managed a leadership team",
      "Developed and presented training material to over 150 orientation leaders",
      "Developed an emergency response plan, detailed schedule, and execution plan for each event",
      "Developed sponsorships and partnerships with local businesses to raise thousands of dollars in funds",
    ],
  },
  {
    title: "Chemical Engineering Student",
    company: "Irving Tissue Company",
    duration: "2017",
    description: `Summer job`,
    responsibilities: [
      "Provided technical support to operations and other departments through process improvement projects with a strong emphasis on safety",
      "Practiced data analysis and problem-solving skills to troubleshoot operational issues",
      "Coordinated between different internal departments as well as external contractors",
      "Developed skills in project management and effective written and verbal communication",
      "Worked on several diverse projects both independently and on a team",
    ],
  },
];
