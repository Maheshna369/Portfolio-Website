"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-cards-for-testimonials";
import { motion } from "framer-motion";
const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Mahesh is a highly skilled developer who understands both design and functionality. His work on our web platform was seamless and efficient.",
      title: "Software Engineer, Infosys",
      name: "Sourav Dash",
      src: "/testimonials/souravdash.jpg",
    },
    {
      quote:
        "We wanted a fast and modern website, and Mahesh delivered exactly that. His ability to understand requirements and execute them is impressive.",
      title: "Founder, TechVision",
      name: "Rashmita Mohanty",
      src: "/testimonials/rashmitamohanty.jpg",
    },
    {
      quote:
        "I had the opportunity to work with Mahesh on a project, and I was amazed by his problem-solving skills. He’s the guy you can rely on when it comes to building solid web apps.",
      title: "PM, Odisha",
      name: "Bikash Pattnaik",
      src: "/testimonials/bikashpatnaik.jpg",
    },
    {
      quote:
        "I've known Mahesh for a while now, and his dedication to learning and building is unmatched. Whether it's a complex backend issue or a UI fix, he tackles everything with confidence.",
      title: "Student, Khallikote Unitary University",
      name: "Deepak Sahu",
      src: "/testimonials/deepaksahu.jpg",
    },
    {
      quote:
        "Mahesh is not just a great developer but also someone who genuinely enjoys solving problems. I’ve seen his growth, and it's inspiring. His work speaks for itself!",
      title: "Student, OUTR",
      name: "Joysheel Pani",
      src: "/testimonials/joysheel.jpg",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }} // Triggers animation when 20% of it is visible
      transition={{ duration: 0.8, ease: "easeOut" }}
      id="testimonials"
      className="py-20 text-3xl xl:text-5xl font-bold flex flex-col justify-center items-center"
    >
      <h1 className="heading text-white">
        What My
        <span className="text-purple"> Clients</span> and
        <span className="text-purple"> Peers</span> Say
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>

        {/* <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {testimonials.map((company) => (
            <React.Fragment key={company.name}>
              <div className="flex md:max-w-60 max-w-32 gap-2">
                <img
                  src={company.src}
                  alt={company.name}
                  className="md:w-10 w-5"
                />
                <img
                  src={company.nameImg}
                  alt={company.name}
                  width={company.id === 4 || company.id === 5 ? 100 : 150}
                  className="md:w-24 w-20"
                />
              </div>
            </React.Fragment>
          ))}
        </div> */}
      </div>
    </motion.div>
  );
};

export default Testimonials;
