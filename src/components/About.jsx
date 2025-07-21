import React from 'react';

function About() {
  return (
    <section id="about" className="container">
      {/* This heading will now stay at the top of the section */}
      <h2 className="text-center text-white my-5">About Me</h2>

      {/* This new wrapper div makes the content below it centered */}
      <div className="flex-grow-1 d-flex align-items-center justify-content-center w-100">

        {/* Your original content now goes inside the wrapper */}
        <div className="row align-items-center">
          <div className="col-md-4 text-center">
            <img src="/assets/me.jpeg" alt="Devagya Gupta" className='img-fluid rounded-circle mb-3' style={{ maxWidth: '250px' }} />
          </div>
          <div className="col-md-8 text-white">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
            </p>
            <p>
              Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.
            </p>
            <p>
              Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor.
            </p>
            <p>
              Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales.
            </p>
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default About;