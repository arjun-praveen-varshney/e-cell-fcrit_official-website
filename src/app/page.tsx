import Navbar from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Counter } from "@/components/sections/Counter";
import { Events } from "@/components/sections/Events";
import { Team } from "@/components/sections/Team";
import { LinkedInFeed } from "@/components/sections/LinkedInFeed";
import { Speakers } from "@/components/sections/Speakers";
import { Sponsors } from "@/components/sections/Sponsors";
import { Contact } from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Counter />
      <Events />
      {/* <Team /> */}
      <LinkedInFeed />
      <Speakers />
      <Sponsors />
      <Contact />
      <Footer />
    </div>
  );
}
