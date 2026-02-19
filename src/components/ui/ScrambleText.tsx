
import React, { useState } from 'react';

interface ScrambleTextProps {
  text: string;
}

const ScrambleText: React.FC<ScrambleTextProps> = ({ text }) => {
  const [displayText, setDisplayText] = useState(text);
  const chars = "!<>-_\\/[]{}—=+*^?#________";
  
  const scramble = () => {
    let iterations = 0;
    const interval = setInterval(() => {
      setDisplayText(text.split("").map((_, index) => {
        if(index < iterations) {
          return text[index];
        }
        return chars[Math.floor(Math.random() * chars.length)]
      }).join(""));
      
      if(iterations >= text.length) clearInterval(interval);
      iterations += 1 / 3;
    }, 30);
  };

  return (
    <span onMouseEnter={scramble} className="cursor-default inline-block">
      {displayText}
    </span>
  );
};

export default ScrambleText;
