// src/components/Canvas3D.jsx
import React from 'react';
import { motion } from 'framer-motion';
import '../styles/mainaboutme.css';

function Canvas3D() {
  return (
    <div
      className="canvas-wrapper"
      style={{
        position: 'relative',
        width: '100%',
        height: '400px',
        overflow: 'hidden',
      }}
    >
      {/* Background GIF */}
      <img
        src="/images/Coding The Matrix GIF.gif" // ensure this path is correct
        alt="Background"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
        }}
      />

      {/* Foreground Video with animation */}
      <motion.video
        src="/images/0001-0360.mp4" // ensure this path is correct
        autoPlay
        loop
        muted
        playsInline
        initial={{ y: 10 }}
        animate={{ y: 0 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 2,
          ease: "easeInOut",
        }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '200px',
          zIndex: 1,
        }}
      />
    </div>
  );
}

export default Canvas3D;
