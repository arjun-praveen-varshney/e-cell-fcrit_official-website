// Events data structure
export interface Event {
  id: number;
  title: string;
  category: "summit" | "workshop" | "hackathon" | "networking" | "outreach";
  date: string;
  location: string;
  participants: string;
  description: string;
  image: string;
  status: "completed" | "upcoming" | "ongoing";
  highlights: string[];
  gallery?: string[];
  registrationLink?: string;
  agenda?: Array<{
    time: string;
    activity: string;
    speaker?: string;
  }>;
}

export const events: Event[] = [
  {
    id: 1,
    title: "E-Summit 2024",
    category: "summit",
    date: "March 15-16, 2024",
    location: "FCRIT Auditorium",
    participants: "500+",
    description:
      "The flagship event featuring industry leaders, startup pitches, and networking opportunities. E-Summit 2024 was our biggest success, bringing together entrepreneurs, investors, and students.",
    image: "/events/e-summit-2024.jpg",
    status: "completed",
    highlights: [
      "15+ Speakers",
      "Startup Pitch Competition",
      "Panel Discussions",
      "₹1L Prize Pool",
    ],
    gallery: [
      "/events/summit/1.jpg",
      "/events/summit/2.jpg",
      "/events/summit/3.jpg",
    ],
    agenda: [
      {
        time: "9:00 AM",
        activity: "Registration & Welcome",
        speaker: "E-Cell Team",
      },
      {
        time: "10:00 AM",
        activity: "Keynote: Future of Entrepreneurship",
        speaker: "Mr. Rajesh Sawhney",
      },
      {
        time: "11:30 AM",
        activity: "Panel: Startup Ecosystem in India",
        speaker: "Industry Experts",
      },
      {
        time: "2:00 PM",
        activity: "Startup Pitch Competition",
        speaker: "Selected Startups",
      },
      {
        time: "4:00 PM",
        activity: "Networking Session",
        speaker: "All Participants",
      },
    ],
  },
  {
    id: 2,
    title: "Ideathon 2024",
    category: "hackathon",
    date: "February 10-11, 2024",
    location: "FCRIT Campus",
    participants: "200+",
    description:
      "A 48-hour hackathon where participants pitched innovative startup ideas. Teams worked around the clock to develop prototypes and business models.",
    image: "/events/ideathon-2024.jpg",
    status: "completed",
    highlights: [
      "48 Hours",
      "₹50,000 Prize Pool",
      "Mentorship Sessions",
      "20+ Teams",
    ],
    gallery: ["/events/ideathon/1.jpg", "/events/ideathon/2.jpg"],
    agenda: [
      { time: "Day 1 - 10:00 AM", activity: "Problem Statement Release" },
      { time: "Day 1 - 11:00 AM", activity: "Team Formation & Ideation" },
      { time: "Day 1 - 8:00 PM", activity: "Mentor Check-in Session" },
      { time: "Day 2 - 2:00 PM", activity: "Final Presentations" },
      { time: "Day 2 - 5:00 PM", activity: "Winner Announcement" },
    ],
  },
  {
    id: 3,
    title: "Outreach Program 2024",
    category: "outreach",
    date: "January 20, 2024",
    location: "Various Colleges in Mumbai",
    participants: "300+",
    description:
      "Educational sessions reaching out to students across Mumbai about entrepreneurship. We visited 5 colleges and conducted interactive workshops.",
    image: "/events/outreach-2024.jpg",
    status: "completed",
    highlights: [
      "5 Colleges Visited",
      "Interactive Sessions",
      "Career Guidance",
      "Entrepreneurship Awareness",
    ],
    gallery: ["/events/outreach/1.jpg", "/events/outreach/2.jpg"],
  },
  {
    id: 4,
    title: "E-Summit 2025",
    category: "summit",
    date: "March 20-21, 2025",
    location: "FCRIT Auditorium",
    participants: "Registration Open",
    description:
      "Our biggest event yet, featuring renowned entrepreneurs and exciting competitions. Join us for two days of inspiration, learning, and networking.",
    image: "/events/e-summit-2025.jpg",
    status: "upcoming",
    highlights: [
      "20+ Speakers",
      "Startup Expo",
      "Investment Opportunities",
      "₹2L Prize Pool",
    ],
    registrationLink: "https://ecell.fcrit.ac.in/register/summit2025",
    agenda: [
      { time: "Day 1 - 9:00 AM", activity: "Registration & Inauguration" },
      { time: "Day 1 - 10:30 AM", activity: "Keynote Address", speaker: "TBA" },
      { time: "Day 1 - 2:00 PM", activity: "Startup Showcase" },
      { time: "Day 2 - 10:00 AM", activity: "Investor Panel" },
      { time: "Day 2 - 3:00 PM", activity: "Awards Ceremony" },
    ],
  },
];

export const eventCategories = [
  { id: "all", name: "All Events", icon: "🎯" },
  { id: "summit", name: "E-Summit", icon: "🏆" },
  { id: "workshop", name: "Workshops", icon: "🛠️" },
  { id: "hackathon", name: "Hackathons", icon: "💻" },
  { id: "networking", name: "Networking", icon: "🤝" },
  { id: "outreach", name: "Outreach", icon: "🌍" },
];
