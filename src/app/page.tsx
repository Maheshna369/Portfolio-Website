"use client";
import React from "react";
const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });
import { HeroHighlightDemo } from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
const Skills = dynamic(() => import("@/components/Skills"), { ssr: false });
const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  ssr: false,
});
import { ContactMe } from "@/components/ContactMe";
const Approach = dynamic(() => import("@/components/Approach"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
import {
  IconHome,
  IconWorldWww,
  IconBriefcase2,
  IconPhone,
} from "@tabler/icons-react";
const Service = dynamic(() => import("@/components/Service"), { ssr: false });
const Projects = dynamic(() => import("@/components/Projects"), { ssr: false });
import dynamic from "next/dynamic";
const Page = () => {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Service",
      link: "#service",
      icon: (
        <IconWorldWww className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Projects",
      link: "#projects",
      icon: (
        <IconBriefcase2 className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Contact",
      link: "#contactme",
      icon: <IconPhone className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];
  return (
    <div className="min-h-screen h-auto w-screen m-0 px-[20px] py-0 xl:px-[100px] xl:py-0 bg-black-100">
      <FloatingNav navItems={navItems} />
      <Navbar />
      <HeroHighlightDemo />
      <Service />
      <Projects />
      <Skills />
      <Testimonials />
      <Approach />
      <ContactMe />
      <Footer />
    </div>
  );
};

export default Page;
