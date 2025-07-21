import React from 'react';

function About() {
  return (
    <section id="about" className="container">
      <h3 className="text-center text-white my-5">About Me</h3>
      <div className="nes-container is-dark with-title" style={{ width: '100%', maxWidth: '900px' }}>
        <p className="title">My Story</p>
        <div className="text-white text-start">
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
    </section>
  );
}

export default About;