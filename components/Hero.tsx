"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiDownload } from "react-icons/hi";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const Hero = () => {
  return (
    <section id="home" className="mt-40 text-center scroll-mt-[50rem]">
      <TextGenerateEffect words="Hi There! 👋🏻" />
      <TextGenerateEffect words="I'am Jitesh Mali, a </Full Stack Developer>" />
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center 
      gap-4 px-4 text-lg font-medium mt-8 dark:text-white"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-[#8c74ed]/50 px-7 py-3 flex items-center 
        gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 
        hover:bg-[#8c74ed] active:scale-105 transition dark:hover:bg-[#8c74ed]/80"
        >
          Contact me
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full
         outline-none focus:scale-110 hover:scale-110 active:scale-105 transition 
         cursor-pointer dark:bg-white/10"
          href="/Jitesh's CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <Link
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center 
        gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition 
        cursor-pointer dark:bg-white/10 dark:text-white"
          href="https://www.linkedin.com/in/jitesh-mali/"
          target="_blank"
        >
          <BsLinkedin />
        </Link>

        <Link
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full 
        focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition 
        cursor-pointer dark:bg-white/10 dark:text-white"
          href="https://github.com/Jitesh2Git"
          target="_blank"
        >
          <FaGithubSquare />
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
