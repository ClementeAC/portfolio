/* eslint-disable react/no-unescaped-entities */

"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 0.5);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        Most of my childhood was spent with a Computer in front of me, so I
        naturally decided to pursue a career in{" "}
        <span className="font-bold">Computer Engineering</span> and I gotta say,
        I've <span className="underline">loved</span> every minute of it!{" "}
        <span className="italic">My favorite part of programming</span> is
        solving problems, finally figuring out a solution is{" "}
        <span className="underline">extremely fulfilling</span>. My core stack
        is{" "}
        <span className="font-bold">
          React, TypeScript, Tailwind CSS, Next.js, Node.js and MongoDB.
        </span>{" "}
        I am also proficient in <span className="font-bold">Angular</span> and
        absolutely adore <span className="font-bold">Mobile Development</span>{" "}
        <span className="italic">(I think it's the future)</span>. I am always
        looking to learn new technologies and am currently looking for a{" "}
        <span className="font-bold">
          full-time position as a Software Engineer.
        </span>
      </p>
      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games and spending time with my girlfriend. I also enjoy playing
        my favorite sports and trying some new ones.
      </p>
    </motion.section>
  );
}
