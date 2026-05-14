"use client";

import {useEffect, useState} from "react";
import Image from "next/image";
import AnimatedLetters from "@/components/AnimatedLetters/AnimatedLetters";
import "./portfolio.css";

const projects = [
    {
        cover: "/images/portfolio/transfera.png",
        title: "Transfera",
        description: "React Native · Spring Boot · PostgreSQL · AWS",
        github: "https://github.com/imarmang/Transfera",
        demo: null,
    },
    {
        cover: "/images/portfolio/neuro_snake.png",
        title: "Neuro Snake",
        description: "Python · PyTorch · Pygame",
        github: "https://github.com/imarmang/Neuro_Snake",
        demo: null,
    },
    {
        cover: "/images/portfolio/navigate.png",
        title: "N.A.V.I.G.A.T.E.",
        description: "React · Flask · PostgreSQL",
        github: "https://github.com/imarmang/NAVIGATE",
        demo: null
    }
];

export default function Projects() {
    const [letterClass, setLetterClass] = useState("text-animate");

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass("text-animate-hover");
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="projects-page">

            <h1 className="home-title" style={{color: "#c0c0c0", fontWeight: "bold", marginBottom: "48px"}}>
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={"Portfolio".split("")}
                    idx={15}
                />
            </h1>

            <div
                className="projects-grid"
                style={{animation: "fadeIn 1s forwards", animationDelay: "1.5s", opacity: 0}}
            >
                {projects.map((project, idx) => (
                    <div key={idx} className="image-box">
                        <Image
                            src={project.cover}
                            alt={project.title}
                            fill
                            className="portfolio-image"
                            style={{objectFit: "cover"}}
                        />
                        <div className="content">
                            <p className="card-title">{project.title}</p>
                            <h4 className="card-description">{project.description}</h4>
                            <div className="card-buttons">
                                <a href={project.github} target="_blank" rel="noreferrer" className="card-btn">
                                    View
                                </a>
                                {project.demo && (
                                    <a href={project.demo} target="_blank" rel="noreferrer" className="card-btn">
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}