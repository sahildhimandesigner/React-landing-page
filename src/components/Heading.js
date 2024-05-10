

import React from 'react';

const Heading = ({tag, text, fontSize, className, children }) => {
  const Tag = tag || 'h1'; 
  return (
    <>
      <Tag className={`font-bold ${fontSize} ${className}`}>{children}</Tag>
    </>
  );
};

export default Heading;
