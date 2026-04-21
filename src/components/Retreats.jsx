import React from 'react';

const Retreats = () => {
  return (
    <section id="retreats" className="retreats section-padding">
      <div className="container grid-2">
        <div className="retreat-content">
          <span className="section-subtitle">Pause & Reconnect</span>
          <h2 className="section-title">Spiritual Retreats</h2>
          <p>Escape the noise and immerse yourself in a holistic sanctuary designed for rejuvenation and self-discovery.</p>
          <div className="retreat-highlights">
            <div className="highlight-item">
              <i className="fas fa-leaf"></i>
              <div>
                <h4>Nature Immersion</h4>
                <p>Daily sessions in breathtaking highland settings.</p>
              </div>
            </div>
            <div className="highlight-item">
              <i className="fas fa-om"></i>
              <div>
                <h4>Spiritual Growth</h4>
                <p>Satsangs and guided meditation with masters.</p>
              </div>
            </div>
          </div>
          <a href="#contact" className="btn btn-primary">Explore Packages</a>
        </div>
        <div className="retreat-gallery">
          <img src="https://images.unsplash.com/photo-1447452001602-7090c7ab2db3?auto=format&fit=crop&q=80&w=800" alt="Retreat" className="rounded-lg shadow-2xl" />
        </div>
      </div>
    </section>
  );
};

export default Retreats;
