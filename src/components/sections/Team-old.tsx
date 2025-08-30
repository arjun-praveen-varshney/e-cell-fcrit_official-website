"use client";

import { useState, useEffect } from "react";
import { client, queries, urlFor } from '@/sanity/lib/client'
import { Linkedin, Mail, Users, Award, ChevronDown } from "lucide-react";
import Image from "next/image";

interface SanityTeamMember {
  _id: string;
  name: string;
  position: string;
  department: string;
  memberType: 'current' | 'past' | 'advisor';
  email?: string;
  linkedin?: string;
  github?: string;
  image?: any;
  bio?: string;
  achievements?: string[];
  order?: number;
  year?: string;
  currentRole?: string;
  tenure?: string;
}

export function Team() {
  const [activeTab, setActiveTab] = useState("current");
  const [expandedMember, setExpandedMember] = useState<string | null>(null);
  const [teamData, setTeamData] = useState<{
    current: SanityTeamMember[];
    past: SanityTeamMember[];
    advisors: SanityTeamMember[];
  }>({
    current: [],
    past: [],
    advisors: []
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTeamData() {
      try {
        const [currentTeam, pastTeam, advisors] = await Promise.all([
          client.fetch(queries.getCurrentTeam),
          client.fetch(queries.getPastTeam),
          client.fetch(queries.getAdvisors)
        ]);

        setTeamData({
          current: currentTeam || [],
          past: pastTeam || [],
          advisors: advisors || []
        });
      } catch (error) {
        console.error('Error fetching team data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchTeamData();
  }, []);

  const getImageUrl = (image: any) => {
    if (!image) return '/team/default-avatar.jpg';
    return urlFor(image).width(300).height(300).url();
  };

  if (loading) {
    return (
      <section id="team" className="py-20 px-4 bg-gray-950">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-700 rounded w-48 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-700 rounded w-96 mx-auto mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-gray-800 rounded-xl p-6">
                  <div className="w-24 h-24 bg-gray-700 rounded-full mx-auto mb-4"></div>
                  <div className="h-4 bg-gray-700 rounded w-32 mx-auto mb-2"></div>
                  <div className="h-3 bg-gray-700 rounded w-24 mx-auto"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  const currentTeam: CurrentMember[] = [
    {
      id: 1,
      name: "Dr. Trupti Lotlikar",
      position: "IIC President & Faculty Coordinator",
      department: "Computer Engineering",
      email: "trupti@fcrit.ac.in",
      image: "/api/placeholder/300/300",
      bio: "Leading the Institution's Innovation Council with over 15 years of experience in fostering entrepreneurship and innovation among students.",
      achievements: [
        "IIC President",
        "Research Publications: 25+",
        "Patent Holder",
      ],
    },
    {
      id: 2,
      name: "Prof. Aqleem Siddique",
      position: "NIRF Coordinator",
      department: "Electronics & Telecommunication",
      email: "aqleems@fcrit.ac.in",
      image: "/api/placeholder/300/300",
      bio: "Experienced faculty member specializing in innovation ranking and quality enhancement initiatives.",
      achievements: [
        "NIRF Coordinator",
        "Quality Enhancement Lead",
        "Industry Collaborations",
      ],
    },
    {
      id: 3,
      name: "Prof. Sushil Thale",
      position: "Convener Innovation Activity",
      department: "Mechanical Engineering",
      email: "sushil@fcrit.ac.in",
      image: "/api/placeholder/300/300",
      bio: "Drives innovation activities and startup incubation programs across the institution.",
      achievements: [
        "Innovation Convener",
        "Startup Mentor",
        "Workshop Coordinator",
      ],
    },
    {
      id: 4,
      name: "Reeba Patel",
      position: "Student President",
      department: "Computer Engineering",
      year: "Final Year",
      email: "reeba.patel@student.fcrit.ac.in",
      image: "/api/placeholder/300/300",
      bio: "Current student president leading E-Cell initiatives and driving student engagement in entrepreneurship.",
      achievements: ["Student President", "Event Organizer", "Tech Lead"],
    },
    {
      id: 5,
      name: "Anushka Sharma",
      position: "Vice President",
      department: "Information Technology",
      year: "Third Year",
      email: "anushka@student.fcrit.ac.in",
      image: "/api/placeholder/300/300",
      bio: "Managing operations and coordinating between various teams for smooth execution of events.",
      achievements: ["Operations Lead", "Team Coordinator", "Marketing Head"],
    },
    {
      id: 6,
      name: "Arjun Mehta",
      position: "Technical Head",
      department: "Computer Engineering",
      year: "Third Year",
      email: "arjun@student.fcrit.ac.in",
      image: "/api/placeholder/300/300",
      bio: "Leading technical initiatives and managing digital platforms for E-Cell FCRIT.",
      achievements: ["Tech Lead", "Web Developer", "Innovation Catalyst"],
    },
  ];

  const pastMembers: PastMember[] = [
    {
      id: 7,
      name: "Rahul Kumar",
      position: "Former President (2023-24)",
      department: "Computer Engineering",
      currentRole: "Software Engineer at TCS",
      email: "rahul@alumni.fcrit.ac.in",
      image: "/api/placeholder/300/300",
      bio: "Led E-Cell during the successful E-Summit 2024 and established key industry partnerships.",
      achievements: [
        "E-Summit 2024 Lead",
        "Industry Partnerships",
        "Alumni Network",
      ],
    },
    {
      id: 8,
      name: "Priya Singh",
      position: "Former VP (2023-24)",
      department: "Information Technology",
      currentRole: "Product Manager at Startup",
      email: "priya@alumni.fcrit.ac.in",
      image: "/api/placeholder/300/300",
      bio: "Instrumental in organizing major workshops and building community engagement.",
      achievements: [
        "Workshop Coordinator",
        "Community Builder",
        "Startup Founder",
      ],
    },
  ];

  const advisors: BaseMember[] = [
    {
      id: 9,
      name: "Dr. Jennifer D'Souza",
      position: "Documentation & ARIIA Coordinator",
      department: "Electronics & Telecommunication",
      email: "jennifer@fcrit.ac.in",
      image: "/api/placeholder/300/300",
      bio: "Expert in documentation processes and ARIIA ranking coordination for the institution.",
      achievements: [
        "ARIIA Coordinator",
        "Documentation Expert",
        "Quality Assurance",
      ],
    },
    {
      id: 10,
      name: "Prof. Mini Rajeev",
      position: "Social Media Coordinator",
      department: "Computer Engineering",
      email: "mini@fcrit.ac.in",
      image: "/api/placeholder/300/300",
      bio: "Managing digital presence and social media outreach for E-Cell activities.",
      achievements: [
        "Social Media Lead",
        "Digital Marketing",
        "Content Strategy",
      ],
    },
  ];

  const tabs = [
    { id: "current", name: "Current Team", count: currentTeam.length },
    { id: "past", name: "Alumni", count: pastMembers.length },
    { id: "advisors", name: "Faculty Advisors", count: advisors.length },
  ];

  const getActiveTeam = (): TeamMember[] => {
    switch (activeTab) {
      case "current":
        return currentTeam;
      case "past":
        return pastMembers;
      case "advisors":
        return advisors;
      default:
        return currentTeam;
    }
  };

  const toggleMemberExpansion = (id: number) => {
    setExpandedMember(expandedMember === id ? null : id);
  };

  return (
    <section
      id="team"
      className="py-20 bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            Our Team
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet the passionate individuals who drive innovation and
            entrepreneurship at FCRIT. Our diverse team of faculty, students,
            and alumni work together to create an ecosystem of growth.
          </p>
        </div>

        {/* Team Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              <Users className="w-4 h-4 mr-2" />
              {tab.name}
              <span className="ml-2 px-2 py-1 bg-black/30 rounded-full text-xs">
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {getActiveTeam().map((member) => (
            <div
              key={member.id}
              className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105"
            >
              {/* Member Image */}
              <div className="relative h-64 bg-gradient-to-br from-purple-500/20 to-pink-500/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-pink-600/30 group-hover:from-purple-600/50 group-hover:to-pink-600/50 transition-all duration-300"></div>

                {/* Social Links */}
                <div className="absolute top-4 right-4 z-20 flex space-x-2">
                  <a
                    href={`mailto:${member.email}`}
                    className="p-2 bg-black/50 hover:bg-purple-600/50 rounded-full backdrop-blur-sm transition-all duration-300"
                  >
                    <Mail className="w-4 h-4 text-white" />
                  </a>
                  <a
                    href="#"
                    className="p-2 bg-black/50 hover:bg-blue-600/50 rounded-full backdrop-blur-sm transition-all duration-300"
                  >
                    <Linkedin className="w-4 h-4 text-white" />
                  </a>
                </div>
              </div>

              {/* Member Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                  {member.name}
                </h3>

                <div className="space-y-1 mb-4">
                  <p className="text-purple-400 font-medium">
                    {member.position}
                  </p>
                  <p className="text-gray-400 text-sm">{member.department}</p>
                  {"year" in member && member.year && (
                    <p className="text-gray-400 text-sm">{member.year}</p>
                  )}
                  {"currentRole" in member && member.currentRole && (
                    <p className="text-green-400 text-sm">
                      {member.currentRole}
                    </p>
                  )}
                </div>

                {/* Bio Preview */}
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                  {member.bio}
                </p>

                {/* Achievements Preview */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {member.achievements.slice(0, 2).map((achievement, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30"
                      >
                        {achievement}
                      </span>
                    ))}
                    {member.achievements.length > 2 && (
                      <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
                        +{member.achievements.length - 2}
                      </span>
                    )}
                  </div>
                </div>

                {/* Expand Button */}
                <button
                  onClick={() => toggleMemberExpansion(member.id)}
                  className="w-full flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 text-purple-300 rounded-lg hover:from-purple-600/30 hover:to-pink-600/30 hover:border-purple-500/50 transition-all duration-300 group"
                >
                  {expandedMember === member.id ? "Show Less" : "Learn More"}
                  <ChevronDown
                    className={`w-4 h-4 ml-2 transition-transform duration-300 ${
                      expandedMember === member.id ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Expanded Content */}
                {expandedMember === member.id && (
                  <div className="mt-4 pt-4 border-t border-gray-600/50 space-y-3 animate-in slide-in-from-top duration-300">
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-2">
                        About
                      </h4>
                      <p className="text-gray-300 text-sm">{member.bio}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-2">
                        Key Achievements
                      </h4>
                      <div className="space-y-1">
                        {member.achievements.map((achievement, idx) => (
                          <div
                            key={idx}
                            className="flex items-center text-sm text-gray-300"
                          >
                            <Award className="w-3 h-3 mr-2 text-purple-400" />
                            {achievement}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-purple-500/20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Want to Join Our Team?
            </h3>
            <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
              We're always looking for passionate individuals who want to make a
              difference in the entrepreneurial ecosystem. Join us and be part
              of something extraordinary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                View Selection Process
              </button>
              <button className="inline-flex items-center px-8 py-4 border border-purple-500/50 text-purple-300 rounded-full font-semibold hover:bg-purple-500/10 transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* Selection Process Info */}
        <div className="mt-16 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl p-8 border border-gray-700/50">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Selection Process
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">1</span>
              </div>
              <h4 className="font-semibold text-white mb-2">Application</h4>
              <p className="text-gray-400 text-sm">
                Submit your application with your interests and experience
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">2</span>
              </div>
              <h4 className="font-semibold text-white mb-2">Interview</h4>
              <p className="text-gray-400 text-sm">
                Face-to-face interview to assess passion and fit
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">3</span>
              </div>
              <h4 className="font-semibold text-white mb-2">Task</h4>
              <p className="text-gray-400 text-sm">
                Complete a practical task relevant to your role
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">4</span>
              </div>
              <h4 className="font-semibold text-white mb-2">Welcome</h4>
              <p className="text-gray-400 text-sm">
                Join our team and start making an impact
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
