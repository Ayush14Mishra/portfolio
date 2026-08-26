import React from "react";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="content">
          <span className="eyebrow">FRONTEND DEVELOPER · AI BUILDER</span>
          <h1>Ayush<br/><span>Mishra.</span></h1>
          <p>I turn ambitious ideas into clear, responsive and engaging digital experiences.</p>
          <div className="hero-actions">
            <a className="primary-action" href="#projects">Explore my work <ArrowOutwardIcon/></a>
            <a className="secondary-action" href="#contact">Let's connect</a>
          </div>
          <div className="availability"><span></span> Open to frontend opportunities and hackathons</div>
        </div>
        <div className="hero-mark" aria-hidden="true">A<span>/</span>M</div>
      </div>
    </div>
  );
}

export default Main;
