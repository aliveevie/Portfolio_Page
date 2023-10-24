import '../styles/skills.css'

export function Skills() {
  return (
    <div id="skills" className="skills-container">
      <div className='skill-header' >
            <h2>&lt;Skills /&gt;</h2>
            <p>This is an array of my expetise set</p>
      </div>
      <div className="skills-images">
        <div className="skill">
          <img src="/html.svg" alt="HTML Logo" />
         
        </div>
        <div className="skill">
          <img src="/coding.svg" alt="JavaScript Logo" />
        
        </div>
        <div className="skill">
          <img src="/python.svg" alt="Python Logo" />
          
        </div>
        <div className="skill">
          <img src="/css.svg" alt="CSS Logo" />
        
        </div>
        <div className="skill">
          <img src="/sql.svg" alt="SQL Logo" />
        
        </div>
        <div className="skill">
          <img src="/mongoDB.svg" alt="MongoDB Logo" />
          
        </div>
        <div className="skill">
          <img src="/react.svg" alt="Passport.js Logo" />
        
        </div>
        <div className="skill">
          <img src="/node.svg" alt="Passport.js Logo" />
        
        </div>
        <div className="skill">
          <img src="/linux.svg" alt="Passport.js Logo" />
        
        </div>
      </div>
    </div>
  );
}
