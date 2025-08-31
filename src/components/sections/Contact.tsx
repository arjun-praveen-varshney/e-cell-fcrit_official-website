"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Calendar,
  Users,
  MessageSquare,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  type: z.enum(["general", "collaboration", "membership", "speaker"]),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      console.log("Submitting form data:", data);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log("API response:", result);

      if (result.success) {
        setIsSubmitted(true);
        reset();
        console.log("Form submitted successfully with ID:", result.id);

        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        console.error("Form submission failed:", result.error);
        // You might want to show an error message to the user here
        alert("Failed to submit form: " + result.error);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: ["ecellfcrit2425@gmail.com"],
      description: "Send us an email and we'll respond within 24 hours",
    },
    // {
    //   icon: Phone,
    //   title: "Call Us",
    //   details: ["+91 98765 43210", "+91 87654 32109"],
    //   description: "Available Monday to Friday, 9 AM to 6 PM",
    // },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["FCRIT, Sector 9A, Vashi", "Navi Mumbai, Maharashtra 400703"],
      description: "Come visit our campus and meet our team",
    },
  ];

  const quickActions = [
    {
      icon: Users,
      title: "Join E-Cell",
      description: "Become a member of our entrepreneurial community",
      action: "Apply Now",
    },
    {
      icon: Calendar,
      title: "Attend Events",
      description: "Register for our upcoming workshops and seminars",
      action: "View Events",
    },
    {
      icon: MessageSquare,
      title: "Mentorship",
      description: "Connect with experienced entrepreneurs and mentors",
      action: "Get Mentorship",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to start your entrepreneurial journey? Have questions about
            our programs? We'd love to hear from you. Reach out and let's build
            something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Send us a Message
              </h3>
              <p className="text-gray-300">
                Fill out the form below and our team will get back to you as
                soon as possible.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Contact Type */}
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  What can we help you with?
                </label>
                <select
                  {...register("type")}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                >
                  <option value="general">General Inquiry</option>
                  <option value="collaboration">
                    Partnership/Collaboration
                  </option>
                  <option value="membership">Membership Information</option>
                  <option value="speaker">Speaker Request</option>
                </select>
              </div>

              {/* Name and Email */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    {...register("name")}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-400">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    {...register("email")}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  {...register("subject")}
                  placeholder="What's this about?"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-400">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  Message *
                </label>
                <textarea
                  {...register("message")}
                  rows={5}
                  placeholder="Tell us more about your inquiry..."
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-400">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 w-5 h-5" />
                  </>
                )}
              </button>

              {/* Success Message */}
              {isSubmitted && (
                <div className="flex items-center p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-300">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>
                    Message sent successfully! We'll get back to you soon.
                  </span>
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-6 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">
                        {info.title}
                      </h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-purple-300 font-medium">
                          {detail}
                        </p>
                      ))}
                      <p className="text-gray-400 text-sm mt-1">
                        {info.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            {/* <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Quick Actions
              </h3>
              <div className="space-y-4">
                {quickActions.map((action, index) => (
                  <div
                    key={index}
                    className="group p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <action.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">
                            {action.title}
                          </h4>
                          <p className="text-gray-400 text-sm">
                            {action.description}
                          </p>
                        </div>
                      </div>
                      <button className="px-4 py-2 bg-purple-600/20 text-purple-300 rounded-lg text-sm font-medium hover:bg-purple-600/30 transition-all duration-300">
                        {action.action}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div> */}

            {/* Office Hours */}
            {/* <div className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50">
              <h4 className="font-semibold text-white mb-4">Office Hours</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Monday - Friday</span>
                  <span className="text-purple-300">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Saturday</span>
                  <span className="text-purple-300">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Sunday</span>
                  <span className="text-gray-500">Closed</span>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        {/* Map Section */}
        {/* <div className="mt-16">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Find Us
          </h3>
          <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl p-8 border border-gray-700/50">
            <div className="aspect-video bg-gray-800 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h4 className="text-white font-semibold mb-2">FCRIT Campus</h4>
                <p className="text-gray-400">Sector 9A, Vashi, Navi Mumbai</p>
                <p className="text-gray-400">Maharashtra 400703</p>
                <button className="mt-4 px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
