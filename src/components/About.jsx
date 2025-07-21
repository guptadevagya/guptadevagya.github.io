function About() {
  // This content should be updated with your information
  return (
    <section id="about" className="container">
      <h2 className="text-center text-white my-5">About Me</h2>
      <div className="row align-items-center">
        <div className="col-md-4 text-center">
          <img src="/assets/me.jpeg" alt="Devagya Gupta" className='img-fluid rounded-circle mb-3' style={{ maxWidth: '250px' }} />
        </div>
        <div className="col-md-8">
          <p className="text-white">Hello! I'm Devagya, a passionate student eagerly exploring the world of Software Engineering and technology. I've gained valuable experience as a Trading Developer and as a Mesh Maker Software Developer, enhancing proprietary software with user-friendly interfaces. My projects span diverse areas, including a Line Drawing Classifier using TensorFlow and an AI-powered "GuessWho" game.</p>
        </div>
      </div>
    </section>
  );
}

export default About;