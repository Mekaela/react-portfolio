import React from "react";
import Intro from "../../components/intro/Intro";
import Languages from "../../components/languages/Languages";
import Projects from "../../components/projects/Projects";
import Contact from "../../components/contact/Contact";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Intro />
      <Projects />
      <Languages />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
