import arrowIcon from '../../assets/Arrow.svg';
import './Arrow.css';

export const Arrow = ({ isAtBottom, onArrowClick, arrowClicked }) => {
  const screenWidth = window.innerWidth;

  let responsiveStyle;

  if (screenWidth >= 1201) {
    // Styles for screens 1201px and larger
    responsiveStyle = {
      bottom: '63%',
    };
  } else if (screenWidth >= 901) {
    // Styles for screens 901px to 1200px
    responsiveStyle = {
      bottom: '45%',
    };
  } else if (screenWidth >= 601) {
    // Styles for screens 601px to 901px
    responsiveStyle = {
      bottom: '55%',
    };
  } else {
    // Styles for screens 375px to 600px
    responsiveStyle = {
      bottom: '5%',
    };
  }

  // Style for the initial state (before click)
  const initialStyle = {
    position: 'fixed',
    bottom: '5%',
    right: '45%',
    zIndex: 1000,
    transform: isAtBottom ? 'rotate(180deg)' : 'none',
    ...responsiveStyle,
  };

  // Style for the fixed state (after click)
  const fixedStyle = {
    position: 'fixed',
    bottom: '5%',
    right: '45%',
    zIndex: 1000,
    transform: isAtBottom ? 'rotate(180deg)' : 'none',
  };

  const turnedStyle = {
    position: 'fixed',
    bottom: '90%',
    right: '45%',
    zIndex: 1000,
    transform: isAtBottom ? 'rotate(180deg)' : 'none',
  };

  // Determine which style to apply
  let appliedStyle;
  if (arrowClicked) {
    appliedStyle = isAtBottom ? turnedStyle : fixedStyle;
  } else {
    appliedStyle = initialStyle;
  }

  // // Determine which style to apply
  // const appliedStyle = arrowClicked ? fixedStyle : initialStyle;

  return (
    <div className="arrow-wrapper" onClick={onArrowClick} style={appliedStyle}>
      <img src={arrowIcon} alt="Arrow" />
    </div>
  );
};
