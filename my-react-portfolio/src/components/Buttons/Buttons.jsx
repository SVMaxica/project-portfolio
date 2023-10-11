import './Buttons.css';
import GithubSVG from '../../assets/github.svg';
import LiveDemoSVG from  '../../assets/web.svg';
import ReadMoreSVG from '../../assets/note-rounded-square-interface-symbol-svgrepo-com.svg'

export const Buttons = ({ type, text, icon, onClick, href }) => {
  return (
    <a className={`Button ${type}`} href={href} onClick={onClick} target="_blank" rel="noopener noreferrer">
<span className="button-icon">{icon}</span>
            <span className="button-text">{text}</span>
    </a>
  )
}
