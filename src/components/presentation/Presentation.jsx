import Arrow from '../../assets/Arrow.png';
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
            <p className='presentation-text'>Sandra, a Frontend Developer, excels in problem-solving and streamlining tasks...iuwebfiwbf
            piwla
            bgpwia öbgåowöab goåiwöbgvoiwh gboiwö gbigbo öwbugh novyv ghnwgh nslyvto qtilyt esytt oymtm 8yt</p>
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
              <p className='presentation-text'>Sandra, a Frontend Developer, excels in problem-solving and streamlining tasks...iuwebfiwbf
            piwla
            bgpwia öbgåowöab goåiwöbgvoiwh gboiwö gbigbo öwbugh novyv ghnwgh nslyvto qtilyt esytt oymtm 8yt</p>
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