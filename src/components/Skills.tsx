"use client";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/free-mode";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
const topSkills = [
  { name: "Next.js", level: 80, icon: "/skillslogo/nextjs.svg" },
  { name: "React.js", level: 90, icon: "/skillslogo/reactjs.svg" },
  { name: "Node.js", level: 90, icon: "/skillslogo/nodejs.svg" },
  { name: "TypeScript", level: 75, icon: "/skillslogo/typescript.svg" },
  { name: "MongoDB", level: 70, icon: "/skillslogo/mongodb.svg" },
  { name: "Tailwind CSS", level: 90, icon: "/skillslogo/tailwindcss.svg" },
  { name: "Auth JS", level: 60, icon: "/skillslogo/nextauth.svg" },
  { name: "Wordpress", level: 70, icon: "/skillslogo/wordpress.svg" },
];
const otherSkills1 = [
  { name: "HTML", src: "/skillslogo/otherskills/html.svg" },
  { name: "CSS", src: "/skillslogo/otherskills/css.svg" },
  { name: "Bootstrap", src: "/skillslogo/otherskills/bootstrap.svg" },
  { name: "Javascript", src: "/skillslogo/otherskills/javascript.svg" },
  // { name: "Express JS", src: "/skillslogo/otherskills/expressjs.svg" },
  // { name: "PostgreSQL", src: "/skillslogo/otherskills/postgresql.svg" },
  // { name: "JWT", src: "/skillslogo/otherskills/jwt.svg" },
  // { name: "Git", src: "/skillslogo/otherskills/git.svg" },
  // { name: "Github", src: "/skillslogo/otherskills/github.svg" },
  // { name: "Rest API", src: "/skillslogo/otherskills/restapi.svg" },
  // { name: "Vercel", src: "/skillslogo/otherskills/vercel.svg" },
  // { name: "Figma", src: "/skillslogo/otherskills/figma.svg" },
];
const otherSkills2 = [
  { name: "Express JS", src: "/skillslogo/otherskills/expressjs.svg" },
  { name: "PostgreSQL", src: "/skillslogo/otherskills/postgresql.svg" },
  { name: "JWT", src: "/skillslogo/otherskills/jwt.svg" },
  { name: "Git", src: "/skillslogo/otherskills/git.svg" },
];
const otherSkills3 = [
  { name: "Github", src: "/skillslogo/otherskills/github.svg" },
  { name: "Rest API", src: "/skillslogo/otherskills/restapi.svg" },
  { name: "Vercel", src: "/skillslogo/otherskills/vercel.svg" },
  { name: "Figma", src: "/skillslogo/otherskills/figma.svg" },
];
const SkillBar = ({
  name,
  level,
  icon,
}: {
  name: string;
  level: number;
  icon: string;
}) => {
  return (
    <div className="mb-4 w-full flex flex-row justify-center items-center gap-1">
      <img
        className="w-10 h-10 border rounded-full bg-white"
        src={icon}
        alt={name}
      />
      <div className="w-full bg-gray-200 rounded-full h-4">
        <motion.div
          className="bg-blue-500 h-4 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1 }}
        />
      </div>
    </div>
  );
};

export default function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }} // Triggers animation when 20% of it is visible
      transition={{ duration: 0.8, ease: "easeOut" }}
      id="skills"
      className="py-10 mx-auto text-white my-10 w-full"
    >
      <h2 className="text-3xl xl:text-5xl font-bold text-center mb-6">
        My Skills
      </h2>
      <div className="w-full flex flex-col xl:flex-row h-auto gap-3 xl:gap-5">
        <div className="space-y-4 w-full xl:w-1/2 flex flex-col justify-center items-start">
          {topSkills.map((skill, index) => (
            <SkillBar
              key={index}
              name={skill.name}
              icon={skill.icon}
              level={skill.level}
            />
          ))}
        </div>
        <div className="w-full h-[500px] xl:w-1/2 flex flex-row justify-start items-start flex-wrap border rounded-3xl">
          <InfiniteMovingCards
            otherSkills={otherSkills1}
            direction="left"
            speed="fast"
            pauseOnHover={false}
            className="h-1/3"
          />
          <InfiniteMovingCards
            otherSkills={otherSkills2}
            direction="right"
            speed="fast"
            pauseOnHover={false}
            className="h-1/3"
          />
          <InfiniteMovingCards
            otherSkills={otherSkills3}
            speed="fast"
            direction="left"
            pauseOnHover={false}
            className="h-1/3"
          />
        </div>
      </div>
    </motion.div>
  );
}
