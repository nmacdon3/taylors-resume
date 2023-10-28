export interface EducationType {
  id: string;
  title: string;
  subTitle: string;
  school: string;
  duration: string;
}

export const education: EducationType[] = [
  {
    id: "1",
    title: "Bachelor of Computer Science",
    subTitle: "Minor in Business Administration (CO-OP)",
    school: "University of New Brunswick",
    duration: "September, 2016 - December, 2020",
  },
];

export function useEducation() {
  return education;
}
