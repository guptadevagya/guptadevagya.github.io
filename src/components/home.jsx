// create this for the top section of your page
import React from 'react';

function Home() {
  return (
    <div className="container-fluid p-3 p-md-5 text-center d-flex align-items-center justify-content-center home">
      <div className="col-xl-auto mx-auto">
        <h1 className="display-3 fw-bold text-white">Devagya Gupta</h1>
        <h3 className="fw-normal text-warning mb-3">Computer Science, Data Science, & Entrepreneurship</h3>
        <h3 className="fw-normal text-warning mb-3">University of Wisconsin - Madison '26</h3>
        <div className='container d-flex justify-content-center mb-4'>
          <a className="nes-btn is-error mx-3" href="https://www.linkedin.com/in/devagyagupta/" target="_blank" rel="noopener noreferrer">
            <i className="nes-icon linkedin is-medium"></i>
          </a>
          <a className="nes-btn is-success mx-3" href="https://github.com/guptadevagya" target="_blank" rel="noopener noreferrer">
            <i className="nes-icon github is-medium"></i>
          </a>
        </div>
        <a className="nes-btn is-warning" href="/assets/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
      </div>
    </div>
  );
}

export default Home;