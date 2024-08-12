import { Projects } from './components/projects/Projects';
import { Presentation } from './components/presentation/Presentation';
import { Tech } from './components/tech/Tech';
import { Articles } from './components/articles/Articles';
import { Skills } from './components/skills/Skills';
import { Contact } from './components/contact/Contact';
import { Footer } from './components/footer/Footer';
import { Arrow } from './components/Arrow/Arrow';
import './App.css';
import { useState, useEffect, useRef } from 'react';

export const App = () => {
  //States
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [arrowClicked, setArrowClicked] = useState(false);

  // Handle arrow click
  const handleArrowClick = () => {
    if (!arrowClicked) {
      setArrowClicked(true);
    }

    if (isAtBottom) {
      // Scroll upwards logic
      if (currentIndex > 0) {
        setCurrentIndex((prevIndex) => prevIndex - 1);
      }
    } else {
      // Scroll downwards logic
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  // refs for each component
  const refPresentation = useRef(null);
  const refTech = useRef(null);
  const refProjects = useRef(null);
  const refArticles = useRef(null);
  const refSkills = useRef(null);
  const refContact = useRef(null);
  const refFooter = useRef(null);

  // Scrolling logic
  useEffect(() => {
    const components = [
      refPresentation,
      refTech,
      refProjects,
      refArticles,
      refSkills,
      refContact,
      refFooter,
    ];

    if (components[currentIndex] && components[currentIndex].current) {
      components[currentIndex].current.scrollIntoView({
        behavior: 'smooth', // Smooth scroll
        block: 'start', // Scroll alignment: 'start', 'center', 'end', 'nearest'
      });
    }
  }, [currentIndex]);

  // Detect when user is at bottom of page
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setIsAtBottom(true);
      } else if (currentIndex === 0) {
        setIsAtBottom(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentIndex]);

  return (
    <div className="app-wrapper">
      <Presentation
        ref={refPresentation}
        onArrowClick={handleArrowClick}
        isAtBottom={isAtBottom}
        arrowClicked={arrowClicked}
      />
      <Tech ref={refTech} />
      <Projects ref={refProjects} />
      <Articles ref={refArticles} />
      <Skills ref={refSkills} />
      <Contact ref={refContact} />
      <Footer ref={refFooter} />
      {/* <Arrow
        onArrowClick={handleArrowClick}
        isAtBottom={isAtBottom}
        arrowClicked={arrowClicked}
      /> */}
    </div>
  );
};
