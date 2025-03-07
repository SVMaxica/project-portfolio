import { useState } from 'react';
import './Projects.css';
import projectsData from '../../../projects.json';
import { Buttons } from '../Buttons/Buttons';
import GithubIcon from '../../assets/github.svg';
import LiveDemoIcon from '../../assets/web.svg';
import { forwardRef } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

Modal.setAppElement('#root'); // Anpassa detta om din root-div har ett annat id

export const Projects = forwardRef((props, ref) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');

  const openModal = (video) => {
    setVideoUrl(video);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setVideoUrl('');
  };

  const ProjectCard = ({ project }) => {
    return (
      <div ref={ref} className="project-card">
        <img
          src={project.image}
          alt={`Project thumbnail for ${project.name}`}
          className="project-image"
        />
        <div className="project-details">
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <div className="project-tags" aria-label="Technologies used">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <div className="project-buttons">
            {project.netlify && (
              <Buttons
                type="live-demo"
                text="Live Demo"
                icon={<img src={LiveDemoIcon} alt="Live demo icon" />}
                href={project.netlify}
              />
            )}
            <Buttons
              type="view-code"
              text="View the Code"
              icon={<img src={GithubIcon} alt="GitHub icon" />}
              href={project.github}
            />
            {project.video && (
              <Buttons
                type="video-demo"
                text="Watch Demo"
                icon="🎥"
                onClick={() => openModal(project.video)}
              />
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="projects-wrapper">
      <div className="project-content-wrapper">
        <h1 className="projects-title">Featured Projects</h1>
        {projectsData.projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>

      {/* Modal för videouppspelning */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Video Demo"
        className="modal"
        overlayClassName="overlay"
      >
        <button className="close-button" onClick={closeModal}>
          ✖
        </button>
        <video controls className="video-player">
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Modal>
    </div>
  );
});

// export const Projects = forwardRef((props, ref) => {
//   const ProjectCard = ({ project }) => {
//     return (
//       <div ref={ref} className="project-card">
//         <img
//           src={project.image}
//           alt={`Project thumbnail for ${project.name}`}
//           className="project-image"
//         />
//         <div className="project-details">
//           <h3>{project.name}</h3>
//           <p>{project.description}</p>
//           <div className="project-tags" aria-label="Technologies used">
//             {project.tags.map((tag) => (
//               <span key={tag}>{tag}</span>
//             ))}
//           </div>
//           <div className="project-buttons">
//             {project.netlify && ( // Visa bara om netlify finns
//               <Buttons
//                 type="live-demo"
//                 text="Live Demo"
//                 icon={<img src={LiveDemoIcon} alt="Live demo icon" />}
//                 href={project.netlify}
//               />
//             )}
//             <Buttons
//               type="view-code"
//               text="View the Code"
//               icon={<img src={GithubIcon} alt="GitHub icon" />}
//               href={project.github}
//             />
//             {project.video && ( // Video-knappen visas bara om en video finns
//               <Buttons
//                 type="video-demo"
//                 text="Watch Demo"
//                 icon="🎥"
//                 href={project.video}
//               />
//             )}
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="projects-wrapper">
//       <div className="project-content-wrapper">
//         <h1 className="projects-title">Featured Projects</h1>
//         {projectsData.projects.map((project) => (
//           <ProjectCard key={project.name} project={project} />
//         ))}
//       </div>
//     </div>
//   );
// });
