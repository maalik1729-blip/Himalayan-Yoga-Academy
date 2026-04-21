import React from 'react';

const About = () => {
  return (
    <section id="about" className="about section-padding">
      <div className="container grid-2">
        <div className="about-image">
          <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200" alt="Yoga Practice" className="img-responsive rounded-lg shadow-xl" />
          <div className="experience-badge">
            <span>15+</span>
            <p>Years</p>
          </div>
        </div>
        <div className="about-text">
          <span className="section-subtitle">Since 2009</span>
          <h2 className="section-title">Rooted in Tradition, <br />Evolving with Mastery</h2>
          <p>Located in the majestic foothills of the Himalayan Mountains, our pioneering school of Yoga takes a holistic approach to providing you with the best learning environment for your transformation. </p>
          <p>Registered with the Yoga Alliance USA, we create bespoke training programs specializing in Hatha Yoga, Ashtanga Vinyasa, and Meditation. Our academy is a sanctuary for those seeking a respite from modern life.</p>
          <ul className="about-list">
            <li><i className="fas fa-check-circle"></i> Certified Yoga Alliance Teacher Training</li>
            <li><i className="fas fa-check-circle"></i> Traditional Hatha & Ashtanga Lineage</li>
            <li><i className="fas fa-check-circle"></i> Holistic Living & Detox Programs</li>
          </ul>
          <a href="#contact" className="btn btn-outline">Consult Our Gurus</a>
        </div>
      </div>
    </section>
  );
};

export default About;
