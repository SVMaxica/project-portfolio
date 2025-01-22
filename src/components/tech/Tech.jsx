/* eslint-disable react/prop-types */
// import { forwardRef } from 'react';
// import './Tech.css';

// export const Tech = forwardRef((props, ref) => {
//   return (
//     <div ref={ref} className="tech-wrapper">
//       <div className="tech-content">
//         <h1 className="tech-title">Tech</h1>
//         <p className="tech-text">
//           HTML, CSS, Tailwind, Flexbox, Grid, Javascript, Typescript, JSX, Json,
//           React, React Native, React Hooks, React librarys, Web Accessibility, UX/UI Design,
//           Rest APIs, Zustand, Node.js, MongoDB, Mongoose, Express.js, Headless
//           CMS, Branches, Pair-programming, Github, Figma, Postman, AI, Netlify,
//           Developer tools
//           <br></br> and much more!
//         </p>
//       </div>
//     </div>
//   );
// });

import { forwardRef, useState, useEffect } from 'react';
import './Tech.css';

export const Tech = forwardRef((props, ref) => {
  const text =
    'HTML, CSS, Tailwind, Flexbox, Grid, Javascript, Typescript, JSX, Json, React, React Native, React Hooks, React librarys, Web Accessibility, UX/UI Design, Rest APIs, Zustand, Node.js, MongoDB, Mongoose, Express.js, Headless CMS, Branches, Pair-programming, Github, Figma, Postman, AI, Netlify, Developer tools and much more!';

  const words = text.split(', ');
  const colors = ['pink', 'yellow', 'blue'];

  const [highlightedWords, setHighlightedWords] = useState([
    { index: null, color: 'pink' },
    { index: null, color: 'yellow' },
    { index: null, color: 'blue' },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightedWords((prev) => {
        // Ta bort det äldsta markerade ordet
        const nextHighlightedWords = [...prev];
        const removed = nextHighlightedWords.shift();

        // Välj ett nytt slumpmässigt ord
        const excludedIndexes = nextHighlightedWords.map((item) => item.index);
        let randomIndex;
        do {
          randomIndex = Math.floor(Math.random() * words.length);
        } while (excludedIndexes.includes(randomIndex));

        // Lägg till det nya markerade ordet med samma färg som det som togs bort
        if (removed) {
          nextHighlightedWords.push({
            index: randomIndex,
            color: removed.color,
          });
        }

        return nextHighlightedWords;
      });
    }, 2500); // Byt ut ett ord var 4:e sekund

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div ref={ref} className="tech-wrapper">
      <div className="tech-content">
        <h1 className="tech-title">Tech</h1>
        <p className="tech-text">
          {words.map((word, index) => {
            const highlight = highlightedWords.find(
              (item) => item.index === index
            );
            const colorClass = highlight
              ? `highlighted-${highlight.color}`
              : '';

            return (
              <span key={index} className={colorClass ? colorClass : ''}>
                {word}
                {index < words.length - 1 && ', '}
              </span>
            );
          })}
        </p>
      </div>
    </div>
  );
});
