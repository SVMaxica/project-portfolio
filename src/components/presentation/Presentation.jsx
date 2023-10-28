import Arrow from '../../assets/Arrow.svg';
import './Presentation.css';
import { useState, useEffect } from 'react';

export const Presentation = () => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div className='presentation-wrapper'>
      <div className='presentation'>
        {windowWidth <= 600 ? (
          // For screens 600px and under
          <>
            <img src="images/profilimg.jpeg" alt="image of Sandra" className='profile-image' />
            <div className='presentation-titles-container'>
              <h3>Hi, I'm Sandra Gustafsson</h3>
              <h1 className='presentation-bigtitle'>Frontend Developer</h1>
            </div>
            <p className='presentation-text'>My strengths lie in problem-solving and creativity. I'm passionate about challenging myself, continuously learning, and adapting to new scenarios. Known for my reliability, I consistently meet commitments with dedication. Driven by optimization, I always seek to make processes more effective. I'm eager to contribute and grow with our collaborations.</p>
            <div className='arrow-wrapper'>
              <img src={Arrow} alt='Arrow pointing down'></img>
            </div>
          </>
        ) : (
          // For screens larger than 600px
          <>
              <div className='presentation-titles-container'>
                <h3>Hi, I'm Sandra Gustafsson</h3>
                <h1>Frontend Developer</h1>
              </div>
            <div className='presentation-content'>
            <img src="images/profilimg.jpeg" alt="image of Sandra" className='profile-image' />
              <p className='presentation-text'>My strengths lie in problem-solving and creativity. I'm passionate about challenging myself, continuously learning, and adapting to new scenarios. Known for my reliability, I consistently meet commitments with dedication. Driven by optimization, I always seek to make processes more effective. I'm eager to contribute and grow with our collaborations.</p>
            </div>
            <div className='arrow-wrapper'>
              <img src={Arrow} alt='Arrow pointing down'></img>
            </div>
          </>
        )}
      </div>
    </div>
  );
};