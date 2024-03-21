import './Contact.css';
import profileImage from '/images/dynamiskprofil.jpg';
import linkedInIcon from '../../assets/linkedin.svg';
import stackOwerflowIcon from '../../assets/stack.svg';
import githubIcon from '../../assets/github.svg';
import { forwardRef } from 'react';

export const Contact = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="contact-wrapper">
      <h1>Let's Talk</h1>
      <div className="contact-content">
        <img src={profileImage} alt="Profile" className="profile-image" />
        <div className="contact-text">
          <p>Sandra Gustafsson</p>
          <p>+46(0)70 429 28 59</p>
          <p>svmaxica@gmail.com</p>
        </div>
        <div className="social-media-icons">
          <a
            href="www.linkedin.com/in/sandra-gustafsson-3665061a5"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedInIcon} alt="LinkedIn link" />
          </a>
          <a
            href="https://stackexchange.com/users/28897605/sandra-gustafsson"
            target="_blank"
            rel="noreferrer"
          >
            <img src={stackOwerflowIcon} alt="Stackowerflow link" />
          </a>
          <a
            href="https://github.com/SVMaxica"
            target="_blank"
            rel="noreferrer"
          >
            <img src={githubIcon} alt="Github link" />
          </a>
        </div>
      </div>
    </div>
  );
});
