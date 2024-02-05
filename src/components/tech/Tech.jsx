/* eslint-disable react/prop-types */
import { forwardRef } from 'react';
import './Tech.css';

export const Tech = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="tech-wrapper">
      <div className="tech-content">
        <h1 className="tech-title">Tech</h1>
        <p className="tech-text">
          HTML, CSS, Flexbox, Grid, Javascript, JSX, React, React Hooks, React
          librarys, Web Accessibility, APIs, Zustand, json, Node.js, MongoDB,
          Mongoose, Express.js, Branches, Pair-programming, Github, Figma,
          Netlify, Developer tools
        </p>
      </div>
    </div>
  );
});
