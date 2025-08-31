export interface Advisor {
  id: number;
  name: string;
  position: string;
  department: string;
  email?: string;
  image: string;
  bio?: string;
  linkedin?: string;
}

export const advisors: Advisor[] = [
  {
    id: 1,
    name: "Dr. Trupti Lotlikar",
    position: "IIC President & Faculty Coordinator",
    department: "Computer Science Engineering",
    email: "trupti@fcrit.ac.in",
    image: "/team/faculty/trupti.webp",
  },
  {
    id: 2,
    name: "Prof. Aqleem Siddique",
    position: "NIRF Coordinator",
    department: "Electronics & Telecommunication",
    email: "aqleems@fcrit.ac.in",
    image: "/team/faculty/aqleem-sir.webp",
  },
  {
    id: 3,
    name: "Prof. Sushil Thale",
    position: "Convener Innovation Activity",
    department: "Computer Engineering",
    email: "sushil@fcrit.ac.in",
    image: "/team/faculty/sushil-thale.webp",
  },
  {
    id: 4,
    name: "Prof. Badal",
    position: "Events Faculty Member",
    department: "Electronics & Telecommunication",
    email: "badal@fcrit.ac.in",
    image: "/team/faculty/badal.webp",
  },
  {
    id: 5,
    name: "Dr. Jennifer D'Souza",
    position: "Documentation & ARIIA Coordinator",
    department: "Electronics & Telecommunication",
    email: "jennifer@fcrit.ac.in",
    image: "/team/faculty/jennifer.webp",
  },
  {
    id: 6,
    name: "Dr. Mini Rajeev",
    position: "Social Media",
    department: "Electronics & Telecommunication",
    email: "mini@fcrit.ac.in",
    image: "/team/faculty/mini-rajeev.webp",
  },
  {
    id: 7,
    name: "Dr. Nilaj Deshmukh",
    position: "IPR Activity Coordinator",
    department: "Electronics & Telecommunication",
    email: "nilajdeshmukh@fcrit.ac.in",
    image: "/team/faculty/nilajdeshmukh.webp",
  },
  {
    id: 8,
    name: "Prof. Pranali Chaudhary",
    position: "Startup Activity Coordinator",
    department: "Electronics & Telecommunication",
    email: "pranali@fcrit.ac.in",
    image: "/team/faculty/pranali-choudhary.webp",
  },
  {
    id: 9,
    name: "Rane Sir",
    position: "Internship Activity Coordinator",
    department: "Electronics & Telecommunication",
    email: "rane@fcrit.ac.in",
    image: "/team/faculty/rane.webp",
  },
  {
    id: 10,
    name: "Prof. Ruchi Harchandani",
    position: "Operations Faculty Member",
    department: "Electronics & Telecommunication",
    email: "ruchi@fcrit.ac.in",
    image: "/team/faculty/ruchi-harchandani.webp",
  },
  {
    id: 11,
    name: "Prof. Sharlene Rebeiro",
    position: "Finance Faculty Member",
    department: "Computer Science Engineering",
    email: "sharlene@fcrit.ac.in",
    image: "/team/faculty/sharlene.webp",
  },
  {
    id: 12,
    name: "Prof. Smita Rukhande",
    position: "Hospitality Faculty Member",
    department: "Computer Engineering",
    email: "smita@fcrit.ac.in",
    image: "/team/faculty/smita-rukhande.webp",
  },
];

// Legacy exports for backward compatibility
export const facultyAdvisors = advisors;
