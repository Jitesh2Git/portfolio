import {
  About,
  Contact,
  Footer,
  Header,
  Hero,
  Projects,
  Skills,
  ThemeSwitch,
} from "@/components";
import React from "react";

const Page = () => {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <ThemeSwitch />
    </main>
  );
};

export default Page;
