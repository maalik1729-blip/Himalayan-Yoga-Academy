import React, { useState } from 'react';

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      alert('Thank you! Your message has been sent to Himalayan Yoga Academy.');
      setLoading(false);
      e.target.reset();
    }, 2000);
  };

  return (
    <section id="contact" className="contact section-padding">
      <div className="container">
        <div className="contact-box glass">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>Ready to start your journey? Contact us for a personalized consultation.</p>
            <div className="info-list">
              <div className="info-item">
                <i className="fas fa-map-marker-alt"></i>
                <p>Raniban Road, Himalayan Sanctuary, 44600</p>
              </div>
              <div className="info-item">
                <i className="fas fa-phone"></i>
                <p>+977 9860831725</p>
              </div>
              <div className="info-item">
                <i className="fas fa-envelope"></i>
                <p>info@himalayanyogacademy.com</p>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <select>
                <option>Interest: 200hr YTT</option>
                <option>Interest: 300hr YTT</option>
                <option>Interest: 500hr YTT</option>
                <option>Interest: Retreat</option>
                <option>Other</option>
              </select>
            </div>
            <div className="form-group">
              <textarea placeholder="Message" rows="4"></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-full" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
