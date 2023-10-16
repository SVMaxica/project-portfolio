import './Buttons.css';



export const Buttons = ({ type, text, icon, onClick, href }) => {
  return (
    <a className={`Button ${type}`} href={href} onClick={onClick} target="_blank" rel="noopener noreferrer">
<span className="button-icon">{icon}</span>
            <span className="button-text">{text}</span>
    </a>
  )
}
