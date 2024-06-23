"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { projects } from "@/constants";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="projects"
      className="mt-20 max-w-[53rem] mx-auto scroll-mt-28 px-3"
    >
      <SectionHeading title="My Projects" />
      {projects.map(({ title, description, imageUrl, tags, href }, index) => (
        <CardContainer key={index} className="inter-var">
          <CardBody
            className="bg-gray-100 bg-opacity-80 relative group/card w-fit 
          sm:w-[30rem] h-auto rounded-xl p-6 dark:bg-white/10 dark:text-white
        "
          >
            <div>
              <div className="flex items-center justify-between">
                <CardItem translateZ="50" className="text-xl font-bold">
                  {title}
                </CardItem>
                <CardItem
                  translateZ={20}
                  as={Link}
                  href={href}
                  target="__blank"
                  className="group px-4 py-2 rounded-xl text-sm font-normal 
               bg-[#8c74ed]/10 shadow-md shadow-[#8c74ed]/50
               flex items-center gap-1 max-sm:text-xs"
                >
                  Check Live Site{" "}
                  <GoArrowUpRight
                    className="group-hover:translate-x-1  
                group-hover:-translate-y-1 text-xl"
                  />
                </CardItem>
              </div>
              <CardItem
                as="p"
                translateZ="60"
                className="text-gray-500 text-sm max-w-sm mt-2 
                dark:text-white/50"
              >
                {description}
              </CardItem>
              <div className="flex flex-wrap gap-3 my-3">
                {tags.map((tag, index) => (
                  <CardItem
                    key={index}
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-[#8c74ed]/10
                  text-gray-700 text-xs font-bold shadow-md 
                  shadow-[#8c74ed]/50 dark:text-white/70"
                  >
                    {tag}
                  </CardItem>
                ))}
              </div>
            </div>
            <CardItem translateZ="100" className="w-full mt-4 ">
              <Image
                src={imageUrl}
                alt="project img"
                height={1000}
                width={1000}
                priority
                quality={95}
                className="h-full w-full rounded-xl group-hover/card:shadow-xl
                shadow-md shadow-[#8c74ed]/50"
              />
            </CardItem>
          </CardBody>
        </CardContainer>
      ))}
    </motion.section>
  );
};

export default Projects;
