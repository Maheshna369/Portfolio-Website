import React from "react";
import Link from "next/link";
import { IconBrandFiverr } from "@tabler/icons-react";
import { IconBrandUpwork } from "@tabler/icons-react";
import { IconBrandGithub } from "@tabler/icons-react";
import { IconBrandLinkedin } from "@tabler/icons-react";
import { IconBrandInstagram } from "@tabler/icons-react";
const Footer = () => {
  return (
    <footer
      // initial={{ opacity: 0, y: 50 }}
      // whileInView={{ opacity: 1, y: 0 }}
      // viewport={{ once: false, amount: 0.2 }} // Triggers animation when 20% of it is visible
      // transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex mt-16 flex-row justify-between items-center text-white w-full py-5 xl:py-10"
    >
      <p className="md:text-base text-sm xl:font-normal font-normal w-1/3">
        Copyright © 2025 Mahesh Nayak
      </p>
      <p className="md:text-base text-sm xl:font-normal font-normal w-1/3">
        © 2025 Maphy, Inc. All Rights Reserved.
      </p>
      <div className="flex justify-evenly items-center w-1/3">
        <Link href="https://www.fiverr.com/s/0bav1zx">
          <IconBrandFiverr stroke={2} />
        </Link>
        <Link href="https://www.upwork.com/freelancers/~019c4e8bbe1881f9cd">
          <IconBrandUpwork stroke={2} />
        </Link>
        <Link href="https://github.com/Maheshna369">
          <IconBrandGithub stroke={2} />
        </Link>
        <Link href="https://www.linkedin.com/in/mahesh-nayak-53b653249/">
          <IconBrandLinkedin stroke={2} />
        </Link>
        <Link href="https://www.instagram.com/growthwithmaphy/">
          <IconBrandInstagram stroke={2} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
