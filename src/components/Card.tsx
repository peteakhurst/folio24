// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { useRef, useState } from 'react';

export default function Card({ heading, bodyCopy }) {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div className='container'>
      <div
        ref={divRef}
        onMouseMove={handleMouseMove}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className='relative max-w-md px-8 py-16 overflow-hidden border-b-8 border-r-8 shadow-2xl rounded-2xl bg-lightGreen border-coral'
      >
        <div
          className='absolute transition duration-300 opacity-0 pointer-events-none -inset-px'
          style={{
            opacity,
            background: `radial-gradient(300px circle at ${position.x}px ${position.y}px, rgba(192, 85, 179, 0.6), transparent 40%)`,
          }}
        />

        <h2 className='text-lg font-light lg:text-2xl text-oliveGreen'>
          {heading}
          <span className='font-semibold text-oliveGreen'> Pete</span>. I help
          craft digital solutions that matter. Through engaging user
          experiences, I specialise in crafting responsive, dynamic and visually
          appealing websites.
        </h2>
      </div>
      <div
        ref={divRef}
        onMouseMove={handleMouseMove}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className='relative max-w-md px-8 py-16 overflow-hidden border-b-8 border-r-8 shadow-2xl rounded-2xl bg-lightGreen border-coral'
      >
        <div
          className='absolute transition duration-300 opacity-0 pointer-events-none -inset-px'
          style={{
            opacity,
            background: `radial-gradient(300px circle at ${position.x}px ${position.y}px, rgba(192, 85, 179, 0.6), transparent 40%)`,
          }}
        />

        <h2 className='text-lg font-light lg:text-2xl text-oliveGreen'>
          {heading}
          <span className='font-semibold text-oliveGreen'> Pete</span>. I help
          craft digital solutions that matter. Through engaging user
          experiences, I specialise in crafting responsive, dynamic and visually
          appealing websites.
        </h2>
      </div>
    </div>
  );
}
