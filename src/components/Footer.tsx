import { config } from '../config';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">© 2026 {config.name}</p>
        <div className="footer-mascot">
          <svg
            width="32"
            height="32"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            className="footer-cat"
          >
            <ellipse cx="50" cy="55" rx="22" ry="20" fill="var(--color-accent)" />
            <path d="M 33 43 Q 30 30 37 36 Q 37 43 33 43 Z" fill="var(--color-accent)" />
            <path d="M 67 43 Q 70 30 63 36 Q 63 43 67 43 Z" fill="var(--color-accent)" />
            <ellipse cx="43" cy="52" rx="2.5" ry="4" fill="var(--color-bg)" />
            <ellipse cx="57" cy="52" rx="2.5" ry="4" fill="var(--color-bg)" />
            <path d="M 50 58 L 48 61 L 52 61 Z" fill="var(--color-bg)" opacity="0.7" />
            <path d="M 50 61 Q 46 63 44 61" stroke="var(--color-bg)" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.6" />
            <path d="M 50 61 Q 54 63 56 61" stroke="var(--color-bg)" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.6" />
          </svg>
        </div>
      </div>
    </footer>
  );
};
