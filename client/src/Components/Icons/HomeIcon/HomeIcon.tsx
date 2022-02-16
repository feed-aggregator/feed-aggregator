import React from 'react';
import './HomeIcon.scss';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { IconContext } from 'react-icons';
export default function LightHomeIcon({
  color,
  size,
}: {
  color: string;
  size: string;
}) {
  return (
    <IconContext.Provider value={{ color, size }}>
      <Link to='/'>
        <AiFillHome />
      </Link>
    </IconContext.Provider>
  );
}
