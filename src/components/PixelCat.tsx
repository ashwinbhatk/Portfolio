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
          width="48"
          height="48"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          className="pixel-cat"
        >
          <rect x="1" y="0" width="2" height="2" fill="var(--color-accent)" />
          <rect x="13" y="0" width="2" height="2" fill="var(--color-accent)" />
          <rect x="3" y="2" width="10" height="10" fill="var(--color-accent)" />
          <rect x="5" y="5" width="2" height="2" fill="var(--color-text)" />
          <rect x="9" y="5" width="2" height="2" fill="var(--color-text)" />
          <rect x="6" y="8" width="1" height="1" fill="var(--color-text)" />
          <rect x="9" y="8" width="1" height="1" fill="var(--color-text)" />
          <rect x="7" y="8" width="2" height="2" fill="var(--color-text)" />
          <rect x="5" y="12" width="2" height="2" fill="var(--color-accent)" />
          <rect x="9" y="12" width="2" height="2" fill="var(--color-accent)" />
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
