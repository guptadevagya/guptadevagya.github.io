import React from 'react';

function Skills() {
  const languages = [
    { name: "Python", icon: "/assets/skills-icons/python.png" },
    { name: "Java", icon: "/assets/skills-icons/java.png" },
    { name: "C", icon: "/assets/skills-icons/c.png" },
    { name: "C++", icon: "/assets/skills-icons/c-plus-plus.png" },
    { name: "R", icon: "/assets/skills-icons/r.png" },
    { name: "Kotlin", icon: "/assets/skills-icons/kotlin.png" },
    { name: "JavaScript", icon: "/assets/skills-icons/js.png" },
    { name: "HTML5", icon: "/assets/skills-icons/html.png" },
    { name: "CSS3", icon: "/assets/skills-icons/css-3.png" },
    { name: "Bash", icon: "/assets/skills-icons/bash.png" },
    { name: "SQL", icon: "/assets/skills-icons/sql.png" },
    { name: "Go", icon: "/assets/skills-icons/go.png" },
    { name: "Rust", icon: "/assets/skills-icons/rust.png" }
  ];

  const frameworksAndLibraries = [
    { name: "PyTorch", icon: "/assets/skills-icons/pytorch.png" },
    { name: "OpenAI", icon: "/assets/skills-icons/openai.png" },
    { name: "Scikit-learn", icon: "/assets/skills-icons/scikit-learn.png" },
    { name: "Transformers", icon: "/assets/skills-icons/transformers.png" },
    { name: "React", icon: "/assets/skills-icons/react.png" },
    { name: "Android", icon: "/assets/skills-icons/android.png" }
  ];

  const otherTools = [
    { name: "MySQL", icon: "/assets/skills-icons/mysql.png" },
    { name: "Git", icon: "/assets/skills-icons/git.png" },
    { name: "Docker", icon: "/assets/skills-icons/docker.png" },
    { name: "Figma", icon: "/assets/skills-icons/figma.png" }
  ];

  const skillItemStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1rem'
  };

  const iconStyle = {
    marginRight: '1rem',
    width: '24px',
    height: '24px'
  };

  return (
    <section id="skills" className="container text-center">
      <h3 className="text-center text-white my-5">Skills</h3>
      <div className="d-flex justify-content-center flex-wrap">
        
        {/* Languages Section */}
        <div className="nes-container is-dark with-title m-3" style={{ flex: '1 1 300px', maxWidth: '400px' }}>
          <p className="title">Languages</p>
          <ul className="nes-list is-circle text-start">
            {languages.map(skill => (
              <li key={skill.name} style={skillItemStyle}>
                <img src={skill.icon} alt={`${skill.name} icon`} style={iconStyle} />
                <span className="text-white">{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Frameworks & Libraries Section */}
        <div className="nes-container is-dark with-title m-3" style={{ flex: '1 1 300px', maxWidth: '400px' }}>
          <p className="title">Frameworks & Libraries</p>
          <ul className="nes-list is-circle text-start">
            {frameworksAndLibraries.map(skill => (
              <li key={skill.name} style={skillItemStyle}>
                <img src={skill.icon} alt={`${skill.name} icon`} style={iconStyle} />
                <span className="text-white">{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Other Tools Section */}
        <div className="nes-container is-dark with-title m-3" style={{ flex: '1 1 300px', maxWidth: '400px' }}>
          <p className="title">Other Tools</p>
          <ul className="nes-list is-disc text-start">
            {otherTools.map(skill => (
              <li key={skill.name} style={skillItemStyle}>
                <img src={skill.icon} alt={`${skill.name} icon`} style={iconStyle} />
                <span className="text-white">{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}

export default Skills;