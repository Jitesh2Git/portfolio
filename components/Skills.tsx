"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { skills } from "@/constants";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="mt-20 max-w-[53rem] mx-auto text-center scroll-mt-28"
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
      >
        <SectionHeading title="My skills" />
      </motion.div>
      <ul
        className="flex flex-wrap justify-center gap-4 text-lg text-gray-800
      dark:text-white/80"
      >
        {skills.map((skill, index) => (
          <motion.li
            className="bg-[#8c74ed]/10 rounded-xl px-5 py-3
            shadow-md shadow-[#8c74ed]/50 dark:bg-white/10"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
