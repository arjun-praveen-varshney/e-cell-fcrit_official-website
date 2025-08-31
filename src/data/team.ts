// Team data with proper typing
export interface TeamMember {
  id: number;
  name: string;
  position: string;
  department: string;
  email: string;
  image: string;
  bio: string;
  achievements: string[];
  year?: string;
  currentRole?: string;
  linkedin?: string;
  twitter?: string;
  github?: string;
}

export interface PastMember {
  id: number;
  name: string;
  position: string;
  department: string;
  tenure: string;
  currentRole?: string;
  email?: string;
  linkedin?: string;
  image: string;
}

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

export const currentTeam: TeamMember[] = [
  {
    id: 1,
    name: "Reeba Patel",
    position: "Student President",
    department: "Computer Engineering",
    year: "Final Year",
    email: "reeba.patel@student.fcrit.ac.in",
    image: "/team/reeba.jpg",
    bio: "Current student president leading E-Cell initiatives and driving student engagement in entrepreneurship. Reeba has been pivotal in organizing major events and building industry partnerships.",
    achievements: [
      "Student President",
      "Event Organizer",
      "Tech Lead",
      "Community Builder",
    ],
    linkedin: "https://linkedin.com/in/reeba-patel",
    twitter: "https://twitter.com/reeba_patel",
    github: "https://github.com/reeba-patel",
  },
  {
    id: 2,
    name: "Arjun Singh",
    position: "Vice President",
    department: "Electronics & Telecommunication",
    year: "Third Year",
    email: "arjun.singh@student.fcrit.ac.in",
    image: "/team/arjun.jpg",
    bio: "Vice President focusing on technical events and innovation workshops. Arjun brings strong technical expertise and leadership to drive E-Cell's mission forward.",
    achievements: [
      "Vice President",
      "Technical Lead",
      "Workshop Coordinator",
      "Innovation Champion",
    ],
    linkedin: "https://linkedin.com/in/arjun-singh-ecell",
    github: "https://github.com/arjun-singh",
  },
  {
    id: 3,
    name: "Priya Sharma",
    position: "Marketing Head",
    department: "Information Technology",
    year: "Third Year",
    email: "priya.sharma@student.fcrit.ac.in",
    image: "/team/priya.jpg",
    bio: "Leading marketing initiatives and brand building for E-Cell. Priya has successfully increased our social media presence and community engagement.",
    achievements: [
      "Marketing Head",
      "Brand Builder",
      "Social Media Growth",
      "Community Engagement",
    ],
    linkedin: "https://linkedin.com/in/priya-sharma-marketing",
  },
  {
    id: 4,
    name: "Vikash Jain",
    position: "Event Coordinator",
    department: "Computer Engineering",
    year: "Second Year",
    email: "vikash.jain@student.fcrit.ac.in",
    image: "/team/vikash.jpg",
    bio: "Coordinating major events including E-Summit and Ideathon. Vikash ensures smooth execution of all E-Cell events and activities.",
    achievements: [
      "Event Coordinator",
      "E-Summit Organizer",
      "Team Leader",
      "Project Manager",
    ],
    linkedin: "https://linkedin.com/in/vikash-jain-events",
  },
];

export const pastTeam: PastMember[] = [
  {
    id: 5,
    name: "Rahul Kumar",
    position: "Former President",
    department: "Computer Engineering",
    tenure: "2023-24",
    currentRole: "Software Engineer at TCS",
    email: "rahul@alumni.fcrit.ac.in",
    image: "/team/rahul.jpg",
    linkedin: "https://linkedin.com/in/rahul-kumar-ecell",
  },
  {
    id: 6,
    name: "Sneha Reddy",
    position: "Former Vice President",
    department: "Electronics & Telecommunication",
    tenure: "2022-23",
    currentRole: "Product Manager at Wipro",
    email: "sneha@alumni.fcrit.ac.in",
    image: "/team/sneha.jpg",
    linkedin: "https://linkedin.com/in/sneha-reddy-pm",
  },
  {
    id: 7,
    name: "Amit Gupta",
    position: "Former Technical Head",
    department: "Information Technology",
    tenure: "2022-23",
    currentRole: "Full Stack Developer at Infosys",
    email: "amit@alumni.fcrit.ac.in",
    image: "/team/amit.jpg",
    linkedin: "https://linkedin.com/in/amit-gupta-dev",
  },
];

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
export const pastMembers = pastTeam;
export const facultyAdvisors = advisors;
