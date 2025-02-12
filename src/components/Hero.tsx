"use client";
import { motion, useInView } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";
import {
  IconBrandFiverr,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandUpwork,
} from "@tabler/icons-react";
import { FloatingDock } from "./ui/floating-dock";
import { useRef } from "react";
export function HeroHighlightDemo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  const links = [
    {
      title: "Fiverr",
      icon: (
        <IconBrandFiverr className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.fiverr.com/s/0bav1zx",
    },

    {
      title: "Upwork",
      icon: (
        <IconBrandUpwork className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.upwork.com/freelancers/~019c4e8bbe1881f9cd",
    },
    {
      title: "Linkedin",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/mahesh-nayak-53b653249/",
    },
    {
      title: "Github",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/Maheshna369",
    },
  ];
  return (
    <div className="w-full flex flex-col xl:flex-row justify-center items-center gap-5 xl:gap-0">
      <HeroHighlight>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }} // Triggers animation when 20% of it is visible
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="   dark:text-white w-xl leading-relaxed lg:leading-snug text-center mx-auto flex flex-col flex-wrap gap-1 xl:gap-4"
        >
          <h1 className="text-xl xl:text-3xl flex flex-col justify-evenly items-start font-bold">
            <span className="text-green-500 w-full flex justify-start items-center">
              ___Hello,
            </span>
            <div className="flex w-full justify-start items-center text-2xl xl:text-5xl text-start tracking-widest">
              <span className=" pb-1">I am</span>
              <Highlight className="text-black dark:text-green-500 ">
                Mahesh Nayak
              </Highlight>
            </div>
          </h1>
          <h3 className="w-full flex justify-start items-center text-xl xl:text-3xl font-medium text-start tracking-widest">
            Full Stack Developer | UI/UX Designer
          </h3>
          <p className="w-full flex justify-start items-center flex-wrap text-wrap text-start break-words p-0 mt-1 text-lg">
            a full-stack web developer and UI/UX designer specializing in
            modern, high-performance websites. With expertise in the MERN stack,
            Next.js, and WordPress, I build scalable web solutions that drive
            business growth. Whether it’s a sleek landing page, an advanced
            e-commerce platform, or a user-friendly design, I craft digital
            experiences that deliver results.
          </p>
          <div className="w-full flex flex-col justify-center items-start gap-2 xl:gap-3">
            <FloatingDock items={links} />
          </div>
        </motion.div>
      </HeroHighlight>
      <div className="w-full xl:w-1/2 h-auto  justify-center items-center hidden xl:flex">
        <BackgroundGradient>
          <Image
            onContextMenu={(e) => e.preventDefault()}
            src={"/myimgforportfoliowebsite.png"}
            height={"400"}
            width={"400"}
            alt="My Image"
          />
        </BackgroundGradient>
      </div>
    </div>
  );
}
