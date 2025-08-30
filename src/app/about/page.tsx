import { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import {
  Lightbulb,
  Users,
  Target,
  Award,
  TrendingUp,
  Globe,
  Heart,
  Rocket,
  Building2,
  Calendar,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | E-Cell FCRIT",
  description:
    "Learn about E-Cell FCRIT, established in 2019 to foster entrepreneurship and innovation at Fr. Conceicao Rodrigues Institute of Technology.",
  keywords:
    "About E-Cell FCRIT, entrepreneurship cell, FCRIT, innovation, startup incubation, student entrepreneurship",
};

export default function AboutPage() {
  const milestones = [
    {
      year: "2019",
      event: "E-Cell FCRIT Established",
      description: "Founded to promote entrepreneurship culture",
    },
    {
      year: "2020",
      event: "First E-Summit",
      description: "Successfully conducted virtual E-Summit during pandemic",
    },
    {
      year: "2021",
      event: "Ideathon Series Launch",
      description: "Started monthly ideathon competitions",
    },
    {
      year: "2022",
      event: "Industry Partnerships",
      description: "Established partnerships with 10+ companies",
    },
    {
      year: "2023",
      event: "Startup Incubation",
      description: "Launched student startup incubation program",
    },
    {
      year: "2024",
      event: "Alumni Network",
      description: "Built strong alumni network of entrepreneurs",
    },
  ];

  const achievements = [
    { icon: Users, number: "500+", label: "Students Mentored" },
    { icon: Rocket, number: "15+", label: "Startups Incubated" },
    { icon: Award, number: "25+", label: "Events Organized" },
    { icon: Building2, number: "20+", label: "Industry Partners" },
    { icon: Globe, number: "5000+", label: "Community Reach" },
    { icon: TrendingUp, number: "₹10L+", label: "Funding Facilitated" },
  ];

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We foster creative thinking and innovative solutions to real-world problems.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "We believe in the power of teamwork and collaborative entrepreneurship.",
    },
    {
      icon: Target,
      title: "Excellence",
      description:
        "We strive for excellence in all our initiatives and events.",
    },
    {
      icon: Heart,
      title: "Impact",
      description:
        "We focus on creating meaningful impact in society through entrepreneurship.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/20 rounded-full px-6 py-2 mb-8">
              <Building2 className="h-5 w-5 text-purple-400" />
              <span className="text-purple-300 font-medium">
                About E-Cell FCRIT
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Fostering Innovation
              </span>
              <br />
              <span className="text-white">Since 2019</span>
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              E-Cell FCRIT is the entrepreneurship cell of Fr. Conceicao
              Rodrigues Institute of Technology, dedicated to nurturing the
              entrepreneurial spirit among students and fostering innovation in
              our community.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <Image
                  src="/media/ecell_logo3.png"
                  alt="E-Cell FCRIT"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  To create a thriving ecosystem for student entrepreneurs by
                  providing mentorship, resources, and platforms that enable
                  them to transform innovative ideas into successful ventures.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  To establish FCRIT as a leading hub for student
                  entrepreneurship and innovation, contributing to the national
                  startup ecosystem and creating job creators rather than job
                  seekers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Our Core Values
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Our Achievements
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:border-yellow-500/50 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-yellow-400 mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-300 font-medium">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Our Journey
            </span>
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 md:transform md:-translate-x-1/2"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-gray-950 md:transform md:-translate-x-1/2 z-10"></div>

                  {/* Content */}
                  <div
                    className={`ml-12 md:ml-0 md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                    }`}
                  >
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300">
                      <div className="flex items-center gap-2 mb-3">
                        <Calendar className="h-5 w-5 text-purple-400" />
                        <span className="text-purple-400 font-bold text-lg">
                          {milestone.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {milestone.event}
                      </h3>
                      <p className="text-gray-400">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              What We Do
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mb-4">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Idea Generation
              </h3>
              <p className="text-gray-400 leading-relaxed">
                We organize ideathons, brainstorming sessions, and workshops to
                help students generate innovative business ideas and solutions.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Mentorship</h3>
              <p className="text-gray-400 leading-relaxed">
                We connect students with industry experts, successful
                entrepreneurs, and alumni who provide guidance and mentorship.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-4">
                <Rocket className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Startup Incubation
              </h3>
              <p className="text-gray-400 leading-relaxed">
                We provide resources, workspace, and support to help students
                convert their ideas into viable startups.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-yellow-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Events & Competitions
              </h3>
              <p className="text-gray-400 leading-relaxed">
                We organize E-Summit, hackathons, pitch competitions, and other
                events to showcase student talent and innovation.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-pink-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Skill Development
              </h3>
              <p className="text-gray-400 leading-relaxed">
                We conduct workshops on business planning, marketing, finance,
                and other essential entrepreneurial skills.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-indigo-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mb-4">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Network Building
              </h3>
              <p className="text-gray-400 leading-relaxed">
                We facilitate networking opportunities with industry
                professionals, investors, and fellow entrepreneurs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Entrepreneurial Journey?
            </h2>
            <p className="text-gray-300 mb-6">
              Join E-Cell FCRIT and be part of a community that's shaping the
              future of entrepreneurship. Whether you're just starting out or
              have a developed idea, we're here to support you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium py-3 px-8 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                Join Our Community
              </button>
              <button className="border border-purple-500 text-purple-400 font-medium py-3 px-8 rounded-lg hover:bg-purple-500/20 transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
