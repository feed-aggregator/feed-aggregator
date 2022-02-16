import React, { useContext } from 'react';
import './ThemeToggle.scss';
import { MdDarkMode } from 'react-icons/md';
import { IconContext } from 'react-icons';
import { ThemeContext } from '../../../Theme/ThemeContext';
export default function ThemeToggle({
  color,
  size,
  isDarkMode,
}: {
  color: string;
  size: string;
  isDarkMode: () => boolean;
}) {
  const { setTheme } = useContext(ThemeContext);
  return (
    <IconContext.Provider value={{ color, size }}>
      <div>
        <MdDarkMode onClick={() => setTheme(isDarkMode() ? 'light' : 'dark')} />
      </div>
    </IconContext.Provider>
  );
}
