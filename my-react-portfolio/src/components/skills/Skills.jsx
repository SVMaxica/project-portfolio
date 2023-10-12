/* eslint-disable react/prop-types */
import './Skills.css';

export const Skills = () => {
  return (
    <div className="skills-wrapper">
            <h1>My Skills</h1>
            <div className="skills-grid">
            <div className="skills-column">
                    <h3 className='code-heading'>Code</h3>
                    {/* Replace with your skills */}
                    <p>JavaScript</p>
                    <p>Python</p>
                    <p>React</p>
                    <p>Node.js</p>
                    <p>C++</p>
                </div>
                <div className="skills-column">
                    <h3 className='toolbox-heading'>Toolbox</h3>
                    {/* Replace with your tools */}
                    <p>VSCode</p>
                    <p>Git</p>
                    <p>Webpack</p>
                    <p>Postman</p>
                    <p>Docker</p>
                </div>
                <div className="skills-column">
                    <h3 className='upcoming-heading'>Upcoming</h3>
                    {/* Replace with your upcoming skills */}
                    <p>GraphQL</p>
                    <p>TypeScript</p>
                    <p>Vue.js</p>
                    <p>Rust</p>
                    <p>WebAssembly</p>
                </div>
                <div className="skills-column">
                    <h3 className='more-heading'>More</h3>
                    {/* Replace with additional skills or info */}
                    <p>Design</p>
                    <p>SEO</p>
                    <p>Database</p>
                    <p>Testing</p>
                    <p>Mobile</p>
                </div>
            </div>
        </div>
  )
}
