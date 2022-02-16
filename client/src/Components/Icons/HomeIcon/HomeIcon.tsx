import React from 'react';
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
      <div>
        <AiFillHome />
      </div>
    </IconContext.Provider>
  );
}
