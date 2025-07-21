import React from 'react';

function Skills() {
  // Add your skills here
  return (
    <section id="skills" className="container">
      <h3 className="text-center text-white my-5">Skills</h3>
      <div className="d-flex justify-content-center flex-wrap">
        <div className="nes-container is-dark with-title m-3">
          <p className="title">Languages</p>
          <p className="text-white">Python, Java, JavaScript, C#, HTML, CSS</p>
        </div>
        <div className="nes-container is-dark with-title m-3">
          <p className="title">Frameworks</p>
          <p className="text-white">React, NodeJS, Express, Flask, Bootstrap</p>
        </div>
        <div className="nes-container is-dark with-title m-3">
          <p className="title">Databases</p>
          <p className="text-white">MySQL, MongoDB, Firebase</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;