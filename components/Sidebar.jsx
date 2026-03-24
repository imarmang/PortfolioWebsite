"use client";

import Link from "next/link";
import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {
    faBars,
    faClose,
    faEnvelope,
    faFolderOpen,
    faHome,
    faSuitcase,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import {usePathname} from "next/navigation";

const navLinks = [
    {
        href: "/",
        icon: faHome,
        label: "HOME",
        iconSize: "lg",
    },

    {
        href: "/about",
        icon: faUser,
        label: "ABOUT",
        iconSize: "lg",
    },

    {
        href: "/work",
        icon: faSuitcase,
        label: "WORK",
        iconSize: "lg",
    },
    {
        href: "/projects",
        icon: faFolderOpen,
        label: "PORTFOLIO",
        iconSize: "lg",
    },

    {
        href: "/contact",
        icon: faEnvelope,
        label: "CONTACT",
        iconSize: "lg",
    },
];

export default function Sidebar() {
    // FOR THE MOBILE VERSION
    const [showNav, setShowNav] = useState();
    const pathName = usePathname();

    return (
        <>
            <div
                className="fixed top-0 left-0 h-full w-[75px] bg-[#181818] z-50 flex flex-col items-center justify-center max-[900px]:hidden">
                {/* Logo and name */}
                <Link
                    className="absolute top-4 flex flex-col items-start w-full px-1"
                    href="/"
                >
                    <Image
                        src="/images/A_Sidebar.png"
                        alt="logo"
                        width={55}
                        height={55}
                        className="!w-[95px] h-auto -ml-2"
                    />
                    <span className="text-[#d4d4d4] text-[12px] font-bold tracking-wider mt-1 w-full text-center">
            Arman G.
          </span>
                </Link>

                {/* Desktop nav */}
                <nav className="flex flex-col items-center w-full">
                    {navLinks.map(({href, icon, label, iconSize}) => (
                        <Link
                            key={href}
                            href={href}
                            className="group relative flex items-center justify-center w-full h-[51px] text-[22px] text-[#4d4d4e] no-underline"
                        >
                            <FontAwesomeIcon
                                icon={icon}
                                size={iconSize}
                                className={`transition-all duration-300 group-hover:opacity-0 ${pathName === href ? "text-[#c0c0c0]" : "text-[#4d4d4e]"}`}
                            />
                            <span
                                className="absolute text-[9px] tracking-[2px] text-[#c0c0c0] opacity-0 group-hover:opacity-100 transition-all duration-300">
                {label}
              </span>
                        </Link>
                    ))}
                </nav>

                <ul className="fixed bottom-5 flex flex-col items-center gap-3">
                    <li>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.linkedin.com/in/armangasparyan/"
                        >
                            <FontAwesomeIcon
                                icon={faLinkedin}
                                className="text-[#4d4d4e] w-4 h-4 hover:text-[#c0c0c0]"
                            />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/imarmang">
                            <FontAwesomeIcon
                                icon={faGithub}
                                className="text-[#4d4d4e] w-4 h-4 hover:text-[#c0c0c0]"
                            />
                        </a>
                    </li>
                </ul>
            </div>

            {/* Mobile fullscreen nav - only renders when showNav is true */}
            {showNav && (
                <div className="fixed inset-0 bg-[#181818] z-100 flex flex-col items-center justify-center gap-8">
                    {/* Close button */}
                    <button
                        className="absolute top-4 right-4 text-[#c0c0c0] text-4xl bg-transparent border-none cursor-pointer"
                        onClick={() => setShowNav(false)}
                    >
                        <FontAwesomeIcon icon={faClose}/>
                    </button>
                    {navLinks.map(({href, icon, label}) => (
                        <Link
                            key={href}
                            href={href}
                            onClick={() => setShowNav(false)}
                            className={`flex items-center gap-4 text-2xl no-underline ${
                                pathName === href
                                    ? "text-[#c0c0c0]"
                                    : "text-[#4d4d4e] hover:text-[#c0c0c0]"
                            }`}
                        >
                            <FontAwesomeIcon icon={icon}/>
                            <span className="text-sm tracking-[2px]">{label}</span>
                        </Link>
                    ))}
                </div>
            )}

            {/* 3. Mobile top bar - OUTSIDE showNav, always visible on mobile */}
            <div
                className="hidden max-[900px]:flex fixed top-0 left-0 w-full h-[60px] bg-[#181818] z-40 items-center justify-between px-4">
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/images/A_Sidebar.png"
                        alt="logo"
                        width={40}
                        height={40}
                        className="h-auto"
                    />
                    <span className="text-[#d4d4d4] text-[12px] font-bold tracking-wider">
            Arman G.
          </span>
                </Link>
                <button
                    className="text-[#c0c0c0] text-3xl bg-transparent border-none cursor-pointer items-center"
                    onClick={() => setShowNav(true)}
                >
                    <FontAwesomeIcon icon={faBars} className="text-xl"/>
                </button>
            </div>
        </>
    );
}
