import React from "react";
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <span className="section-kicker">04 / SELECTED WORK</span>
        <h1>Projects, not promises.</h1>
        <p className="section-intro">A selection of products and experiments spanning agricultural technology, education and voice-enabled AI.</p>
        <div className="projects-grid">
            <article className="project featured"><div className="project-visual visual-one"><span>01 / AGRITECH</span><strong>FIELD INTELLIGENCE</strong></div><div className="project-copy"><span>TypeScript · IoT concept · Responsive dashboard</span><h2>KhetOS</h2><p>An intelligent crop microclimate monitoring and early-warning system for field-level conditions, crop stress and safer spraying decisions.</p><div className="project-links"><a href="https://ayush14mishra.github.io/KhetOS/" target="_blank" rel="noreferrer">Live demo ↗</a><a href="https://github.com/Ayush14Mishra/KhetOS" target="_blank" rel="noreferrer">Source ↗</a></div></div></article>
            <article className="project"><div className="project-visual visual-two"><span>02 / EDTECH</span><strong>STUDY SMARTER</strong></div><div className="project-copy"><span>React · Tailwind · Node · MongoDB</span><h2>StudyVault</h2><p>A full-stack student resource-sharing platform with uploads, authentication, search, filters and a responsive learning-resource feed.</p><div className="project-links"><a href="https://study-vault-sandy.vercel.app" target="_blank" rel="noreferrer">Live demo ↗</a><a href="https://github.com/Ayush14Mishra/StudyVault" target="_blank" rel="noreferrer">Fork/source ↗</a></div></div></article>
            <article className="project"><div className="project-visual visual-three"><span>03 / VOICE AI</span><strong>SPEAK TO BANK</strong></div><div className="project-copy"><span>Voice interface · AI prototype</span><h2>VoiceBank AI</h2><p>A voice-first banking interface experiment designed to make common financial interactions faster and more conversational.</p><div className="project-links"><a href="https://github.com/Ayush14Mishra/VoiceBank-AI" target="_blank" rel="noreferrer">Source ↗</a></div><div className="project-warning">Make this repository public before sharing the portfolio.</div></div></article>
        </div>
    </div>
    );
}

export default Project;
