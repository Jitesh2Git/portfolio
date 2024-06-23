"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { links } from "@/constants";
import { CursorProps, Position, TabProps } from "@/lib/interface";

const Header = () => {
  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <header className="fixed top-0 left-0 right-0 z-[999] bg-opacity-80">
      <motion.div
        onMouseLeave={() => {
          setPosition((pv) => ({
            ...pv,
            opacity: 0,
          }));
        }}
        className="relative mx-auto flex flex-wrap justify-center w-fit  
      border-none bg-white py-2 px-14 mt-5 bg-opacity-75 shadow-lg 
      shadow-black/[0.03] backdrop-blur-[0.5rem] rounded-full max-sm:w-full
      max-sm:mt-0 max-sm:rounded-none max-sm:px-0 max-sm:py-3
      dark:bg-white/10 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        {links.map((link) => (
          <Tab
            key={link.name}
            name={link.name}
            hash={link.hash}
            setPosition={setPosition}
          />
        ))}
        <Cursor position={position} />
      </motion.div>
    </header>
  );
};

const Tab = ({ name, hash, setPosition }: TabProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (!ref.current) return;

    const { width } = ref.current.getBoundingClientRect();

    setPosition({
      left: ref.current.offsetLeft,
      width,
      opacity: 1,
    });
  };

  return (
    <nav
      ref={ref}
      onMouseEnter={handleMouseEnter}
      className="relative z-10 block cursor-pointer px-4 py-1.5 
      text-sm text-gray-500 hover:text-black max-sm:px-2 
      dark:text-gray-500 dark:hover:text-white"
    >
      <Link href={hash}>{name}</Link>
    </nav>
  );
};

const Cursor = ({ position }: CursorProps) => {
  return (
    <motion.div
      animate={{
        ...position,
      }}
      className="absolute z-0 h-8 rounded-full bg-primary/50
      dark:bg-primary/80"
    />
  );
};

export default Header;
