
import './Footer.css';

export const Footer = () => {
  return (
    <footer>
      <div className="footer-text">
        {Array(10).fill("Sandra Gustafsson · Frontend Developer · ").join(' ')}
      </div>
    </footer>
  );
};
