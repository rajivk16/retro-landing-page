"use client";

import { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 left-4 p-2 bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-lg font-retro text-lg"
    >
      {theme === 'dark' ? <SunIcon className="h-6 w-6 text-white" /> : <MoonIcon className="h-6 w-6 text-black" />}
    </button>
  );
};

export default ThemeToggle;
