import { config } from '../config';
import './Section.css';
import './Interests.css';

export const Interests = () => {
  const [firstLine, secondLine] = config.interests.split('\n');

  return (
    <section className="section section-interests" id="interests">
      <div className="section-container">
        <div className="interests-content">
          <p className="interests-label">{firstLine}</p>
          <p className="interests-topics">{secondLine}</p>
        </div>
      </div>
    </section>
  );
};
