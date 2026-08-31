import { useState } from 'react';
import './PixelCat.css';

export const PixelCat = () => {
  const [message, setMessage] = useState('');

  const handleInteraction = (msg: string) => {
    setMessage(msg);
    setTimeout(() => setMessage(''), 2000);
  };

  return (
    <div className="pixel-cat-container">
      <button
        className="pixel-cat-button"
        onMouseEnter={() => handleInteraction('meow')}
        onClick={() => handleInteraction('purr')}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleInteraction('purr');
          }
        }}
        aria-label="Interactive cat"
        aria-live="polite"
      >
        <svg
          width="64"
          height="64"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          className="pixel-cat"
        >
          {/* Left ear */}
          <path d="M 8 4 L 8 10 L 10 10 L 10 6 L 12 6 L 12 4 Z" fill="var(--color-accent)" />
          {/* Right ear */}
          <path d="M 20 4 L 20 6 L 22 6 L 22 10 L 24 10 L 24 4 Z" fill="var(--color-accent)" />
          {/* Head */}
          <rect x="10" y="8" width="12" height="14" fill="var(--color-accent)" />
          {/* Left eye */}
          <rect x="12" y="12" width="3" height="3" fill="var(--color-text)" />
          {/* Right eye */}
          <rect x="17" y="12" width="3" height="3" fill="var(--color-text)" />
          {/* Nose */}
          <rect x="15" y="17" width="2" height="2" fill="var(--color-text)" />
          {/* Left whisker */}
          <line x1="6" y1="16" x2="10" y2="16" stroke="var(--color-text)" strokeWidth="1" />
          <line x1="6" y1="18" x2="10" y2="18" stroke="var(--color-text)" strokeWidth="1" />
          {/* Right whisker */}
          <line x1="22" y1="16" x2="26" y2="16" stroke="var(--color-text)" strokeWidth="1" />
          <line x1="22" y1="18" x2="26" y2="18" stroke="var(--color-text)" strokeWidth="1" />
          {/* Mouth */}
          <line x1="15" y1="19" x2="14" y2="20" stroke="var(--color-text)" strokeWidth="1" />
          <line x1="17" y1="19" x2="18" y2="20" stroke="var(--color-text)" strokeWidth="1" />
        </svg>
        {message && (
          <span className="pixel-cat-message" role="status">
            {message}
          </span>
        )}
      </button>
    </div>
  );
};
