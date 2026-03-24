"use client";

import Link from "next/link";
import {useEffect, useState} from "react";
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
        <div className="ml-[75px] min-h-screen bg-[#0d0d0d] relative max-[1000px]:ml-0 max-[1000px]:mt-[60px]">

            {/* Text zone */}
            <section className="
  absolute left-[6%] top-1/2 -translate-y-1/2 w-[50%] max-h-[90%] flex flex-col gap-6
  max-[1000px]:static max-[1000px]:w-full max-[1000px]:-translate-y-0 max-[1000px]:p-[10px]
">
                <h1 className="text-[#c0c0c0] font-bold home-title">
                    <span className={`${letterClass} _8`}>H</span>
                    <span className={`${letterClass} _9`}>i</span>
                    <span className={`${letterClass} _10`}>,</span>
                </h1>
                <h1 className="text-[#c0c0c0] font-bold flex flex-col max-[1000px]:text-[40px] home-title">
                    <div className="flex items-center">
                        <span className={`${letterClass} _11`}>I</span>
                        <span className={`${letterClass} _12`}>&apos;m</span>
                        <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={13}/>
                    </div>
                    <div>
                        <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={28}/>
                    </div>
                </h1>
                <p
                    className="text-[#4d4d4e] text-sm tracking-widest uppercase"
                    style={{animation: "fadeIn 1s forwards", animationDelay: "1.8s", opacity: 0}}
                >
                    Computer Science & Mathematics at Nova Southeastern University, 2026
                </p>
                <Link
                    href="/contact"
                    className="mt-2 w-fit border border-[#c0c0c0] text-[#c0c0c0] px-8 py-3 text-sm tracking-widest uppercase hover:bg-[#c0c0c0] hover:text-[#0d0d0d] transition-all duration-300 max-[1000px]:block max-[1000px]:w-fit whitespace-nowrap rounded-lg"
                    style={{animation: "fadeIn 1s forwards", animationDelay: "2s", opacity: 0}}
                >
                    Contact Me
                </Link>
            </section>

            {/* StarField */}
            <div
                className="absolute right-[5%] top-1/2 -translate-y-1/2 w-[450px] h-[450px] max-[1000px]:relative max-[1000px]:w-[250px] max-[1000px]:h-[250px] max-[1000px]:mx-auto max-[1000px]:mt-[50px] max-[1000px]:translate-y-0 max-[1000px]:right-0"
                style={{animation: "fadeIn 1s forwards", animationDelay: "1s", opacity: 0}}
            >
                <StarField/>
            </div>

        </div>
    );
}