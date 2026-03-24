"use client";

import {useEffect, useRef, useState} from "react";
import AnimatedLetters from "@/components/AnimatedLetters/AnimatedLetters";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
    const [letterClass, setLetterClass] = useState("text-animate");

    const refForm = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        alert("Coming soon!");
    };
    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass("text-animate-hover");
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            className="ml-[75px] min-h-screen bg-[#0d0d0d] flex items-center px-[5%] max-[1000px]:ml-0 max-[1000px]:mt-[60px] max-[1000px]:px-6">
            <div className="w-full">

                <h1 className="text-[#c0c0c0] font-bold home-title mb-10">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Contact me".split("")}
                        idx={15}
                    />
                </h1>

                {/* Two column layout */}
                <div className="flex gap-16 max-[1000px]:flex-col">

                    {/* Left side */}
                    <div className="flex flex-col gap-6 w-[40%] max-[1000px]:w-full">
                        <p className="text-[#4d4d4e] text-sm leading-relaxed">
                            Thank you for your interest in getting in touch! I value open
                            communication and welcome any inquiries, feedback, or collaboration
                            opportunities. Please don&apos;t hesitate to get in touch with me
                            by filling out the contact form.
                        </p>
                        <div className="flex gap-4">
                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/armangasparyan/">
                                <FontAwesomeIcon icon={faLinkedin}
                                                 className="text-[#4d4d4e] w-6 h-6 hover:text-[#c0c0c0] transition-colors duration-300"/>
                            </a>
                            <a target="_blank" rel="noreferrer" href="mailto:youremail@gmail.com">
                                <FontAwesomeIcon icon={faEnvelope}
                                                 className="text-[#4d4d4e] w-6 h-6 hover:text-[#c0c0c0] transition-colors duration-300"/>
                            </a>
                        </div>
                    </div>

                    {/* Right side - form */}
                    <div className="flex-1">
                        <form ref={refForm} onSubmit={sendEmail} className="flex flex-col gap-4">
                            <div className="flex gap-4 max-[600px]:flex-col">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    required
                                    className="flex-1 bg-[#181818] text-[#c0c0c0] placeholder-[#4d4d4e] border border-[#4d4d4e] px-4 py-3 text-sm focus:outline-none focus:border-[#c0c0c0] transition-colors duration-300 rounded-lg"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    required
                                    className="flex-1 bg-[#181818] text-[#c0c0c0] placeholder-[#4d4d4e] border border-[#4d4d4e] px-4 py-3 text-sm focus:outline-none focus:border-[#c0c0c0] transition-colors duration-300 rounded-lg"
                                />
                            </div>
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                required
                                className="bg-[#181818] text-[#c0c0c0] placeholder-[#4d4d4e] border border-[#4d4d4e] px-4 py-3 text-sm focus:outline-none focus:border-[#c0c0c0] transition-colors duration-300 rounded-lg"
                            />
                            <textarea
                                name="message"
                                placeholder="Message"
                                required
                                rows={8}
                                className="bg-[#181818] text-[#c0c0c0] placeholder-[#4d4d4e] border border-[#4d4d4e] px-4 py-3 text-sm focus:outline-none focus:border-[#c0c0c0] transition-colors duration-300 resize-none rounded-lg"
                            />
                            <button
                                type="submit"
                                className="w-fit border border-[#c0c0c0] text-[#c0c0c0] px-8 py-3 text-sm tracking-widest uppercase hover:bg-[#c0c0c0] hover:text-[#0d0d0d] transition-all duration-300 rounded-lg"
                            >
                                Send
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}