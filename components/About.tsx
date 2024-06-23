"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const About = () => {
  return (
    <motion.section
      className="mt-20 max-w-[45rem] mx-auto text-center leading-8
      scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading title="About Me" />
      <p className="text-gray-500 text-xl max-md:mx-2 max-sm:mx-7 max-sm:text-lg">
        Hello, I&apos; am Jitesh Mali, a passionate{" "}
        <span className="font-semibold underline decoration-[#8c74ed]/70">
          Full Stack Developer
        </span>{" "}
        from Uran, India. I am always looking to learn new technologies. My
        favorite part of programming is the problem-solving aspect. I love the
        feeling of finally figuring out solution to a problem. I like listening
        music, playing video games and watching movies while I&apos;am not
        coding. Feel free to contact me if you have any queries or want to
        collaborate. Have a nice day!
      </p>
    </motion.section>
  );
};

export default About;
