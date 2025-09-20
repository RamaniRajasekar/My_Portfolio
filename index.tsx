import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
    const [activeLink, setActiveLink] = useState('home');

    useEffect(() => {
        const sections = document.querySelectorAll('section[id]');
        
        const observerOptions = {
            root: null,
            rootMargin: '-80px 0px -50% 0px',
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveLink(entry.target.id);
                }
            });
        }, observerOptions);

        sections.forEach(section => {
            observer.observe(section);
        });

        return () => {
            sections.forEach(section => {
                observer.unobserve(section);
            });
        };
    }, []);

    return (
        <>
            <Header activeLink={activeLink} />
            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </>
    );
};

const Header = ({ activeLink }) => (
    <header>
        <div className="container">
            <a href="#home" className="logo">Ramani R</a>
            <nav>
                <ul className="nav-links">
                    <li><a href="#home" className={activeLink === 'home' ? 'active' : ''}>Home</a></li>
                    <li><a href="#about" className={activeLink === 'about' ? 'active' : ''}>About</a></li>
                    <li><a href="#skills" className={activeLink === 'skills' ? 'active' : ''}>Skills</a></li>
                    <li><a href="#projects" className={activeLink === 'projects' ? 'active' : ''}>Projects</a></li>
                    <li><a href="#contact" className={activeLink === 'contact' ? 'active' : ''}>Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>
);

const Hero = () => (
    <section id="home">
        <div className="container">
            <div className="hero-content">
                <div className="hero-text">
                    <h1>Ramani R</h1>
                    <p className="tagline">Front-End Developer | AI & ML Enthusiast</p>
                    <a href="#projects" className="btn btn-primary">View My Work</a>
                </div>
                <div className="hero-photo">
                    <div className="photo-placeholder" role="img" aria-label="Ramani R professional photo placeholder"></div>
                </div>
            </div>
        </div>
    </section>
);

const About = () => (
    <section id="about">
        <div className="container">
            <h2 className="section-title">About Me</h2>
            <div className="about-grid">
                <div className="about-card">
                    <h3>Education</h3>
                    <p>Bachelor of Science in Computer Science, Anytown University, 2020-2024. Focused on software development, data structures, and algorithms.</p>
                </div>
                <div className="about-card">
                    <h3>Certifications</h3>
                    <p>Certified in various technologies including cloud computing from AWS and machine learning specialization from Coursera. Always learning and expanding my skillset.</p>
                </div>
                <div className="about-card">
                    <h3>Career Objective</h3>
                    <p>To leverage my skills in front-end development and my passion for AI/ML to create innovative, user-centric solutions that solve complex problems and deliver exceptional digital experiences.</p>
                </div>
            </div>
        </div>
    </section>
);

const skillsData = [
    { name: 'Front-End Development', level: '90%' },
    { name: 'Python', level: '85%' },
    { name: 'Django', level: '75%' },
    { name: 'Data Analytics', level: '80%' },
    { name: 'Power BI', level: '88%' },
    { name: 'Excel', level: '95%' },
];

const Skills = () => (
    <section id="skills">
        <div className="container">
            <h2 className="section-title">Skills</h2>
            <div className="skills-grid">
                {skillsData.map(skill => (
                    <div className="skill-item" key={skill.name}>
                        <h3>{skill.name}</h3>
                        <div className="skill-bar">
                            <div className="skill-level" style={{ width: skill.level }}></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const projectsData = [
    { title: 'Fake News Detection', description: 'Developed a machine learning model to classify news articles as real or fake with high accuracy, using NLP techniques.' },
    { title: 'YOLO Object Detection', description: 'Implemented a real-time object detection system using the YOLO (You Only Look Once) algorithm to identify and locate objects in images and videos.' },
    { title: 'Privacy Protection in Online Networks', description: 'Researched and developed algorithms to enhance user privacy in social networks by anonymizing data and preventing information leakage.' },
];

const Projects = () => (
    <section id="projects">
        <div className="container">
            <h2 className="section-title">Projects</h2>
            <div className="projects-grid">
                {projectsData.map(project => (
                    <div className="project-card" key={project.title}>
                        <div className="project-card-content">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const Contact = () => (
    <section id="contact">
        <div className="container">
            <h2 className="section-title">Get In Touch</h2>
            <p>I'm currently open to new opportunities and collaborations. Feel free to reach out to me via email or connect with me on LinkedIn.</p>
            <div className="contact-links">
                <a href="mailto:ramani.r@example.com" className="btn contact-btn">Email Me</a>
                <a href="tel:+1234567890" className="btn contact-btn">Call Me</a>
                <a href="https://linkedin.com/in/ramani-r" target="_blank" rel="noopener noreferrer" className="btn contact-btn">LinkedIn</a>
            </div>
        </div>
    </section>
);

const Footer = () => (
    <footer>
        <p>&copy; {new Date().getFullYear()} Ramani R. All Rights Reserved.</p>
    </footer>
);

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);