
import './Footer.css';

export const Footer = () => {
  return (
    <footer>
      <div className="footer-text">
        {Array(50).fill("Sandra Gustafsson · Frontend Developer · ").join(' ')}
      </div>
    </footer>
  );
};
