/* eslint-disable react/prop-types */
import { forwardRef } from 'react';
import './Tech.css';

export const Tech = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="tech-wrapper">
      <div className="tech-content">
        <h1 className="tech-title">Tech</h1>
        <p className="tech-text">
          HTML, CSS, Tailwind, Flexbox, Grid, Javascript, Typescript, JSX, Json,
          React, React Hooks, React librarys, Web Accessibility, UX/UI Design,
          Rest APIs, Zustand, Node.js, MongoDB, Mongoose, Express.js, Headless
          CMS, Branches, Pair-programming, Github, Figma, Postman, AI, Netlify,
          Developer tools
          <br></br> and much more!
        </p>
      </div>
    </div>
  );
});
