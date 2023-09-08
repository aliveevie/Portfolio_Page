export function Header() {
    return (
      <div className="header">
        <input type="checkbox" id="menu-toggle" />
     
        <nav className="navbar">
          <a href="about">About</a>
          <a href="projects">Projects</a>
          <a href="resume">Resume</a>
          <a href="skills">Skills</a>
          <a href="contact">Contact</a>
       
        <div className="header-icons">
          <a href="#">
            <img src="/github.svg" />
          </a>
          <a href="#">
            <img src="/twitter.svg"  />
          </a>
          <a href="#">
            <img src="/whatapp.svg"  />
          </a>
          <a href="#">
            <img src=""  />
          </a>
        </div>
        </nav>
      </div>
    );
  }