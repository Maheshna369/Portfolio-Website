"use client";
import React, { useEffect, useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { ClipLoader } from "react-spinners";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
// import {
//   IconBrandGithub,
//   IconBrandGoogle,
//   IconBrandOnlyfans,
// } from "@tabler/icons-react";
import MagicButton from "./ui/magic-button";
import { FaLocationArrow } from "react-icons/fa";
import axios from "axios";
export const ContactMe = () => {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!isFormValid) {
        return;
      }
      setLoading(true);
      const response = await axios.post("/api/getEmail", {
        name: userInfo.firstName + " " + userInfo.lastName,
        email: userInfo.email,
      });
      const data = response.data.message;
      toast.success(data);
      setUserInfo({ firstName: "", lastName: "", email: "" });
      router.push("/");
    } catch (error) {
      toast.error("Failed to send email. Please try again.");
      console.log(`There's error while sending email to user is: ${error}`);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    const validateForm = () => {
      const errors = { firstName: "", lastName: "", email: "" };

      if (userInfo.firstName.trim() === "") {
        errors.firstName = "Name is required.";
      }

      if (userInfo.lastName.trim() === "") {
        errors.lastName = "Last Name is Required";
      }
      if (userInfo.email.trim() === "") {
        errors.email = "Email is Required";
      } else if (!/\S+@\S+\.\S+/.test(userInfo.email)) {
        errors.email = "Email is invalid.";
      }
      setErrors(errors);
      setIsFormValid(!errors.firstName && !errors.lastName && !errors.email); // Ensure it correctly determines validity
    };
    validateForm();
  }, [userInfo.firstName, userInfo.lastName, userInfo.email]);
  return (
    <>
      {<Toaster position="top-right" />}
      {loading && (
        <div className="w-screen h-screen fixed inset-0 backdrop-blur-sm flex justify-center items-center z-[100]">
          <ClipLoader color="green" />
        </div>
      )}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }} // Triggers animation when 20% of it is visible
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full flex flex-col justify-center items-center gap-5 xl:gap-10"
        id="contactme"
      >
        <h1 className="w-full flex justify-center items-center text-3xl xl:text-5xl font-bold text-white flex-wrap">
          Let&apos;s Build Your <span className="text-purple">&nbsp;Web Solution</span>
        </h1>
        <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
          <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 w-full flex justify-center items-center">
            Contact Form
          </h2>
          <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
            Fill out the form with your requirements, and I&apos;ll get back to you
            with the right solution for your needs.
          </p>

          <form className="my-8" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <LabelInputContainer>
                <Label htmlFor="firstname">First name</Label>
                <Input
                  id="firstname"
                  placeholder="Mahesh"
                  type="text"
                  onChange={(e) =>
                    setUserInfo((userInfo) => {
                      return { ...userInfo, firstName: e.target.value };
                    })
                  }
                  value={userInfo.firstName}
                />
                {errors.firstName && (
                  <p className="text-sm text-gray-500">{errors.firstName}</p>
                )}
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="lastname">Last name</Label>
                <Input
                  id="lastname"
                  placeholder="Nayak"
                  type="text"
                  onChange={(e) =>
                    setUserInfo((userInfo) => {
                      return { ...userInfo, lastName: e.target.value };
                    })
                  }
                  value={userInfo.lastName}
                />
                {errors.lastName && (
                  <p className="text-sm text-gray-500">{errors.lastName}</p>
                )}
              </LabelInputContainer>
            </div>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                placeholder="maheshnayak9639@gmail.com"
                type="email"
                onChange={(e) =>
                  setUserInfo((userInfo) => {
                    return { ...userInfo, email: e.target.value };
                  })
                }
                value={userInfo.email}
              />
              {errors.email && (
                <p className="text-sm text-gray-500">{errors.email}</p>
              )}
            </LabelInputContainer>
            {/* <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input id="password" placeholder="••••••••" type="password" />
        </LabelInputContainer> */}
            {/* <LabelInputContainer className="mb-8">
          <Label htmlFor="twitterpassword">Your twitter password</Label>
          <Input
            id="twitterpassword"
            placeholder="••••••••"
            type="twitterpassword"
          />
        </LabelInputContainer> */}

            <div
              //   className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              className="w-full flex justify-center items-center"
            >
              <MagicButton
                type="submit"
                title="Submit"
                icon={<FaLocationArrow />}
                position="right"
              />
              <BottomGradient />
            </div>

            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

            {/* <div className="flex flex-col space-y-4">
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              GitHub
            </span>
            <BottomGradient />
          </button>
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              Google
            </span>
            <BottomGradient />
          </button>
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <IconBrandOnlyfans className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              OnlyFans
            </span>
            <BottomGradient />
          </button>
        </div> */}
          </form>
        </div>
      </motion.div>
    </>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
