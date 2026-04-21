import React from 'react';

const Hero = () => {
  return (
    <header id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <h1 className="reveal active">Find Your Inner Peace in the <br /><span>Himalayan Sanctuary</span></h1>
        <p className="reveal-delay active">Global leaders in yoga education, delivering authentic Yoga Teacher Trainings and Spiritual Retreats with traditional Gurus in the heart of the mountains.</p>
        <div className="hero-btns reveal-delay-2 active">
          <a href="#training" className="btn btn-primary">Our Programs</a>
          <a href="#about" className="btn btn-secondary">Learn More</a>
        </div>
      </div>
      <div className="scroll-indicator">
        <span>Scroll</span>
        <div className="line"></div>
      </div>
    </header>
  );
};

export default Hero;
