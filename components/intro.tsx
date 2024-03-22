/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

export default function Intro() {
  return (
    <section
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
      id="home"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween" }}
          >
            <Image
              src="/clemente.jpg"
              alt="a Photo of Clemente"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full border-[0.35rem] border-white shadow-xl object-cover"
            />
          </motion.div>
          <motion.span
            className="absolute text-4xl bottom-16 -left-1"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.5,
              duration: 10,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        Hi! My name is <span className="font-bold">Clemente</span>. I'm a{" "}
        <span className="font-bold">full-stack Web and Mobile developer</span>{" "}
        with <span className="font-bold">3 years</span> of experience. I love
        building <span className="font-bold">beautiful and functional</span>{" "}
        sites & apps for people to <span className="italic">enjoy</span>. My
        focus is on <span className="underline">React</span>{" "}
        <span className="italic">(Next.js mainly)</span> and{" "}
        <span className="underline">Angular</span> for Web Development and{" "}
        <span className="underline">React Native</span> for Mobile Development.
        I'm also currently learning <span className="underline">Swift</span>!
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <Link
          href="#contact"
          className=" group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition-all cursor-pointer"
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-2 transition" />
        </Link>

        <a
          className="border border-black/10 bg-white text-gray-900 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-200 active:scale-105 transition-all cursor-pointer"
          href="/CV.pdf"
          download
        >
          Download CV <HiDownload className="opacity-60 transition" />
        </a>

        <a
          className="bg-white border border-black/10 text-gray-700 p-4 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:bg-gray-200 active:scale-105 transition-all cursor-pointer"
          href="https://www.linkedin.com/in/ccastejon/"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white border border-black/10 text-gray-700 p-4 flex items-center gap-2 rounded-full text-[1.20rem] outline-none focus:scale-[1.15] hover:scale-[1.15] hover:bg-gray-200 active:scale-105 transition-all cursor-pointer"
          href="https://github.com/ClementeAC"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
