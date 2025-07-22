import Section from './Section';

function About() {
  return (
    <Section id="about" title="About Me">
      <div className="row align-items-stretch" style={{ maxWidth: '1000px' }}>
        <div className="col-md-6 text-center">
          <img src="/assets/me.jpeg" alt="Devagya Gupta" className='img-fluid h-100' style={{ objectFit: 'cover' }} />
        </div>
        <div className="col-md-6 text-white d-flex flex-column justify-content-center">
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
    </Section>
  );
}

export default About;