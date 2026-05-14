# Arman Gasparyan's Coding Portfolio

Welcome to my coding portfolio! This web application is built using Next.js with Tailwind CSS styling, showcasing my
skills, projects, and experience as a software engineer. You can check it
out [here!](https://arman-gasparyan.vercel.app/)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [License](#license)

---

## Introduction

This portfolio is a personalized space for me to highlight my expertise, share my projects, and provide information
about my journey as a software engineer. The application offers an interactive and user-friendly experience for visitors
to explore my work and get in touch with me.

---

## Features

- **Responsive Design:** The portfolio is designed to be accessible and visually appealing across various devices and
  screen sizes.
- **Animated Home Page:** An interactive star field animation with orbiting code snippets built on HTML Canvas.
- **Project Showcase:** Displays my projects with cover images, tech stack descriptions, and links to their GitHub
  repositories.
- **Skills & Experience Section:** A dedicated section highlighting my technical skills and professional background.
- **Contact Form:** An interactive contact form powered by EmailJS, allowing visitors to reach out directly.

---

## Installation

To run this portfolio locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/imarmang/PortfolioWebsite.git
   ```
2. Navigate to the project directory:
   ```bash
   cd PortfolioWebsite
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env.local` file in the root directory and add your EmailJS credentials:
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```
6. Open your browser and visit [http://localhost:3000](http://localhost:3000)

---

## Technologies Used

- **Next.js:** A React framework for building fast, production-ready web applications.
- **Tailwind CSS:** A utility-first CSS framework for styling the application.

---

## Project Structure

The project follows the Next.js App Router layout:

- `app/`: Contains all page routes and their associated CSS files.
- `components/`: Reusable React components.
- `public/images/`: Static assets including project cover images.

---

## License

This project is licensed under the [MIT License](https://github.com/imarmang/PortfolioWebsite/blob/main/LICENSE).

---

Thank you for checking out my portfolio! If you have any questions or feedback, feel free to reach out.