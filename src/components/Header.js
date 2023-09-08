export function Header() {
    return (
      <div className="header">
        <input type="checkbox" id="menu-toggle" />
        <label htmlFor="menu-toggle" className="menu-icon">
          <i className="fas fa-bars"></i>
        </label>
        <nav className="navbar">
          <a href="about">About</a>
          <a href="project">Projects</a>
          <a href="resume">Resume</a>
          <a href="contact">Contact</a>
        </nav>
        <div className="header-icons">
          <a href="#">
            <i className="fab fa-github"></i>
          </a>
          <a href="#">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fas fa-phone"></i>
          </a>
        </div>
      </div>
    );
  }