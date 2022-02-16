import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
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
  const currThemeColor = isDarkMode() ? themeColor.dark : themeColor.light;
  return (
    <nav className='NavBar-container'>
      <ul>
        <li className='home'>
          <HomeIcon color={currThemeColor} size={iconSize} />
        </li>
        <li>
          <FilterModal />
        </li>
        <li className='theme-toggle'>
          <ThemeToggle
            color={currThemeColor}
            size={iconSize}
            isDarkMode={isDarkMode}
          />
        </li>
        <li className='logout'>
          <Link
            to='/'
            style={{ textDecoration: 'none', color: currThemeColor }}
          >
            Log Out
          </Link>
        </li>
      </ul>
    </nav>
  );
}
