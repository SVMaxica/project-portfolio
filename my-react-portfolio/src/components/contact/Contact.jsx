import './Contact.css';
import profileImage from '/images/profilimg.jpeg';
import linkedInIcon from '../../assets/linkedin.svg';
import stackOwerflowIcon from '../../assets/stack.svg';
import githubIcon from '../../assets/github.svg';



export const Contact = () => {
  return (
    <div className="contact-wrapper">
            <h1>Let's Talk</h1>
            <div className='contact-content'>
            <img src={profileImage} alt="Profile" className="profile-image" />
            <div className='contact-text'>
            <p>Sandra Gustafsson</p>
            <p>+46704292859</p>
            <p>svmaxica@gmail.com</p>
            </div>
            <div className="social-media-icons">
            <a href="https://linkedin.com/in/your_username" target="_blank" rel="noreferrer">
                    <img src={linkedInIcon} alt="LinkedIn link" />
                </a>
                <a href="https://stackoverflow.com/#" target="_blank" rel="noreferrer">
                    <img src={stackOwerflowIcon} alt="Stackowerflow link" />
                </a>
                <a href="https://instagram.com/your_username" target="_blank" rel="noreferrer">
                    <img src={githubIcon} alt="Github link" />
                </a>
                </div>
            </div>
        </div>
    );
};
