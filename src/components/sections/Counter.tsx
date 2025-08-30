"use client";

import { useEffect, useState } from "react";
import { Calendar, Users, Trophy, Rocket } from "lucide-react";

export function Counter() {
  const [counts, setCounts] = useState({
    events: 0,
    students: 0,
    startups: 0,
    years: 0,
  });

  const targetCounts = {
    events: 50,
    students: 500,
    startups: 15,
    years: 6,
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const timers = Object.keys(targetCounts).map((key) => {
      const target = targetCounts[key as keyof typeof targetCounts];
      const increment = target / steps;
      let current = 0;

      return setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timers.find((t) => t === timers.find((t) => t)));
        }
        setCounts((prev) => ({
          ...prev,
          [key]: Math.floor(current),
        }));
      }, stepDuration);
    });

    return () => timers.forEach((timer) => clearInterval(timer));
  }, []);

  const stats = [
    {
      icon: Calendar,
      count: counts.events,
      suffix: "+",
      label: "Events Conducted",
      description: "Workshops, hackathons, and speaker sessions",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      count: counts.students,
      suffix: "+",
      label: "Students Impacted",
      description: "Young minds inspired to innovate",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Rocket,
      count: counts.startups,
      suffix: "+",
      label: "Startups Mentored",
      description: "Ideas transformed into businesses",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: Trophy,
      count: counts.years,
      suffix: "",
      label: "Years of Excellence",
      description: "Building the entrepreneurial ecosystem",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            Our Impact in Numbers
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Since our establishment in 2019, we have been making a significant
            impact in the entrepreneurial ecosystem of FCRIT and beyond.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="group relative">
              {/* Card */}
              <div className="relative p-8 bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-2xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 hover:transform hover:scale-105 backdrop-blur-sm">
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}
                ></div>

                {/* Icon */}
                <div className="relative mb-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Count */}
                <div className="relative mb-4">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {stat.count}
                    <span className="text-purple-400">{stat.suffix}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-200 mb-2">
                    {stat.label}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {stat.description}
                  </p>
                </div>

                {/* Progress Bar */}
                <div className="relative">
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className={`h-2 bg-gradient-to-r ${stat.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{
                        width: `${
                          (stat.count /
                            targetCounts[
                              Object.keys(targetCounts)[
                                index
                              ] as keyof typeof targetCounts
                            ]) *
                          100
                        }%`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Glow Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-20 blur-xl rounded-2xl transition-opacity duration-500 -z-10`}
              ></div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-purple-500/20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Join Our Growing Community
            </h3>
            <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
              Be part of FCRIT's most vibrant entrepreneurial community. Connect
              with like-minded individuals, learn from industry experts, and
              turn your innovative ideas into successful ventures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                Get Started Today
              </button>
              <button className="inline-flex items-center px-8 py-4 border border-purple-500/50 text-purple-300 rounded-full font-semibold hover:bg-purple-500/10 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
