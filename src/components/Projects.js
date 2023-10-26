import '../styles/project.css'

export function Projects() {

  

 


  return (
    <div className="projects-container" id="projects">
      <div className="project-header" > 
            <h2>&lt;Projects /&gt;</h2>
      </div>
     

      <div
        className="project-grid"
        
      >
        {/* Project 1 */}
        <div className="project">
          <h3>Blog Post API</h3>
          <p>
            This is a blog post API that allows users to generate, add, edit, and delete blog posts.
          </p>
          <video src="/BlogPost.webm" alt="Blog Post API" 
          controls
          />
          <div className="project-buttons">
            <a href="https://blog-post-api-t5u8.onrender.com/">
              <button>Live URL</button>
            </a>
            <a href="https://github.com/aliveevie/blog_posts_api">
              <button>Source Code</button>
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project">
          <h3>Game of Life</h3>
          <p>
           This is basic game of life, develop with react and deploy to netlify
          </p>
          <video src="/gamelife.webm" alt="Game of life Project" 
          controls
          />
         
          <div className="project-buttons">
            <a href="https://64d3bc05a4ea5b069e56b5e4--candid-lolly-c39496.netlify.app/">
              <button>Live URL</button>
            </a>
            <a href="https://github.com/aliveevie/game-of-life">
              <button>Source Code</button>
            </a>
          </div>
        </div>
         {/* Project 2 */}
         <div className="project">
          <h3>Tic Tac Toe Game</h3>
          <p>
           This is Game of Tic tae toe!
          </p>
          <video src="tic-tac-game.webm" alt="Game of Tic tae" 
          controls
          />
          <div className="project-buttons">
            <a href="https://64ca878ce6fd9d17001b1211--cheery-dusk-71bebe.netlify.app/">
              <button>Live URL</button>
            </a>
            <a href="https://github.com/aliveevie/Tic-toe-game">
              <button>Source Code</button>
            </a>
          </div>
        </div>

        <div className="project" >
          <h3>Wheather Fetching API</h3>
          <p>
           This is an API that is Fetching Wheather
          </p>
          <video src="wheather.webm" alt="Wheather Fetching API image" 
          controls
          />
          
          <div className="project-buttons">
            <a href="https://64c26d2397f23600b0ca48ad--ivione.netlify.app/">
              <button>Live URL</button>
            </a>
            <a href="https://github.com/aliveevie/Local_Weathe_App">
              <button>Source Code</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
