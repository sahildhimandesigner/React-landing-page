import React from 'react';

const Paragraph = ({ fontSize, color, withBreak, children, className }) => {
  return (
    <div className={`text-${fontSize} text-${color} ${className}`}>
      {children}
      {withBreak && <br />}
    </div>
  );
};

export default Paragraph;
