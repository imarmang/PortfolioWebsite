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
import "./sidebar.css";

const navLinks = [
    {href: "/", icon: faHome, label: "HOME"},
    {href: "/about", icon: faUser, label: "ABOUT"},
    {href: "/work", icon: faSuitcase, label: "WORK"},
    {href: "/projects", icon: faFolderOpen, label: "PORTFOLIO"},
    {href: "/contact", icon: faEnvelope, label: "CONTACT"},
];

export default function Sidebar() {
    const [showNav, setShowNav] = useState(false);
    const pathName = usePathname();

    return (
        <>
            {/* Desktop sidebar */}
            <div className="sidebar">
                <Link className="sidebar-logo" href="/">
                    <Image
                        src="/images/A_Sidebar.png"
                        alt="logo"
                        width={55}
                        height={55}
                    />
                    <span className="sidebar-logo-name">Arman G.</span>
                </Link>

                <nav className="sidebar-nav">
                    {navLinks.map(({href, icon, label}) => (
                        <Link
                            key={href}
                            href={href}
                            className={`nav-link ${pathName === href ? "active" : ""}`}
                        >
                            <FontAwesomeIcon icon={icon} className="nav-icon"/>
                            <span className="nav-label">{label}</span>
                        </Link>
                    ))}
                </nav>

                <ul className="sidebar-socials">
                    <li>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/armangasparyan/">
                            <FontAwesomeIcon icon={faLinkedin}/>
                        </a>
                    </li>
                    <li>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/imarmang">
                            <FontAwesomeIcon icon={faGithub}/>
                        </a>
                    </li>
                </ul>
            </div>

            {/* Mobile fullscreen nav */}
            {showNav && (
                <div className="mobile-nav-overlay">
                    <button className="mobile-nav-close" onClick={() => setShowNav(false)}>
                        <FontAwesomeIcon icon={faClose}/>
                    </button>
                    {navLinks.map(({href, icon, label}) => (
                        <Link
                            key={href}
                            href={href}
                            onClick={() => setShowNav(false)}
                            className={`mobile-nav-link ${pathName === href ? "active" : ""}`}
                        >
                            <FontAwesomeIcon icon={icon}/>
                            <span>{label}</span>
                        </Link>
                    ))}
                </div>
            )}

            {/* Mobile top bar */}
            <div className="mobile-topbar">
                <Link href="/" className="mobile-topbar-logo">
                    <Image src="/images/A_Sidebar.png" alt="logo" width={40} height={40}/>
                    <span>Arman G.</span>
                </Link>
                <button className="mobile-menu-btn" onClick={() => setShowNav(true)}>
                    <FontAwesomeIcon icon={faBars}/>
                </button>
            </div>
        </>
    );
}