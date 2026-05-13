"use client";

import {useEffect, useRef, useState} from "react";
import AnimatedLetters from "@/components/AnimatedLetters/AnimatedLetters";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";
import "./contact.css";

export default function Contact() {
    const [letterClass, setLetterClass] = useState("text-animate");
    const refForm = useRef();

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass("text-animate-hover");
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                refForm.current,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    alert("Message successfully sent!");
                    window.location.reload(false);
                },
                () => {
                    alert("Failed to send the message, please try again.");
                }
            );
    };

    return (
        <div className="contact-page">
            <div className="contact-inner">

                <h1 className="home-title" style={{color: "#c0c0c0", fontWeight: "bold", marginBottom: "40px"}}>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Contact me".split("")}
                        idx={15}
                    />
                </h1>

                <div className="contact-columns">

                    {/* Left */}
                    <div className="contact-left">
                        <p
                            className="contact-description"
                            style={{animation: "fadeIn 1s forwards", animationDelay: "1.5s", opacity: 0}}
                        >
                            Thank you for your interest in getting in touch! I value open
                            communication and welcome any inquiries, feedback, or collaboration
                            opportunities. Please don&apos;t hesitate to get in touch with me
                            by filling out the contact form.
                        </p>
                        <div
                            className="contact-socials"
                            style={{animation: "fadeIn 1s forwards", animationDelay: "1.8s", opacity: 0}}
                        >
                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/armangasparyan/">
                                <FontAwesomeIcon icon={faLinkedin}/>
                            </a>
                            <a target="_blank" rel="noreferrer" href="mailto:agasparyan873@gmail.com">
                                <FontAwesomeIcon icon={faEnvelope}/>
                            </a>
                        </div>
                    </div>

                    {/* Right */}
                    <div className="contact-right">
                        <form ref={refForm} onSubmit={sendEmail} className="contact-form">
                            <div
                                className="contact-form-row"
                                style={{animation: "fadeIn 1s forwards", animationDelay: "1.5s", opacity: 0}}
                            >
                                <input type="text" name="from_name" placeholder="Name" required/>
                                <input type="email" name="user_email" placeholder="Email" required/>
                            </div>
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                required
                                style={{animation: "fadeIn 1s forwards", animationDelay: "1.8s", opacity: 0}}
                            />
                            <textarea
                                name="message"
                                placeholder="Message"
                                required
                                rows={6}
                                style={{animation: "fadeIn 1s forwards", animationDelay: "2.1s", opacity: 0}}
                            />
                            <button
                                type="submit"
                                className="contact-submit-btn"
                                style={{animation: "fadeIn 1s forwards", animationDelay: "2.4s", opacity: 0}}
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}