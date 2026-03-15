// TODO: WINDOW SIZING ISSUE TO FIX LATER

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import AnimatedLetters from "@/components/AnimatedLetters/AnimatedLetters";
import StarField from "@/components/Starfield";

export default function Home() {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = " Arman Gasparyan,".split("");
  const jobArray = "Software Engineer.".split("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="ml-[75px] min-h-screen bg-[#0d0d0d] flex items-center justify-between">
      <section className="flex flex-col gap-6 ml-[0%]">
        <h1 className="text-[#c0c0c0] text-6xl font-bold">
          <span className={`${letterClass} _8`}>H</span>
          <span className={`${letterClass} _9`}>i</span>
          <span className={`${letterClass} _10`}>,</span>
        </h1>
        <h1
          className="text-[#c0c0c0] font-bold flex flex-col"
          style={{ fontSize: "53px" }}
        >
          <div className="flex items-center">
            <span className={`${letterClass} _11`}>I</span>
            <span className={`${letterClass} _12`}>&apos;m</span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={13}
            />
          </div>
          <div>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={28}
            />
          </div>
        </h1>
        <p
          className="text-[#4d4d4e] text-sm tracking-widest uppercase"
          style={{
            animation: "fadeIn 1s forwards",
            animationDelay: "1.8s",
            opacity: 0,
          }}
        >
          Computer Science & Mathematics, 2026 at Nova Southeastern University
        </p>
        <Link
          href="/contact"
          className="mt-2 w-fit border border-[#c0c0c0] text-[#c0c0c0] px-8 py-3 text-sm tracking-widest uppercase hover:bg-[#c0c0c0] hover:text-[#0d0d0d] transition-all duration-300"
          style={{
            animation: "fadeIn 1s forwards",
            animationDelay: "2s",
            opacity: 0,
          }}
        >
          Contact Me
        </Link>
      </section>

      <div
        className="w-[450px] h-[450px] mr-[10%]"
        style={{
          animation: "fadeIn 1s forwards",
          animationDelay: "1s",
          opacity: 0,
        }}
      >
        <StarField />
      </div>
    </div>
  );
}
