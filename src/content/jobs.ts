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
    duration: "Jan 2020 - Present",
    description: `Irving Tissue Company 2020 - 2021, Lake Utopia Paper 2022 - Present`,
    responsibilities: [
      "Organized and executed high level trials and meetings",
      "Worked with various departments to organize and execute projects",
      "Provided regular written reports and proposals, managed inventory, made safety and process improvements",
      "Developed training material, lockout procedures and troubleshooting manuals for operations",
      "Successfully commissioned new equipment and applications",
    ],
  },
  {
    title: "Student Union Orientation Chair",
    company: "University of New Brunswick Student Union",
    duration: "Jan 2018 - Nov 2018",
    description: `Successfully planned, organized and executed Orientation Week for over 1000 new students`,
    responsibilities: [
      "Interviewed, selected, and managed a leadership team",
      "Developed and presented training material to over 150 orientation leaders",
      "Developed an emergency response plan, detailed schedule, and execution plan for several events",
      "Developed sponsorships and partnerships with local businesses",
    ],
  },
  {
    title: "Chemical Engineering Student",
    company: "Irving Pulp & Paper Division",
    duration: "May - Aug: 2015, 2016 & 2017",
    description: `Summer Student Position - Irving Tissue 2017, Irving Pulp & Paper 2016, Irving Paper Ltd. 2015`,
    responsibilities: [
      "Provided technical support to operations and other departments through process improvement projects with a strong emphasis on safety",
      "Practiced data analysis and problem-solving skills to troubleshoot operational issues",
      "Coordinated between different internal departments as well as external contractors",
      "Developed skills in project management and effective written and verbal communication",
      "Worked on several diverse projects both independently and on a team",
    ],
  },
];
