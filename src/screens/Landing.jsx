import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Services from "../components/Sections/Services";
import Advantage from "../components/Sections/Advantage";
import Projects from "../components/Sections/Projects";
import AboutUs from "../components/Sections/AboutUs";
import Blog from "../components/Sections/Blog";
import Pricing from "../components/Sections/Pricing";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer";

export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      <Services />
      <AboutUs />
      {/* <Projects />
      <Pricing />
      <Advantage />
      <Blog />
      <Contact /> */}
      <Footer />
    </>
  );
}
