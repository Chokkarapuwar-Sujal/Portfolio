import { useState, useEffect } from "react";

export default function Loader({ onComplete }) {
  const [fadeOut, setFadeOut] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    // Lock scroll
    document.body.style.overflow = "hidden";

    // Start fade out after 2 seconds
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2000);

    // Remove from DOM entirely
    const removeTimer = setTimeout(() => {
      setRemoved(true);
      document.body.style.overflow = "";
      if (onComplete) onComplete();
    }, 2600); // Wait for fade-out animation

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  if (removed) return null;

  return (
    <div
      className={`loader-overlay${fadeOut ? " fade-out" : ""}`}
      aria-hidden="true"
    >
      {/* 3-Cube Isometric Logo */}
      <div className="loader-logo">
        <svg
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="three-cubes-logo"
        >
          <defs>
            <g 
              id="isometric-cube" 
              fill="var(--bg-primary)" 
              stroke="var(--text-primary)" 
              strokeWidth="2" 
              strokeLinejoin="round"
            >
              {/* Top face */}
              <polygon points="0,-14 12,-7 0,0 -12,-7" />
              {/* Left face */}
              <polygon points="-12,-7 0,0 0,14 -12,7" />
              {/* Right face */}
              <polygon points="0,0 12,-7 12,7 0,14" />
            </g>
          </defs>
          
          <g transform="translate(50, 43)">
            {/* Top Left Cube */}
            <use href="#isometric-cube" x="-12" y="-7" />
            {/* Top Right Cube */}
            <use href="#isometric-cube" x="12" y="-7" />
            {/* Bottom Cube */}
            <use href="#isometric-cube" x="0" y="14" />
          </g>
        </svg>
      </div>

      {/* Signature positioned at the bottom */}
      <div className="loader-signature">
        <span className="sig-name">Sujal</span>
      </div>
    </div>
  );
}
