"use client";

import { Target, Users, Lightbulb, Rocket } from "lucide-react";

export function About() {
  const features = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To foster entrepreneurial mindset among students and provide them with the necessary tools, resources, and network to turn their ideas into successful ventures.",
    },
    {
      icon: Users,
      title: "Community",
      description:
        "Building a vibrant community of like-minded individuals who support, inspire, and collaborate with each other on their entrepreneurial journey.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Encouraging creative thinking, problem-solving, and innovation through workshops, hackathons, and mentorship programs.",
    },
    {
      icon: Rocket,
      title: "Growth",
      description:
        "Providing startups with the guidance and resources needed to scale their ventures and make a positive impact in the market.",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            About E-Cell FCRIT
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Established in 2019, the Entrepreneurship Cell of FCRIT Vashi has
            been at the forefront of nurturing entrepreneurial talent and
            creating a thriving ecosystem for innovation.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">
                Empowering the Next Generation of Entrepreneurs
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                At E-Cell FCRIT, we believe that every student has the potential
                to be an entrepreneur. Our mission is to unlock this potential
                by providing the right guidance, resources, and opportunities
                for growth.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Through our comprehensive programs, we have successfully
                mentored numerous startups, conducted industry-leading events,
                and built a strong network of entrepreneurs, investors, and
                industry experts.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/20">
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  2019
                </div>
                <div className="text-gray-300">Established</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/20">
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  6+
                </div>
                <div className="text-gray-300">Years Strong</div>
              </div>
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-8 border border-purple-500/20">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white">Vision</h4>
                    <p className="text-gray-300">
                      Creating the leading entrepreneurship hub in Mumbai
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white">
                      Innovation
                    </h4>
                    <p className="text-gray-300">
                      Driving technological and business innovation
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white">
                      Community
                    </h4>
                    <p className="text-gray-300">
                      Building lasting entrepreneurial networks
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                {feature.title}
              </h4>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Start Your Entrepreneurial Journey?
          </h3>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our community of innovators and turn your ideas into reality
            with the support of experienced mentors and like-minded peers.
          </p>
          <button
            onClick={() => (window.location.href = "/team")}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
          >
            Join E-Cell FCRIT
            <Rocket className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
