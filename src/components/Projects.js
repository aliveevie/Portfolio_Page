export function Projects() {
  return (
    <div className="projects-container" id="projects">
      <h2>Projects</h2>
      <p>I have completed the following projects:</p>

      <div className="project-grid">
        {/* Project 1 */}
        <div className="project">
          <h3>Blog Post API</h3>
          <p>
            This is a blog post API that allows users to generate, add, edit, and delete blog posts.
          </p>
          <video src="/BlogPost.webm" alt="Blog Post API" />
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
          <video src="/gamelife.webm" alt="Game of life Project" />
         
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
          <img src="#" alt="Another Project" />
          <p>
           This is Game of Tic tae toe!
          </p>
          <div className="project-buttons">
            <a href="https://64ca878ce6fd9d17001b1211--cheery-dusk-71bebe.netlify.app/">
              <button>Live URL</button>
            </a>
            <a href="https://github.com/aliveevie/Tic-toe-game">
              <button>Source Code</button>
            </a>
          </div>
        </div>

        <div className="project">
          <h3>Wheather Fetching API</h3>
          <img src="#" alt="Wheather Fetching API image" />
          <p>
           This is an API that is Fetching Wheather and then showing the Wheather on various locations
          </p>
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
