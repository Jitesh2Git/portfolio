"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { sendEmail } from "@/actions/sendEmail";
import toast from "react-hot-toast";
import SubmitBtn from "./SubmitBtn";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="mt-20 w-[min(100%,38rem)] mx-auto text-center px-2 scroll-mt-28"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading title="Contact me" />

      <p className="text-gray-500 -mt-6">
        Please contact me directly at{" "}
        <a
          className="underline underline-offset-2 decoration-[#8c74ed]/70 dark:text-white/50"
          href="mailto:jiteshmali2003rv@gmail.com"
        >
          jiteshmali2003rv@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="h-14 px-4 rounded-lg shadow-md
             shadow-[#8c74ed]/20 focus:outline outline-[#8c74ed]
             border border-[#8c74ed] dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg p-4 shadow-md
            shadow-[#8c74ed]/20 focus:outline outline-[#8c74ed]
            border border-[#8c74ed] dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
};

export default Contact;
