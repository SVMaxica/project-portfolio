import { forwardRef } from 'react';
import './Footer.css';

export const Footer = forwardRef((props, ref) => {
  return (
    <footer>
      <div ref={ref} className="footer-text">
        {Array(100).fill('Sandra Gustafsson · Frontend Developer · ').join(' ')}
      </div>
    </footer>
  );
});
