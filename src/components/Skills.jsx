import React from 'react';

function Skills() {
  const coreLanguages = [
    { name: "Python", icon: "/assets/skills-icons/python.png" },
    { name: "Java", icon: "/assets/skills-icons/java.png" },
    { name: "C", icon: "/assets/skills-icons/c.png" },
    { name: "C++", icon: "/assets/skills-icons/c-plus-plus.png" },
    { name: "R", icon: "/assets/skills-icons/r.png" },
    { name: "Kotlin", icon: "/assets/skills-icons/kotlin.png" },
    { name: "Go", icon: "/assets/skills-icons/go.png" },
    { name: "Rust", icon: "/assets/skills-icons/rust.png" }
  ];

  const webTech = [
    { name: "JavaScript", icon: "/assets/skills-icons/js.png" },
    { name: "HTML5", icon: "/assets/skills-icons/html.png" },
    { name: "CSS3", icon: "/assets/skills-icons/css-3.png" },
    { name: "React", icon: "/assets/skills-icons/react.png" },
    { name: "SwiftUI", icon: "/assets/skills-icons/swiftui.png" },
    { name: "Figma", icon: "/assets/skills-icons/figma.png" },
    { name: "Canva", icon: "/assets/skills-icons/canva.png" }
  ];

  const dataScience = [
    { name: "PyTorch", icon: "/assets/skills-icons/pytorch.png" },
    { name: "Scikit-learn", icon: "/assets/skills-icons/scikit-learn.png" },
    { name: "Transformers", icon: "/assets/skills-icons/transformers.png" },
    { name: "OpenAI", icon: "/assets/skills-icons/openai.png" }
  ];

  const devOpsTools = [
    { name: "Git", icon: "/assets/skills-icons/git.png" },
    { name: "Docker", icon: "/assets/skills-icons/docker.png" },
    { name: "Bash", icon: "/assets/skills-icons/bash.png" },
    { name: "SQL", icon: "/assets/skills-icons/sql.png" }
  ];

  const skillItemStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1rem'
  };

  const iconStyle = {
    marginRight: '1rem',
    width: '24px',
    height: '24px',
    objectFit: 'contain'
  };

  return (
    <section id="skills" className="container text-center">
      <h3 className="text-center text-white my-5">Skills</h3>
      <div className="row justify-content-center">

        <div className="col-lg-3 mb-4">
          <div className="nes-container is-dark with-title h-100">
            <p className="title">Core Languages</p>
            <ul className="nes-list is-circle text-start">
              {coreLanguages.map(skill => (
                <li key={skill.name} style={skillItemStyle}>
                  <img src={skill.icon} alt={`${skill.name} icon`} style={iconStyle} />
                  <span className="text-white">{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="col-lg-3 mb-4">
          <div className="nes-container is-dark with-title h-100">
            <p className="title">Web & UI Tech</p>
            <ul className="nes-list is-circle text-start">
              {webTech.map(skill => (
                <li key={skill.name} style={skillItemStyle}>
                  <img src={skill.icon} alt={`${skill.name} icon`} style={iconStyle} />
                  <span className="text-white">{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="col-lg-3 mb-4">
          <div className="nes-container is-dark with-title h-100">
            <p className="title">Data Science & ML</p>
            <ul className="nes-list is-circle text-start">
              {dataScience.map(skill => (
                <li key={skill.name} style={skillItemStyle}>
                  <img src={skill.icon} alt={`${skill.name} icon`} style={iconStyle} />
                  <span className="text-white">{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="col-lg-3 mb-4">
          <div className="nes-container is-dark with-title h-100">
            <p className="title">DevOps & Tools</p>
            <ul className="nes-list is-disc text-start">
              {devOpsTools.map(skill => (
                <li key={skill.name} style={skillItemStyle}>
                  <img src={skill.icon} alt={`${skill.name} icon`} style={iconStyle} />
                  <span className="text-white">{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;