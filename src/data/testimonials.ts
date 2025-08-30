// Testimonials and speakers data
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  testimonial: string;
  rating: number;
  category: "speaker" | "alumni" | "industry" | "student";
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Mr. Sagar Ranshoor",
    role: "Public Speaker & Startup Mentor",
    company: "Industry Expert",
    image: "/speakers/sagar-ranshoor.jpg",
    testimonial:
      "E-cell FCRIT Vashi is an inspiring hub for budding entrepreneurs. It fosters creativity, collaboration, and innovation. Through workshops, events, and mentorship, it empowers students to realize their entrepreneurial dreams.",
    rating: 5,
    category: "speaker",
  },
  {
    id: 2,
    name: "Mr. Yogendra Joshi",
    role: "Founder and Consultant",
    company: "MoneyBolism",
    image: "/speakers/yogendra-joshi.jpg",
    testimonial:
      "The E-Cell at FCRIT Vashi fosters innovation, entrepreneurship, and collaboration, empowering students to transform ideas into ventures. It cultivates a dynamic ecosystem essential for nurturing future leaders and innovators.",
    rating: 5,
    category: "speaker",
  },
  {
    id: 3,
    name: "Mr. Shivkumar Valadi",
    role: "Founder",
    company: "Atri MarCon Pvt Ltd",
    image: "/speakers/shivkumar-valadi.jpg",
    testimonial:
      "I see a lot of energy that has a lot of potential if channelised in the right way. Love the initiative of the E-Cell and the industry-student interactions which helps prepare the students for their corporate and entrepreneurial life ahead.",
    rating: 5,
    category: "industry",
  },
  {
    id: 4,
    name: "Mr. Mahendra Dongre",
    role: "Examiner of Patents and Designs",
    company: "Government of India",
    image: "/speakers/mahendra-dongre.jpg",
    testimonial:
      "E-Cell FCRIT Vashi is a dynamic platform fostering entrepreneurial spirit. It empowers students with practical skills, mentorship, and networking opportunities, igniting innovation and nurturing future leaders effectively.",
    rating: 5,
    category: "industry",
  },
  {
    id: 5,
    name: "Priya Sharma",
    role: "Former Vice President",
    company: "E-Cell FCRIT Alumni",
    image: "/alumni/priya-sharma.jpg",
    testimonial:
      "My experience at E-Cell FCRIT was transformative. The leadership opportunities, mentorship, and exposure to the startup ecosystem helped shape my entrepreneurial journey. Now running my own startup!",
    rating: 5,
    category: "alumni",
  },
  {
    id: 6,
    name: "Ankit Verma",
    role: "Third Year Student",
    company: "Computer Engineering",
    image: "/students/ankit-verma.jpg",
    testimonial:
      "Being part of E-Cell has opened so many doors for me. The workshops, networking events, and mentorship programs have given me the confidence and skills to pursue my startup dreams.",
    rating: 5,
    category: "student",
  },
];

export interface Speaker {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  bio: string;
  expertise: string[];
  achievements: string[];
  social: {
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
  events: number[]; // Event IDs where they spoke
}

export const speakers: Speaker[] = [
  {
    id: 1,
    name: "Mr. Sagar Ranshoor",
    role: "Public Speaker & Startup Mentor",
    company: "Industry Expert",
    image: "/speakers/sagar-ranshoor.jpg",
    bio: "An accomplished entrepreneur and public speaker with over 15 years of experience in the startup ecosystem. Mr. Ranshoor has mentored numerous successful startups and is a regular speaker at entrepreneurship events.",
    expertise: [
      "Startup Strategy",
      "Public Speaking",
      "Mentorship",
      "Business Development",
    ],
    achievements: [
      "Mentored 50+ Startups",
      "TEDx Speaker",
      "Industry Recognition Awards",
    ],
    social: {
      linkedin: "https://linkedin.com/in/sagar-ranshoor",
      twitter: "https://twitter.com/sagar_ranshoor",
    },
    events: [1, 4],
  },
  {
    id: 2,
    name: "Mr. Yogendra Joshi",
    role: "Founder and Consultant",
    company: "MoneyBolism",
    image: "/speakers/yogendra-joshi.jpg",
    bio: "Founder of MoneyBolism and a financial consultant helping startups with funding strategies and financial planning. His expertise in fintech and startup financing makes him a valuable mentor.",
    expertise: [
      "Financial Planning",
      "Startup Funding",
      "Fintech",
      "Investment Strategy",
    ],
    achievements: [
      "Founded MoneyBolism",
      "Helped 100+ Startups with Funding",
      "Financial Advisory Expert",
    ],
    social: {
      linkedin: "https://linkedin.com/in/yogendra-joshi",
      website: "https://moneybolism.com",
    },
    events: [1, 2],
  },
];
