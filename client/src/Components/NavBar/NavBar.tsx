import React, { useState, useEffect, useContext } from 'react';
import './NavBar.scss';
import HomeIcon from '../Icons/HomeIcon/HomeIcon';
import ThemeToggle from '../Icons/ThemeToggle/ThemeToggle';
import { ThemeContext } from '../../Theme/ThemeContext';
import FilterModal from '../FilterModal/FilterModal';
export default function NavBar() {
  const iconSize = '1.5em';
  const themeColor = { light: '#909aa3', dark: '#f5f6f7' };
  const { theme } = useContext(ThemeContext);
  const isDarkMode = () => theme === 'dark';
  return (
    <nav className='NavBar-container'>
      <ul>
        <li className='home'>
          <HomeIcon
            color={isDarkMode() ? themeColor.dark : themeColor.light}
            size={iconSize}
          />
        </li>
        <li>
          <FilterModal />
        </li>
        <li className='theme-toggle'>
          <ThemeToggle
            color={isDarkMode() ? themeColor.dark : themeColor.light}
            size={iconSize}
            isDarkMode={isDarkMode}
          />
        </li>
        <li className='logout'>Log out</li>
      </ul>
    </nav>
  );
}
