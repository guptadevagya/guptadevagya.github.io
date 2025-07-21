function Footer() {
  return (
    <div className="container-fluid text-bg-dark">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <span className="mb-3 mb-md-0 text-white">© 2025 Devagya Gupta</span>
        <ul className="nav justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a href="https://www.linkedin.com/in/devagyagupta/" target="_blank" rel="noopener noreferrer">
              <i className="nes-icon linkedin is-medium"></i>
            </a>
          </li>
          <li className="ms-3">
            <a href="https://github.com/guptadevagya" target="_blank" rel="noopener noreferrer">
              <i className="nes-icon github is-medium"></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;