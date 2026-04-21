import React from 'react';

const Training = () => {
  const programs = [
    {
      id: 1,
      title: "200 Hour Yoga Teacher Training",
      desc: "Foundation course covering Hatha, Ashtanga, Anatomy, and Philosophy. Perfect for beginners to intermediate.",
      duration: "22 Days",
      img: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&q=80&w=600",
      features: ["Yoga Alliance Certified", "Sattvic Meals Included"],
      featured: false
    },
    {
      id: 2,
      title: "300 Hour Yoga Teacher Training",
      desc: "Advanced mastery program focusing on deep alignment, pranayama, and teaching methodology for professionals.",
      duration: "24 Days",
      img: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&q=80&w=600",
      features: ["Advanced Himalayan Techniques", "Professional Mentorship"],
      featured: true,
      badge: "Popular"
    },
    {
      id: 3,
      title: "Singing Bowl & Sound Healing",
      desc: "Master the ancient art of sound therapy and vibrational healing using traditional Himalayan singing bowls.",
      duration: "8 Days",
      img: "https://images.unsplash.com/photo-1524230659092-07f99a75c013?auto=format&fit=crop&q=80&w=600",
      features: ["Level 1 & 2 Certification", "Energy Clearing mastery"],
      featured: false
    }
  ];

  return (
    <section id="training" className="training section-padding bg-light">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle">Your Path to Mastery</span>
          <h2 className="section-title">Certification Programs</h2>
          <p>Comprehensive training paths for aspiring teachers and dedicated practitioners.</p>
        </div>
        <div className="training-grid">
          {programs.map((prog) => (
            <div key={prog.id} className={`program-card ${prog.featured ? 'featured' : ''}`}>
              <div className="card-img">
                <img src={prog.img} alt={prog.title} />
                <div className="duration">{prog.duration}</div>
              </div>
              <div className="card-content">
                {prog.badge && <div className="badge">{prog.badge}</div>}
                <h3>{prog.title}</h3>
                <p>{prog.desc}</p>
                <ul className="card-features">
                  {prog.features.map((feat, i) => (
                    <li key={i}><i className="fas fa-certificate"></i> {feat}</li>
                  ))}
                </ul>
                <a href="#contact" className="btn btn-full">Enroll Now</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Training;
