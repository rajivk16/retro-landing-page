import { useState } from 'react';
import { motion } from 'framer-motion';

const sections = ['Home', 'About', 'Features', 'Roadmap', 'Contact'];

const NavigationBar = () => {
  const [active, setActive] = useState<string | null>(null);

  const handleScroll = (section: string) => {
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActive(section);
    }
  };

  return (
    <nav className="fixed top-1/4 right-4 bg-white bg-opacity-10 backdrop-blur-md p-4 rounded-lg shadow-lg">
      <ul className="space-y-4">
        {sections.map(section => (
          <li key={section}>
            <button
              onClick={() => handleScroll(section)}
              className={`text-lg font-retro ${active === section ? 'text-retro-pink' : 'text-white'}`}
            >
              {section}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationBar;
