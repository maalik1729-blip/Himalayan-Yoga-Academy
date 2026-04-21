import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import About from '../components/About';
import Training from '../components/Training';
import Retreats from '../components/Retreats';
import Team from '../components/Team';
import Contact from '../components/Contact';

const Home = () => {
  useEffect(() => {
    // Scroll Reveal implementation
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal, .program-card, .team-card');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <Hero />
      <Stats />
      <About />
      <Training />
      <Retreats />
      <Team />
      <Contact />
    </main>
  );
};

export default Home;
