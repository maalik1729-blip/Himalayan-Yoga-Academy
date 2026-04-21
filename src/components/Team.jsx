import React from 'react';

const Team = () => {
  const gurus = [
    {
      id: 1,
      name: "Yogacharya Rajkumar Karki",
      role: "Lead Instructor & Academy Founder",
      img: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: 2,
      name: "Swami Padmasattva",
      role: "Meditation & Philosophy Head",
      img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: 3,
      name: "Muna Sharma",
      role: "Hatha Yoga Expert",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400"
    }
  ];

  return (
    <section id="team" className="team section-padding bg-dark text-white">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle">The Lineage</span>
          <h2 className="section-title text-white">Our Master Gurus</h2>
          <p>Learn from practitioners who have dedicated their lives to the Himalayan yoga tradition.</p>
        </div>
        <div className="team-grid">
          {gurus.map((guru) => (
            <div key={guru.id} className="team-card">
              <img src={guru.img} alt={guru.name} />
              <div className="team-info">
                <h4>{guru.name}</h4>
                <p>{guru.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
