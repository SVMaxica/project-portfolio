/* eslint-disable react/prop-types */
import './Presentation.css';

export const Presentation = () => {
  return (
    <div className='presentation-wrapper'>
    <div className='presentation'>
      <div className='presentation-titles-container'>
        <h3>Hi, I'm Sandra Gustafsson</h3>
        <h1 className='presentation-bigtitle'>Frontend Developer</h1>
        </div>
        <div className="profile-section">
            <img 
            src="images/profilimg.jpeg" 
            alt="image of Sandra" 
            className='profile-image' />
            <p className='presentation-text'>Sandra, a Frontend Developer, excels in problem-solving and streamlining tasks. Her drive to make processes efficient is matched by her goal-oriented approach. With each project, she seeks perfection and effectiveness. Passionate about continuous growth, she embraces challenges, always eager to learn, adapt, and set higher standards for herself.</p>
        </div>
    </div>
    </div>
  );
};
