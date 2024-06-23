import React from "react";

const Footer = () => {
  return (
    <footer
      className="mb-10 mt-20 px-4 text-center 
    max-w-[50rem] mx-auto text-gray-500"
    >
      <small className="mb-2 block text-xs">
        &copy; 2024. All rights are reserved
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website :</span> Built with
        React, Next.js, TypeScript, Tailwind CSS, Tailwind Scrollbar, Framer
        Motion, Aceternity UI, Context API, React Hot Toast, React Icons, React
        Email & Resend.
      </p>
    </footer>
  );
};

export default Footer;
