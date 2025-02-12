import React from "react";
import Typewriter from "typewriter-effect";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "./ui/moving-border";
const Service = () => {
  // const words = [
  //   "I",

  //   "Create",

  //   "modern,",

  //   "high-performance,",

  //   "and scalable",

  //   "web-application",

  //   "using the",

  //   "latest technologies.",
  // ];
  // const globeConfig = {
  //   pointSize: 4,
  //   globeColor: "#062056",
  //   showAtmosphere: true,
  //   atmosphereColor: "#FFFFFF",
  //   atmosphereAltitude: 0.1,
  //   emissive: "#062056",
  //   emissiveIntensity: 0.1,
  //   shininess: 0.9,
  //   polygonColor: "rgba(255,255,255,0.7)",
  //   ambientLight: "#38bdf8",
  //   directionalLeftLight: "#ffffff",
  //   directionalTopLight: "#ffffff",
  //   pointLight: "#ffffff",
  //   arcTime: 1000,
  //   arcLength: 0.9,
  //   rings: 1,
  //   maxRings: 3,
  //   initialPosition: { lat: 22.3193, lng: 114.1694 },
  //   autoRotate: true,
  //   autoRotateSpeed: 0.5,
  // };
  // const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
  // const sampleArcs = [
  //   {
  //     order: 1,
  //     startLat: -19.885592,
  //     startLng: -43.951191,
  //     endLat: -22.9068,
  //     endLng: -43.1729,
  //     arcAlt: 0.1,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 1,
  //     startLat: 28.6139,
  //     startLng: 77.209,
  //     endLat: 3.139,
  //     endLng: 101.6869,
  //     arcAlt: 0.2,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 1,
  //     startLat: -19.885592,
  //     startLng: -43.951191,
  //     endLat: -1.303396,
  //     endLng: 36.852443,
  //     arcAlt: 0.5,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 2,
  //     startLat: 1.3521,
  //     startLng: 103.8198,
  //     endLat: 35.6762,
  //     endLng: 139.6503,
  //     arcAlt: 0.2,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 2,
  //     startLat: 51.5072,
  //     startLng: -0.1276,
  //     endLat: 3.139,
  //     endLng: 101.6869,
  //     arcAlt: 0.3,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 2,
  //     startLat: -15.785493,
  //     startLng: -47.909029,
  //     endLat: 36.162809,
  //     endLng: -115.119411,
  //     arcAlt: 0.3,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 3,
  //     startLat: -33.8688,
  //     startLng: 151.2093,
  //     endLat: 22.3193,
  //     endLng: 114.1694,
  //     arcAlt: 0.3,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 3,
  //     startLat: 21.3099,
  //     startLng: -157.8581,
  //     endLat: 40.7128,
  //     endLng: -74.006,
  //     arcAlt: 0.3,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 3,
  //     startLat: -6.2088,
  //     startLng: 106.8456,
  //     endLat: 51.5072,
  //     endLng: -0.1276,
  //     arcAlt: 0.3,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 4,
  //     startLat: 11.986597,
  //     startLng: 8.571831,
  //     endLat: -15.595412,
  //     endLng: -56.05918,
  //     arcAlt: 0.5,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 4,
  //     startLat: -34.6037,
  //     startLng: -58.3816,
  //     endLat: 22.3193,
  //     endLng: 114.1694,
  //     arcAlt: 0.7,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 4,
  //     startLat: 51.5072,
  //     startLng: -0.1276,
  //     endLat: 48.8566,
  //     endLng: -2.3522,
  //     arcAlt: 0.1,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 5,
  //     startLat: 14.5995,
  //     startLng: 120.9842,
  //     endLat: 51.5072,
  //     endLng: -0.1276,
  //     arcAlt: 0.3,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 5,
  //     startLat: 1.3521,
  //     startLng: 103.8198,
  //     endLat: -33.8688,
  //     endLng: 151.2093,
  //     arcAlt: 0.2,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 5,
  //     startLat: 34.0522,
  //     startLng: -118.2437,
  //     endLat: 48.8566,
  //     endLng: -2.3522,
  //     arcAlt: 0.2,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 6,
  //     startLat: -15.432563,
  //     startLng: 28.315853,
  //     endLat: 1.094136,
  //     endLng: -63.34546,
  //     arcAlt: 0.7,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 6,
  //     startLat: 37.5665,
  //     startLng: 126.978,
  //     endLat: 35.6762,
  //     endLng: 139.6503,
  //     arcAlt: 0.1,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 6,
  //     startLat: 22.3193,
  //     startLng: 114.1694,
  //     endLat: 51.5072,
  //     endLng: -0.1276,
  //     arcAlt: 0.3,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 7,
  //     startLat: -19.885592,
  //     startLng: -43.951191,
  //     endLat: -15.595412,
  //     endLng: -56.05918,
  //     arcAlt: 0.1,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 7,
  //     startLat: 48.8566,
  //     startLng: -2.3522,
  //     endLat: 52.52,
  //     endLng: 13.405,
  //     arcAlt: 0.1,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 7,
  //     startLat: 52.52,
  //     startLng: 13.405,
  //     endLat: 34.0522,
  //     endLng: -118.2437,
  //     arcAlt: 0.2,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 8,
  //     startLat: -8.833221,
  //     startLng: 13.264837,
  //     endLat: -33.936138,
  //     endLng: 18.436529,
  //     arcAlt: 0.2,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 8,
  //     startLat: 49.2827,
  //     startLng: -123.1207,
  //     endLat: 52.3676,
  //     endLng: 4.9041,
  //     arcAlt: 0.2,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 8,
  //     startLat: 1.3521,
  //     startLng: 103.8198,
  //     endLat: 40.7128,
  //     endLng: -74.006,
  //     arcAlt: 0.5,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 9,
  //     startLat: 51.5072,
  //     startLng: -0.1276,
  //     endLat: 34.0522,
  //     endLng: -118.2437,
  //     arcAlt: 0.2,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 9,
  //     startLat: 22.3193,
  //     startLng: 114.1694,
  //     endLat: -22.9068,
  //     endLng: -43.1729,
  //     arcAlt: 0.7,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 9,
  //     startLat: 1.3521,
  //     startLng: 103.8198,
  //     endLat: -34.6037,
  //     endLng: -58.3816,
  //     arcAlt: 0.5,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 10,
  //     startLat: -22.9068,
  //     startLng: -43.1729,
  //     endLat: 28.6139,
  //     endLng: 77.209,
  //     arcAlt: 0.7,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 10,
  //     startLat: 34.0522,
  //     startLng: -118.2437,
  //     endLat: 31.2304,
  //     endLng: 121.4737,
  //     arcAlt: 0.3,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 10,
  //     startLat: -6.2088,
  //     startLng: 106.8456,
  //     endLat: 52.3676,
  //     endLng: 4.9041,
  //     arcAlt: 0.3,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 11,
  //     startLat: 41.9028,
  //     startLng: 12.4964,
  //     endLat: 34.0522,
  //     endLng: -118.2437,
  //     arcAlt: 0.2,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 11,
  //     startLat: -6.2088,
  //     startLng: 106.8456,
  //     endLat: 31.2304,
  //     endLng: 121.4737,
  //     arcAlt: 0.2,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 11,
  //     startLat: 22.3193,
  //     startLng: 114.1694,
  //     endLat: 1.3521,
  //     endLng: 103.8198,
  //     arcAlt: 0.2,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 12,
  //     startLat: 34.0522,
  //     startLng: -118.2437,
  //     endLat: 37.7749,
  //     endLng: -122.4194,
  //     arcAlt: 0.1,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 12,
  //     startLat: 35.6762,
  //     startLng: 139.6503,
  //     endLat: 22.3193,
  //     endLng: 114.1694,
  //     arcAlt: 0.2,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 12,
  //     startLat: 22.3193,
  //     startLng: 114.1694,
  //     endLat: 34.0522,
  //     endLng: -118.2437,
  //     arcAlt: 0.3,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 13,
  //     startLat: 52.52,
  //     startLng: 13.405,
  //     endLat: 22.3193,
  //     endLng: 114.1694,
  //     arcAlt: 0.3,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 13,
  //     startLat: 11.986597,
  //     startLng: 8.571831,
  //     endLat: 35.6762,
  //     endLng: 139.6503,
  //     arcAlt: 0.3,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 13,
  //     startLat: -22.9068,
  //     startLng: -43.1729,
  //     endLat: -34.6037,
  //     endLng: -58.3816,
  //     arcAlt: 0.1,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  //   {
  //     order: 14,
  //     startLat: -33.936138,
  //     startLng: 18.436529,
  //     endLat: 21.395643,
  //     endLng: 39.883798,
  //     arcAlt: 0.3,
  //     color: colors[Math.floor(Math.random() * (colors.length - 1))],
  //   },
  // ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }} // Triggers animation when 20% of it is visible
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full flex flex-col justify-center items-center gap-3 xl:gap-5 my-5 xl:my-10"
      id="service"
    >
      <h1 className="text-white text-3xl xl:text-5xl font-bold">
        What I Offer
      </h1>
      <div className="text-white  font-medium text-xl xl:text-3xl">
        <Typewriter
          options={{
            strings: [
              "I create modern, high-performance, and scalable web-application using the latest technologies.",
            ],
            autoStart: true,
            delay: 20,
            deleteSpeed: Infinity,
          }}
        />
      </div>
      <div className="w-full flex flex-col xl:flex-row flex-wrap justify-center xl:justify-between items-center">
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              I Will Build a Fast & Scalable MERN Stack Website With Next.js
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              I build modern full-stack websites using MERN & Next.js, ensuring
              speed, responsiveness, and seamless API integration. Whether it’s
              a business site, blog, or e-commerce platform, I deliver secure,
              scalable, and high-performance solutions. Let’s turn your vision
              into reality! 🚀
            </CardItem>
            <CardItem className="mt-5">
              <Image
                src="/fiverrthumbnail.png"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as={Link}
                href="https://www.fiverr.com/s/pd5Aqko"
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                Know More
              </CardItem>
              <Button
                // translateZ={20}
                target="__blank"
                className="px-4 py-2 rounded-xl text-medium font-normal text-white"
              >
                <Link href="https://www.fiverr.com/s/pd5Aqko">Buy Now</Link>
              </Button>
            </div>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              I Will Create a Professional WordPress Website With SEO & Speed
              Optimization
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              I will create a professional, SEO-friendly, and fully responsive
              WordPress website tailored to your needs. Whether it&apos;s a business
              site, portfolio, blog, or e-commerce store, I ensure fast loading
              speeds, mobile optimization, and custom design to help your site
              stand out. Let&apos;s build your online presence! 🌐
            </CardItem>
            <CardItem className="mt-5">
              <Image
                src="/comingsoon.png"
                height={"1000"}
                width={"1000"}
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as={Link}
                href="#"
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                Know More
              </CardItem>
              <Button
                // translateZ={20}
                target="__blank"
                className="px-4 py-2 rounded-xl text-medium font-normal text-white"
              >
                <Link href="https://www.fiverr.com/s/pd5Aqko">Buy Now</Link>
              </Button>
            </div>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              I Will Design a Modern UI/UX for Websites and Mobile Apps
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              I will design a modern, user-friendly, and visually appealing
              UI/UX for your website or mobile app. My designs are crafted for
              seamless user experience, easy navigation, and high engagement.
              Get a clean, professional, and conversion-focused design that
              matches your brand identity! 🎨
            </CardItem>
            <CardItem className="mt-5">
              <Image
                src="/comingsoon.png"
                height={"1000"}
                width={"1000"}
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as={Link}
                href="#"
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                Know More
              </CardItem>
              <Button
                // translateZ={20}
                target="__blank"
                className="px-4 py-2 rounded-xl text-medium font-normal text-white"
              >
                <Link href="https://www.fiverr.com/s/pd5Aqko">Buy Now</Link>
              </Button>
            </div>
          </CardBody>
        </CardContainer>
        {/* <div className="flex flex-row items-center justify-center py-20 h-screen md:h-auto dark:bg-black bg-white relative w-full">
          <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-full md:h-[40rem] px-4">
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
              }}
              className="div"
            >
              <h2 className="text-center text-xl md:text-4xl font-bold text-black dark:text-white">
                We sell soap worldwide
              </h2>
              <p className="text-center text-base md:text-lg font-normal text-neutral-700 dark:text-neutral-200 max-w-md mt-2 mx-auto">
                This globe is interactive and customizable. Have fun with it,
                and don&apos;t forget to share it. :)
              </p>
            </motion.div>
            <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent dark:to-black to-white z-40" />
            <div className="absolute w-full -bottom-20 h-72 md:h-full z-10">
              <World data={sampleArcs} globeConfig={globeConfig} />
            </div>
          </div>
        </div> */}
      </div>
    </motion.div>
  );
};

export default Service;
