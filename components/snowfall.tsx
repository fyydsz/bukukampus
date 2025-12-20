"use client";
import React from "react";
import Snowfall from "react-snowfall";

interface SnowfallWrapperProps {
  children: React.ReactNode;
}

const SnowfallWrapper: React.FC<SnowfallWrapperProps> = ({ children }) => {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      {children}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          pointerEvents: "none",
          zIndex: 9999,
        }}
      >
        <Snowfall snowflakeCount={75} />
      </div>
    </div>
  );
};

export default SnowfallWrapper;
