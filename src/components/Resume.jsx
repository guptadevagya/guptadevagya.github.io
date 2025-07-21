import React from 'react';

function Resume() {
  return (
    <section id="resume" className="container">
      <h3 className="text-center text-white my-5">Resume</h3>
      <div className="d-flex justify-content-center">
        <iframe src="/assets/resume.pdf" title="Resume" width="100%" height="600px" style={{ maxWidth: '800px', border: 'none' }}>
          <p>Unable to display PDF. <a href="/assets/resume.pdf">Download it here</a>.</p>
        </iframe>
      </div>
    </section>
  );
}

export default Resume;