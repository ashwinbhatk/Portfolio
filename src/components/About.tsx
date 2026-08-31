import { config } from '../config';
import './Section.css';

export const About = () => {
  return (
    <section className="section" id="about">
      <div className="section-container">
        <h2 className="section-title">About</h2>
        <div className="section-content">
          <p className="about-text">{config.about}</p>
        </div>
      </div>
    </section>
  );
};
