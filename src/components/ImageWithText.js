import React from 'react';

const ImageWithText = ({ imageSrc, backgroundImage, altText, imgWidth, text, className, imgHeading, children, textClass }) => {

  const style = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <div className={`flex items-center ${className}`} style={style}>
      {imageSrc ? <img src={imageSrc} width={imgWidth} alt={altText}  /> : ''}
      {children}
    </div>
  );
};

export default ImageWithText;
