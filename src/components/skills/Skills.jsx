import './Skills.css';
import { forwardRef } from 'react';

export const Skills = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="skills-wrapper">
      <h1>Skills</h1>
      <div className="skills-grid">
        <div className="skills-column">
          <h3 className="code-heading">Code</h3>
          {/* My skills */}
          <p>JavaScript</p>
          <p>HTML</p>
          <p>CSS</p>
          <p>React</p>
          <p>React Hooks</p>
          <p>Zustand</p>
          <p>Node.js</p>
          <p>Web accessibility</p>
        </div>
        <div className="skills-column">
          <h3 className="toolbox-heading">Toolbox</h3>
          {/* Tools I use */}
          <p>VSCode</p>
          <p>Github</p>
          <p>Lighthouse</p>
          <p>Postman</p>
          <p>Netlify</p>
          <p>Figma</p>
          <p>Notion</p>
          <p>Developer tools</p>
        </div>
        <div className="skills-column">
          <h3 className="upcoming-heading">Upcoming</h3>
          {/* Upcoming skills */}
          <p>Python</p>
          <p>TypeScript</p>
          <p>Redux</p>
          <p>WebAssembly</p>
          <p></p>
        </div>
        <div className="skills-column">
          <h3 className="more-heading">More</h3>
          {/* Additional skills or info */}
          <p>API:s</p>
          <p>Vite</p>
          <p></p>
          <p></p>
          <p></p>
        </div>
      </div>
    </div>
  );
});
