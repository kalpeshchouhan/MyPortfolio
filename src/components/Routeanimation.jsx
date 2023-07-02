import React, { memo } from "react";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import Contact from "./Contactus/Contact";
import Myproject from "./Myproject/Myproject";
import Home from "./homes/Home";
import About from "./About/About";
import Education from "./Education/Education";
import Skill from "./Myskill/Skill";
import Educationdetails from "./Detailspage/Educationdetails";
import Projectdetails from "./Detailspage/Projectdetails";

const Routeanimation = () => {
  const location = useLocation();
  return (
    <>
      <AnimatePresence key={location.pathname} location={location}>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<About />} path="/about" />
          <Route element={<Myproject />} path="/project" />
          <Route element={<Education />} path="/education" />
          <Route element={<Skill />} path="/skill" />
          <Route element={<Contact />} path="/contact" />
          <Route element={<Educationdetails />} path="/educationdetails" />
          <Route element={<Projectdetails />} path="/projectdetails" />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default memo(Routeanimation);
