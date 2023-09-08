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
        </nav>
        <div className="header-icons">
          <a href="https://github.com/aliveevie/">
            <img src="/github.svg" />
          </a>
          <a href="https://twitter.com/iabdulkarim472">
            <img src="/twitter.svg"  />
          </a>
          <a href="tel:+2348138300357">
            <img src="/whatapp.svg" alt="WhatsApp" />
          </a>

          <a href="https://www.linkedin.com/in/ibrahim193/">
          <img src="/linkedIn.svg"  />
          </a>
        
        </div>
      </div>
    );
  }