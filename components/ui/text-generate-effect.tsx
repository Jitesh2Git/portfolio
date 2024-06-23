"use client";

import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/cn";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [animate]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          const isPrimary =
            word === "</Full" || word === "Stack" || word === "Developer>";
          return (
            <motion.span
              key={word + idx}
              className={cn(
                "text-black opacity-0 dark:text-white",
                isPrimary && "text-primary dark:text-primary"
              )}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-semibold", className)}>
      <div className="mt-4">
        <div
          className="text-black text-3xl leading-snug tracking-wide mx-4
        "
        >
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
