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
          width="80"
          height="80"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          className="pixel-cat"
        >
          {/* Cat head */}
          <ellipse cx="50" cy="55" rx="28" ry="25" fill="var(--color-accent)" />
          
          {/* Left ear */}
          <path d="M 30 40 Q 25 25 35 32 Q 35 40 30 40 Z" fill="var(--color-accent)" />
          
          {/* Right ear */}
          <path d="M 70 40 Q 75 25 65 32 Q 65 40 70 40 Z" fill="var(--color-accent)" />
          
          {/* Inner left ear */}
          <path d="M 30 38 Q 28 30 33 34 Z" fill="#E8B896" opacity="0.6" />
          
          {/* Inner right ear */}
          <path d="M 70 38 Q 72 30 67 34 Z" fill="#E8B896" opacity="0.6" />
          
          {/* Left eye */}
          <ellipse cx="42" cy="52" rx="3.5" ry="5" fill="var(--color-text)" />
          
          {/* Right eye */}
          <ellipse cx="58" cy="52" rx="3.5" ry="5" fill="var(--color-text)" />
          
          {/* Left eye shine */}
          <ellipse cx="43" cy="50" rx="1.5" ry="2" fill="white" opacity="0.8" />
          
          {/* Right eye shine */}
          <ellipse cx="59" cy="50" rx="1.5" ry="2" fill="white" opacity="0.8" />
          
          {/* Nose */}
          <path d="M 50 58 L 48 62 L 52 62 Z" fill="#8B6742" />
          
          {/* Mouth */}
          <path d="M 50 62 Q 45 65 42 63" stroke="#8B6742" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M 50 62 Q 55 65 58 63" stroke="#8B6742" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          
          {/* Left whiskers */}
          <line x1="25" y1="54" x2="38" y2="54" stroke="var(--color-text)" strokeWidth="1" opacity="0.6" />
          <line x1="25" y1="58" x2="38" y2="57" stroke="var(--color-text)" strokeWidth="1" opacity="0.6" />
          <line x1="25" y1="62" x2="38" y2="60" stroke="var(--color-text)" strokeWidth="1" opacity="0.6" />
          
          {/* Right whiskers */}
          <line x1="75" y1="54" x2="62" y2="54" stroke="var(--color-text)" strokeWidth="1" opacity="0.6" />
          <line x1="75" y1="58" x2="62" y2="57" stroke="var(--color-text)" strokeWidth="1" opacity="0.6" />
          <line x1="75" y1="62" x2="62" y2="60" stroke="var(--color-text)" strokeWidth="1" opacity="0.6" />
          
          {/* Cheeks */}
          <circle cx="35" cy="60" r="4" fill="#D4A574" opacity="0.3" />
          <circle cx="65" cy="60" r="4" fill="#D4A574" opacity="0.3" />
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
