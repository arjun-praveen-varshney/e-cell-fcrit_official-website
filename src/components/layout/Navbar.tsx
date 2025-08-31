"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavigation = (href: string, item?: any) => {
    if (href.startsWith("/#")) {
      // If we're on a different page, go to home first then scroll
      if (window.location.pathname !== "/") {
        router.push(href);
      } else {
        // If we're on home page, just scroll
        const elementId = href.substring(2); // Remove /#
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      router.push(href);
    }
    setIsOpen(false);
  };

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Events", href: "/events" },
    { name: "Team", href: "/team" },
    { name: "Posts", href: "/posts" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* E-Cell Logo - Left */}
          <div className="flex items-center">
            <img
              src="/ecell-logo-removebg-preview.png"
              alt="Ecell Logo"
              className="w-24 h-24"
            />
          </div>

          {/* Desktop Menu - Center */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href)}
                className="text-gray-300 hover:text-purple-400 px-3 py-2 text-sm font-medium transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* IIC Logo - Right (Desktop) */}
          <div className="hidden md:flex items-center">
            <img src="/iic-logo.webp" alt="IIC logo" className="h-12" />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95 backdrop-blur-sm">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href)}
                className="text-gray-300 hover:text-purple-400 block px-3 py-2 text-base font-medium transition-all duration-300 w-full text-left"
              >
                {item.name}
              </button>
            ))}
            {/* IIC Logo in mobile menu */}
            <div className="px-3 py-2 flex justify-center">
              <img src="/iic-logo.webp" alt="IIC logo" className="h-8" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
