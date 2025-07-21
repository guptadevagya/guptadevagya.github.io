function FunStuff() {
  return (
    <section id="fun" className="container">
      <h3 className="text-center text-white my-5">Fun Stuff</h3>
      <div className="d-flex justify-content-center">
        <div id="funCarousel" className="carousel slide" data-bs-ride="carousel" style={{ maxWidth: '800px', width: '100%' }}>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/assets/fun-stuff/activity1.jpg" className="d-block w-100" alt="First activity" />
              <div className="carousel-caption d-none d-md-block nes-container is-dark">
                <h5>Activity One</h5>
                <p>A short description of the fun activity I do.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="/assets/fun-stuff/activity2.jpg" className="d-block w-100" alt="Second activity" />
              <div className="carousel-caption d-none d-md-block nes-container is-dark">
                <h5>Activity Two</h5>
                <p>This is another fun thing that I enjoy.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="/assets/fun-stuff/activity3.jpg" className="d-block w-100" alt="Third activity" />
              <div className="carousel-caption d-none d-md-block nes-container is-dark">
                <h5>Activity Three</h5>
                <p>And here is a third hobby or interest.</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#funCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#funCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default FunStuff;