import React from 'react';

function Resume() {
  return (
    <section id="resume" className="container">
      <h3 className="text-center text-white my-5">Resume</h3>
      <div className="d-flex justify-content-center w-100">
        <iframe 
          src="/assets/Devagya_Gupta_Resume.pdf" 
          title="Resume" 
          style={{ 
            width: '100%', 
            maxWidth: '800px', 
            height: '80vh', /* Use viewport height for better scaling */
            border: 'none' 
          }}
        >
          <p>Unable to display PDF. <a href="/assets/Devagya_Gupta_Resume.pdf">Download it here</a>.</p>
        </iframe>
      </div>
    </section>
  );
}

export default Resume;