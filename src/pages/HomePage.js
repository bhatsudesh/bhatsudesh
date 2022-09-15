import React from "react";
import About from "../components/About";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";

const HomePage = () => {

  return (
    <div className="px-4 md:px-16 lg:px-24 max-w-6xl mx-auto">
      <Header />
      <HeroSection />
      <About />
      <Experience />
      <Footer />
    </div>
  );
};

export default HomePage;
