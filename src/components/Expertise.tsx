import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faGithub, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Responsive UI",
    "Accessibility"
];

const labelsSecond = [
    "Git",
    "Vite",
    "npm",
    "Figma",
    "Chrome DevTools"
];

const labelsThird = [
    "Python",
    "Machine Learning",
    "LLM Apps",
    "Prompt Design"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <span className="section-kicker">02 / CAPABILITIES</span>
            <h1>Skills I am sharpening.</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Frontend development</h3>
                    <p>Building responsive interfaces with thoughtful component structure, useful interaction states and attention to accessibility.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faGithub} size="3x"/>
                    <h3>Product workflow</h3>
                    <p>Moving from an idea to wireframes, reusable UI, version control, testing and a deployed frontend experience.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>AI exploration</h3>
                    <p>Learning the foundations of machine learning and experimenting with practical AI-assisted development workflows.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;
