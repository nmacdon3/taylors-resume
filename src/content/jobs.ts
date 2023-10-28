export interface JobType {
  id: string;
  title: string;
  company: string;
  duration: string;
  description: string;
  responsibilities: string[];
}

export const jobs: JobType[] = [
  {
    id: "1",
    title: "Frontend Developer",
    company: "Magnet Forensics",
    duration: "July 2022 - Present",
    description: `Hired to spearhead web development for a new product being launched and to mentor other developers. `,
    responsibilities: [
      "Rewriting entire repositories to be clean, fast, and future-proof",
      "Leading efforts in API design, UX, DX, testing, and security",
      "Holding seminars on web development and UX discussions with company leaders.",
    ],
  },
  {
    id: "2",
    title: "Lead Frontend Developer - Lead UX Designer",
    company: "Gray Wolf Analytics Inc.",
    duration: "January 2021 - July 2022",
    description: `Sole Frontend contributor for fast-paced startup. The small size of the company allowed Nathan to learn many new skills, including: `,
    responsibilities: [
      "Building, securing, and deploying a production-grade web app",
      "Designing attractive and intuitive UI / UX",
      "Shaping company goals into actionable projects",
    ],
  },
  {
    id: "3",
    title: "Software Developer",
    company: "IBM",
    duration: "September 2017 - September 2020",
    description: `Nathan worked 5 terms during his formal education as part of his CO-OP designation. Each term taught him new skills such as:`,
    responsibilities: [
      "Performing automated QA on an app's frontend",
      "Thorough understanding of SCRUM and agile methodologies",
      "Strong foundation in SaaS technologies",
    ],
  },
];

export function useJobs() {
  return jobs;
}
