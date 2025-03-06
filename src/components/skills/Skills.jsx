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
          <p>Typescript</p>
          <p>HTML</p>
          <p>CSS</p>
          <p>React</p>
          <p>React Native</p>
          <p>Tailwind</p>
          <p>Global state management</p>
          <p>Dom manipulation</p>
          <p>Styled components</p>
          <p>Animations</p>
          <p>Tailwind css</p>
          <p>Node.js</p>
          <p>Express</p>
          <p>MongoDB</p>
          <p>Mongoose</p>
          <p>Restful API</p>
          <p>Authenticartion</p>
        </div>
        <div className="skills-column">
          <h3 className="toolbox-heading">Toolbox</h3>
          {/* Tools I use */}
          <p>Command line(terminal)</p>
          <p>VSCode</p>
          <p>Git</p>
          <p>Github</p>
          <p>Expo</p>
          <p>Chrome Dev tools</p>
          <p>Lighthouse</p>
          <p>Postman</p>
          <p>Netlify</p>
          <p>Render</p>
          <p>MongoDB Compass</p>
          <p>MongoDB Atlas</p>
          <p>Firebase</p>
          <p>ESLint</p>
          <p>Figma</p>
          <p>Notion</p>
        </div>
        <div className="skills-column">
          <h3 className="more-heading">More</h3>
          {/* Additional skills or info */}
          <p>UX / UI Design</p>
          <p>Agile methodology</p>
          <p>Mob programming</p>
          <p>Pair programming</p>
          <p>Working fully remote</p>
          <p>Team work</p>
          <p>Web accessibility</p>
          <p>Unit testing</p>
          <p>Design hand-off</p>
        </div>
        <div className="skills-column">
          <h3 className="upcoming-heading">Upcoming</h3>
          {/* Upcoming skills */}
          <p>Python</p>
          <p>Next.js</p>
          <p></p>
        </div>
      </div>
    </div>
  );
});
