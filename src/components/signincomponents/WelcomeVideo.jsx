import React, { useState } from 'react';

const WelcomeVideo = () => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = React.createRef();

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play(); // Start playing when mouse enters
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause(); // Pause when mouse leaves
    }
  };

  return (
    <video
      ref={videoRef}
      className="h-full w-full object-cover object-top"
      muted
      loop
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <source src="/videos/Opening.mp4" type="video/mp4" />
    </video>
  );
};

export default WelcomeVideo;

