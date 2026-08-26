import React from "react";
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <span className="section-kicker">04 / SELECTED WORK</span>
        <h1>Projects, not promises.</h1>
        <p className="section-intro">Original products and a credited learning project spanning agricultural technology, hackathon workflow and education.</p>
        <div className="projects-grid">
            <article className="project featured"><div className="project-visual visual-one"><span>01 / AGRITECH</span><strong>FIELD INTELLIGENCE</strong></div><div className="project-copy"><span>TypeScript · IoT concept · Responsive dashboard</span><h2>KhetOS</h2><p>An intelligent crop microclimate monitoring and early-warning system for field-level conditions, crop stress and safer spraying decisions.</p><div className="project-links"><a href="https://ayush14mishra.github.io/KhetOS/" target="_blank" rel="noreferrer">Live demo ↗</a><a href="https://github.com/Ayush14Mishra/KhetOS" target="_blank" rel="noreferrer">Source ↗</a></div></div></article>
            <article className="project"><div className="project-visual visual-two"><span>02 / HACKATHON TOOL</span><strong>SHIP WITH FOCUS</strong></div><div className="project-copy"><span>React · Vite · Local-first · Accessible UI</span><h2>Odyssey Sprintboard</h2><p>An original frontend-only command center that turns a hackathon brief into scored ideas, a 48-hour plan, an interactive task board and an exportable submission checklist.</p><div className="project-links"><a href="https://ayush14mishra.github.io/Odyssey-Sprintboard/" target="_blank" rel="noreferrer">Live demo ↗</a><a href="https://github.com/Ayush14Mishra/Odyssey-Sprintboard" target="_blank" rel="noreferrer">Source ↗</a></div></div></article>
            <article className="project"><div className="project-visual visual-three"><span>03 / CREDITED LEARNING FORK</span><strong>STUDY & ADAPT</strong></div><div className="project-copy"><span>React · Tailwind · Node · MongoDB</span><h2>StudyVault</h2><p>A public fork used for code reading and full-stack learning. The upstream project and fork relationship remain visible on GitHub; I do not present the original implementation as my own.</p><div className="project-links"><a href="https://study-vault-sandy.vercel.app" target="_blank" rel="noreferrer">Live demo ↗</a><a href="https://github.com/Ayush14Mishra/StudyVault" target="_blank" rel="noreferrer">View credited fork ↗</a></div></div></article>
        </div>
    </div>
    );
}

export default Project;
