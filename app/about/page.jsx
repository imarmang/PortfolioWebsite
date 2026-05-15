"use client";

import {useEffect, useState} from "react";
import AnimatedLetters from "@/components/AnimatedLetters/AnimatedLetters";
import "./about.css";

export default function About() {
    const [letterClass, setLetterClass] = useState("text-animate");

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass("text-animate-hover");
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="about-page">

            {/* Left side */}
            <div className="about-left" style={{animation: "fadeIn 1s forwards", opacity: 0}}>
                <h1 className="home-title" style={{color: "#c0c0c0", fontWeight: "bold", marginBottom: "32px"}}>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"About Me".split("")}
                        idx={1}
                    />
                </h1>

                <p className="about-bio" style={{animation: "fadeIn 1s forwards", animationDelay: "0.3s", opacity: 0}}>
                    I&#39;m a Software Engineer and recent Computer Science & Mathematics
                    graduate from Nova Southeastern University, where I graduated with
                    honors. I&#39;m passionate about building scalable backend systems and
                    full-stack applications that solve real-world problems.
                </p>

                <a style={{animation: "fadeIn 1s forwards", animationDelay: "0.6s", opacity: 0}}
                   href="/Arman_Gasparyan_Resume.pdf"
                   target="_blank"
                   rel="noreferrer"
                   className="about-resume-btn"
                >
                    Download Resume
                </a>

                {/* Awards */}
                <div className="about-section"
                     style={{animation: "fadeIn 1s forwards", animationDelay: "0.9s", opacity: 0}}> {/* Awards */}
                    <h2 className="about-section-title">Awards & Recognition</h2>
                    <ul className="about-awards">
                        <li>🎓 Honors in Computer Science — Nova Southeastern University</li>
                        <li>🏆 Outstanding Student Award — Nova Southeastern University</li>
                        <li>🎓 Valedictorian — Florida Preparatory Academy, Class of 2022</li>
                    </ul>
                </div>

                {/* Certifications */}
                <div className="about-section" style={{
                    animation: "fadeIn 1s forwards",
                    animationDelay: "1.2s",
                    opacity: 0
                }}>
                    <h2 className="about-section-title">Certifications</h2>
                    <p className="about-placeholder">Coming soon...</p>
                </div>
            </div>

            {/* Right side - Skills */}
            <div className="about-right" style={{animation: "fadeIn 1s forwards", animationDelay: "0.5s", opacity: 0}}>
                <div className="about-section">
                    <h2 className="about-section-title">Languages</h2>
                    <div className="skills-grid">
                        <span className="skill-tag">Java</span>
                        <span className="skill-tag">TypeScript</span>
                        <span className="skill-tag">JavaScript</span>
                        <span className="skill-tag">Python</span>
                        <span className="skill-tag">SQL</span>
                        <span className="skill-tag">C#</span>
                        <span className="skill-tag">C++</span>
                    </div>
                </div>

                <div className="about-section">
                    <h2 className="about-section-title">Frameworks & Libraries</h2>
                    <div className="skills-grid">
                        <span className="skill-tag">Spring Boot</span>
                        <span className="skill-tag">React Native</span>
                        <span className="skill-tag">React</span>
                        <span className="skill-tag">Flask</span>
                        <span className="skill-tag">NumPy</span>
                        <span className="skill-tag">PyTorch</span>
                        <span className="skill-tag">Pandas</span>
                    </div>
                </div>

                <div className="about-section">
                    <h2 className="about-section-title">Databases</h2>
                    <div className="skills-grid">
                        <span className="skill-tag">PostgreSQL</span>
                        <span className="skill-tag">Firestore</span>
                        <span className="skill-tag">MongoDB</span>
                    </div>
                </div>

                <div className="about-section">
                    <h2 className="about-section-title">Cloud & DevOps</h2>
                    <div className="skills-grid">
                        <span className="skill-tag">AWS</span>
                        <span className="skill-tag">Docker</span>
                        <span className="skill-tag">Git</span>
                        <span className="skill-tag">GitHub Actions</span>
                    </div>
                </div>
            </div>
        </div>
    );
}