export type EducationItem = {
  degree: string;
  institution: string;
  location: string;
  period?: string;
};

export const education: EducationItem[] = [
  {
    degree: "MSc Health Data Science",
    institution: "SRM Institute of Science and Technology",
    location: "Chennai, India",
  },
  {
    degree: "B.Sc. Anaesthesia and Operation Theatre Technology",
    institution: "Narayana Hrudayalaya Institute of Allied Health Sciences",
    location: "Bangalore, India",
  },
];
