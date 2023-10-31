import '../styles/project.css'

export function Projects() {

  

 


  return (
    <div className="projects-container" id="projects">
      <div className="project-header" > 
            <h2
            data-aos="zoom-out"
            >&lt;Projects /&gt;</h2>
      </div>
     

      <div
        className="project-grid"
        
      >
        {/* Project 1 */}
        <div className="project"
          data-aos="fade-right"
        >
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
        <div className="project"
        data-aos="fade-up"
        >
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
         <div className="project"
         data-aos="fade-left"
         >
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

        <div className="project" 
        data-aos="fade-right"
        >
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

        <div className="project" 
        data-aos="fade-down"
        >
          <h3>Hackthon Landing Page</h3>
          <p>
           This is a hackathon Landing Page
          </p>
          <video src="landinPage.webm" alt="Landing Page video" 
          controls
          />
          
          <div className="project-buttons">
            <a href="https://650e4ed8bef72e65833eec61--transcendent-druid-eddde8.netlify.app/">
              <button>Live URL</button>
            </a>
            <a href="https://github.com/aliveevie/competition-landing-page">
              <button>Source Code</button>
            </a>
          </div>
        </div>

        <div className="project" 
        data-aos="fade-left"
        >
          <h3>Basic Calculator!</h3>
          <p>
           This is basic calculator that does most simple arithmetic
          </p>
          <video src="calculator.webm" alt="Smart Teaching In Schools!" 
          controls
          />
          
          <div className="project-buttons">
            <a href="https://calculator-ecru-psi.vercel.app/">
              <button>Live URL</button>
            </a>
            <a href="https://github.com/aliveevie/calculator">
              <button>Source Code</button>
            </a>
          </div>
        </div>

        <div className="project" 
        data-aos="fade-down"
        >
          <h3>Markdown Previewer!</h3>
          <p>
            This simplifies the process of creating markdown!
          </p>
          <video src="markdown.webm" alt="Landing Page video" 
          controls
          />
          
          <div className="project-buttons">
            <a href="https://markdown-preview-gamma-eight.vercel.app/">
              <button>Live URL</button>
            </a>
            <a href="https://github.com/aliveevie/markdown-preview">
              <button>Source Code</button>
            </a>
          </div>
        </div>

        <div className="project" 
        data-aos="fade-down"
        >
          <h3>Random Quote Generator</h3>
          <p>
           This is an app that generates code!
          </p>
          <video src="randomq.webm" alt="Landing Page video" 
          controls
          />
          
          <div className="project-buttons">
            <a href="https://random-quote-gen-rosy.vercel.app/">
              <button>Live URL</button>
            </a>
            <a href="https://github.com/aliveevie/Random_Quote_Gen">
              <button>Source Code</button>
            </a>
          </div>
        </div>

        <div className="project" 
        data-aos="fade-down"
        >
          <h3>Stop Watch</h3>
          <p>
           This is a basic stopwatch
          </p>
          <video src="stopwatch.webm" alt="Landing Page video" 
          controls
          />
          
          <div className="project-buttons">
            <a href="https://stop-watch-pi-sage.vercel.app/">
              <button>Live URL</button>
            </a>
            <a href="https://github.com/aliveevie/StopWatch">
              <button>Source Code</button>
            </a>
          </div>
        </div>
        

      </div>
    </div>
  );
}
