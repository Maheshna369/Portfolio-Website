import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { GoArrowUpRight } from "react-icons/go";
import { motion } from "framer-motion";
const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }} // Triggers animation when 20% of it is visible
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full h-auto flex flex-col justify-center items-center gap-3 xl:gap-5"
      id="projects"
    >
      <h1 className="flex justify-center items-center text-3xl xl:text-5xl text-white font-bold xl:mb-5 mt-16 mb-10">
        What I&apos;ve Built
      </h1>
      <div className="w-full flex flex-col xl:flex-row justify-center items-center flex-wrap xl:justify-between gap-10 xl:gap-40 mb-10">
        <PinContainer
          className=""
          title="E-Commerce Website"
          href="https://maphy-e-commerce-app.vercel.app"
        >
          <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
            <div
              className="relative w-full h-full overflow-hidden lg:rounded-3xl"
              style={{ backgroundColor: "#13162D" }}
            >
              <img src="/projecticons/bg.png" alt="bgimg" />
            </div>
            <img
              src={"/projecticons/e-commerce/home.png"}
              alt="cover"
              className="z-10 absolute bottom-0"
            />
          </div>

          <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-white">
            Full-Stack E-Commerce Website
          </h1>

          <p
            className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
            style={{
              color: "#BEC1DD",
              margin: "1vh 0",
            }}
          >
            Built with Next.js, React, Node.js, Express, MongoDB, and Tailwind
            CSS, featuring JWT auth, Razorpay payments, cart & order management,
            product search, and admin dashboard. Deployed on Vercel.
          </p>

          <div className="flex items-center justify-between mt-7 mb-3">
            <div className="flex items-center">
              <div
                className="border border-white/[.2] rounded-full bg-white lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                style={{
                  transform: `translateX(-${5 * 0 + 2}px)`,
                }}
              >
                <img
                  src={"/projecticons/weatherapp/reactjs.svg"}
                  alt="icon5"
                  className="p-2"
                />
              </div>
              <div
                className="border border-white/[.2] rounded-full bg-white lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                style={{
                  transform: `translateX(-${5 * 1 + 2}px)`,
                }}
              >
                <img
                  src={"/projecticons/e-commerce/nextjs.svg"}
                  alt="icon5"
                  className="p-2"
                />
              </div>
              <div
                className="border border-white/[.2] rounded-full bg-white lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                style={{
                  transform: `translateX(-${5 * 2 + 2}px)`,
                }}
              >
                <img
                  src={"/projecticons/e-commerce/nodejs.svg"}
                  alt="icon5"
                  className="p-2"
                />
              </div>
              <div
                className="border border-white/[.2] rounded-full bg-white lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                style={{
                  transform: `translateX(-${5 * 3 + 2}px)`,
                }}
              >
                <img
                  src={"/projecticons/e-commerce/mongodb.svg"}
                  alt="icon5"
                  className="p-2"
                />
              </div>
              <div
                className="border border-white/[.2] rounded-full bg-white lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                style={{
                  transform: `translateX(-${5 * 4 + 2}px)`,
                }}
              >
                <img
                  src={"/projecticons/e-commerce/tailwindcss.svg"}
                  alt="icon5"
                  className="p-2"
                />
              </div>
            </div>

            <div className="flex justify-center items-center">
              <p className="flex lg:text-xl md:text-xs text-sm text-white">
                Live Site
              </p>
              <GoArrowUpRight className="ms-3" color="#CBACF9" />
            </div>
          </div>
        </PinContainer>
        <PinContainer
          title="Next-JS Blog App"
          href="https://maphy-blog-app.vercel.app/"
        >
          <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
            <div
              className="relative w-full h-full overflow-hidden lg:rounded-3xl"
              style={{ backgroundColor: "#13162D" }}
            >
              <img src="/projecticons/bg.png" alt="bgimg" />
            </div>
            <img
              src={"/projecticons/blogapp/home.png"}
              alt="cover"
              className="z-10 absolute bottom-0"
            />
          </div>

          <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-white">
            ✍️ Full-Stack Blog Platform
          </h1>

          <p
            className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
            style={{
              color: "#BEC1DD",
              margin: "1vh 0",
            }}
          >
            Built with Next.js, React, Node.js, Express, MongoDB, and Tailwind
            CSS, featuring NextAuth.js (Google OAuth), JWT auth, rich text
            editor, category-based posts, and an admin dashboard. Deployed on
            Vercel.
          </p>

          <div className="flex items-center justify-between mt-7 mb-3">
            <div className="flex items-center">
              <div
                className="border border-white/[.2] rounded-full bg-white lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                style={{
                  transform: `translateX(-${5 * 0 + 2}px)`,
                }}
              >
                <img
                  src={"/projecticons/e-commerce/reactjs.svg"}
                  alt="icon5"
                  className="p-2"
                />
              </div>
              <div
                className="border border-white/[.2] rounded-full bg-white lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                style={{
                  transform: `translateX(-${5 * 1 + 2}px)`,
                }}
              >
                <img
                  src={"/projecticons/e-commerce/nextjs.svg"}
                  alt="icon5"
                  className="p-2"
                />
              </div>
              <div
                className="border border-white/[.2] rounded-full bg-white lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                style={{
                  transform: `translateX(-${5 * 2 + 2}px)`,
                }}
              >
                <img
                  src={"/projecticons/e-commerce/nodejs.svg"}
                  alt="icon5"
                  className="p-2"
                />
              </div>
              <div
                className="border border-white/[.2] rounded-full bg-white lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                style={{
                  transform: `translateX(-${5 * 3 + 2}px)`,
                }}
              >
                <img
                  src={"/projecticons/e-commerce/mongodb.svg"}
                  alt="icon5"
                  className="p-2"
                />
              </div>
              <div
                className="border border-white/[.2] rounded-full bg-white lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                style={{
                  transform: `translateX(-${5 * 4 + 2}px)`,
                }}
              >
                <img
                  src={"/projecticons/e-commerce/tailwindcss.svg"}
                  alt="icon5"
                  className="p-2"
                />
              </div>
            </div>

            <div className="flex justify-center items-center">
              <p className="flex lg:text-xl md:text-xs text-sm  text-white">
                Live Site
              </p>
              <GoArrowUpRight className="ms-3" color="#CBACF9" />
            </div>
          </div>
        </PinContainer>
        <PinContainer
          title="Full-Stack Weather App"
          href="https://mernstack-weather-app.onrender.com/"
        >
          <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
            <div
              className="relative w-full h-full overflow-hidden lg:rounded-3xl"
              style={{ backgroundColor: "#13162D" }}
            >
              <img src="/projecticons/bg.png" alt="bgimg" />
            </div>
            <img
              src={"/projecticons/weatherapp/home.png"}
              alt="cover"
              className="z-10 absolute bottom-0"
            />
          </div>

          <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-white">
            🌦️ Full-Stack Weather App
          </h1>

          <p
            className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
            style={{
              color: "#BEC1DD",
              margin: "1vh 0",
            }}
          >
            Built with React, Node.js, Express, and OpenWeather API, featuring
            real-time weather data, location-based search, and a simple UI.
            Deployed on Render.
          </p>

          <div className="flex items-center justify-between mt-7 mb-3">
            <div className="flex items-center">
              <div
                className="border border-white/[.2] rounded-full bg-white lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                style={{
                  transform: `translateX(-${5 * 0 + 2}px)`,
                }}
              >
                <img
                  src={"/projecticons/weatherapp/reactjs.svg"}
                  alt="icon5"
                  className="p-2"
                />
              </div>
              <div
                className="border border-white/[.2] rounded-full bg-white lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                style={{
                  transform: `translateX(-${5 * 1 + 2}px)`,
                }}
              >
                <img
                  src={"/projecticons/weatherapp/nodejs.svg"}
                  alt="icon5"
                  className="p-2"
                />
              </div>
              <div
                className="border border-white/[.2] rounded-full bg-white lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                style={{
                  transform: `translateX(-${5 * 2 + 2}px)`,
                }}
              >
                <img
                  src={"/projecticons/weatherapp/expressjs.svg"}
                  alt="icon5"
                  className="p-2"
                />
              </div>
              <div
                className="border border-white/[.2] rounded-full bg-white lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                style={{
                  transform: `translateX(-${5 * 3 + 2}px)`,
                }}
              >
                <img
                  src={"/projecticons/weatherapp/openweather.svg"}
                  alt="icon5"
                  className="p-2"
                />
              </div>
              <div
                className="border border-white/[.2] rounded-full bg-white lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                style={{
                  transform: `translateX(-${5 * 4 + 2}px)`,
                }}
              >
                <img
                  src={"/projecticons/weatherapp/render.svg"}
                  alt="icon5"
                  className="p-2"
                />
              </div>
            </div>

            <div className="flex justify-center items-center">
              <p className="flex lg:text-xl md:text-xs text-sm  text-white">
                Live Site
              </p>
              <GoArrowUpRight className="ms-3" color="#CBACF9" />
            </div>
          </div>
        </PinContainer>
        <PinContainer
          title="React To-Do List App"
          href="https://maphy-todo-list.vercel.app/"
        >
          <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
            <div
              className="relative w-full h-full overflow-hidden lg:rounded-3xl"
              style={{ backgroundColor: "#13162D" }}
            >
              <img src="/projecticons/bg.png" alt="bgimg" />
            </div>
            <img
              src={"/projecticons/todolist/home.png"}
              alt="cover"
              className="z-10 absolute bottom-0"
            />
          </div>

          <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-white">
            📝 React To-Do List
          </h1>

          <p
            className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
            style={{
              color: "#BEC1DD",
              margin: "1vh 0",
            }}
          >
            A simple to-do list app built with React. Users can add, edit, and
            delete tasks effortlessly. Deployed on Vercel.
          </p>

          <div className="flex items-center justify-between mt-7 mb-3">
            <div className="flex items-center">
              <div
                className="border border-white/[.2] rounded-full bg-white lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                style={{
                  transform: `translateX(-${5 * 0 + 2}px)`,
                }}
              >
                <img
                  src={"/projecticons/todolist/reactjs.svg"}
                  alt="icon5"
                  className="p-2"
                />
              </div>
              <div
                className="border border-white/[.2] rounded-full bg-white lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                style={{
                  transform: `translateX(-${5 * 1 + 2}px)`,
                }}
              >
                <img
                  src={"/projecticons/todolist/js.svg"}
                  alt="icon5"
                  className="p-2"
                />
              </div>
              <div
                className="border border-white/[.2] rounded-full bg-white lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                style={{
                  transform: `translateX(-${5 * 2 + 2}px)`,
                }}
              >
                <img
                  src={"/projecticons/todolist/vite.svg"}
                  alt="icon5"
                  className="p-2"
                />
              </div>
              <div
                className="border border-white/[.2] rounded-full bg-white lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                style={{
                  transform: `translateX(-${5 * 3 + 2}px)`,
                }}
              >
                <img
                  src={"/projecticons/todolist/css.svg"}
                  alt="icon5"
                  className="p-2"
                />
              </div>
              <div
                className="border border-white/[.2] rounded-full bg-white lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                style={{
                  transform: `translateX(-${5 * 4 + 2}px)`,
                }}
              >
                <img
                  src={"/projecticons/todolist/vercel.svg"}
                  alt="icon5"
                  className="p-2"
                />
              </div>
            </div>

            <div className="flex justify-center items-center">
              <p className="flex lg:text-xl md:text-xs text-sm  text-white">
                Live Site
              </p>
              <GoArrowUpRight className="ms-3" color="#CBACF9" />
            </div>
          </div>
        </PinContainer>
      </div>
    </motion.div>
  );
};

export default Projects;
