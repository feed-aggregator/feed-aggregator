import React from 'react';
import { IconContext } from 'react-icons';
import { FaHackerNewsSquare } from 'react-icons/fa';
export default function HackerNewsIcon({ size }: { size: string }) {
  return (
    <IconContext.Provider value={{ color: '#FF6600', size }}>
      <div>
        <FaHackerNewsSquare />
      </div>
    </IconContext.Provider>
  );
}
