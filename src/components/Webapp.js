import '../styles/webapp.css'

export function Webapp() {
    return (
        <div className="webapp" >
            <h1 className="webapp-heading"  data-aos="zoom-in" duration="4000" >&lt;Web Apps /&gt;</h1>
            <div className="webanimation">
                <p className="hidden-text" data-aos="zoom-out" duration="10000" >
                    Unlocking the Power of Web Apps: Crafting the Future with Captivating Applications
                </p>
            </div>
            <div className="apps" id="webapps" >
                <div className="app1" data-aos="fade-right"  data-aos-duration="10000" >
                    <div className='textandline' >
                    <div className="number">1</div>
                    <div className="line"></div>
                    <div className="text">
                        <h3>Smart-T</h3>
                        <p>
                            Revolutionizing Education, One App at a Time:
                            Crafting Apps to Transform Teaching in Schools
                        </p>
                        <div className='buttons' >
                            <button>Learn More</button>
                            <button>Source Code</button>
                            <button>Live Url</button>
                        </div>
                       
                    </div>
                    </div>
                </div>
                <div className="app2">
                    <div className='textandline'  data-aos="fade-left" >
                    <div className="text">
                        <h3>Game of Life</h3>
                        <p>
                        Breathing Life into Games: 
                        I Create the Magic Behind the World of Gaming
                        </p>
                        <div className='buttons' >
                            <button>Learn More</button>
                            <button>Source Code</button>
                            <button>Live Url</button>
                        </div>
                    </div>
                    <div className="number">2</div>
                    <div className="line"></div>
                    </div>
                </div>
                <div className="app1" data-aos="fade-right" >
                    <div className='textandline' >
                    <div className="number">3</div>
                    <div className="line"></div>
                    <div className="text">
                        <h3>Blog-Post-API</h3>
                        <p>
                        Unlocking the Art of Storytelling: 
                        My API Journey in the World of Blog Posts!
                        </p>
                        <div className='buttons' >
                            <button>Learn More</button>
                            <button>Source Code</button>
                            <button>Live Url</button>
                        </div>
                       
                    </div>
                    </div>
                </div>
                <div className="app2"  data-aos="fade-left">
                    <div className='textandline' >
                    <div className="text">
                        <h3>Tic-Tae-Toe Game</h3>
                        <p>
                        X's and O's in Battle: Crafting the Ultimate Tic-Tac-Toe Experience
                        </p>
                        <div className='buttons' >
                            <button>Learn More</button>
                            <button>Source Code</button>
                            <button>Live Url</button>
                        </div>
                    </div>
                    <div className="number">4</div>
                    <div className="line"></div>
                    </div>
                </div>
            </div>

            <div className='webapps-mobile'>
            <div className="app1"
                 data-aos="fade-right"
                 data-aos-easing="linear"
                 data-aos-duration="1500"
            >
                    <div className='textandline' >
                    <div className="number">1</div>
                    <div className="line"></div>
                    <div className="text">
                        <h3>Smart-T</h3>
                        <p>
                            Revolutionizing Education, One App at a Time:
                            Crafting Apps to Transform Teaching in Schools
                        </p>
                        <div className='buttons' >
                            <button>Learn More</button>
                            <button>Source Code</button>
                            <button>Live Url</button>
                        </div>
                       
                    </div>
                    </div>
                </div>
                <div className="app1"
                     data-aos="fade-left"
                     data-aos-easing="linear"
                     data-aos-duration="1500"
                >
                    <div className='textandline' >
                    <div className="number">2</div>
                    <div className="line"></div>
                    <div className="text">
                        <h3>Game of Life</h3>
                        <p>
                        Breathing Life into Games: 
                        I Create the Magic Behind the World of Gaming 
                        </p>
                        <div className='buttons' >
                            <button>Learn More</button>
                            <button>Source Code</button>
                            <button>Live Url</button>
                        </div>
                       
                    </div>
                    </div>
                </div>
                <div className="app1"
                     data-aos="fade-right"
                     data-aos-easing="linear"
                     data-aos-duration="1500"
                >
                    <div className='textandline' >
                    <div className="number">3</div>
                    <div className="line"></div>
                    <div className="text">
                    <h3>Tic-Tae-Toe Game</h3>
                        <p>
                        X's and O's in Battle: Crafting the Ultimate Tic-Tac-Toe Experience
                        </p>
                        <div className='buttons' >
                            <button>Learn More</button>
                            <button>Source Code</button>
                            <button>Live Url</button>
                        </div>
                       
                    </div>
                    </div>
                </div>
                <div className="app1"
                     data-aos="fade-left"
                     data-aos-easing="linear"
                     data-aos-duration="1500"
                >
                    <div className='textandline' >
                    <div className="number">4</div>
                    <div className="line"></div>
                    <div className="text">
                        <h3>Blog-Post-API</h3>
                        <p>
                        Unlocking the Art of Storytelling: 
                        My API Journey in the World of Blog Posts!
                        </p>
                        <div className='buttons' >
                            <button>Learn More</button>
                            <button>Source Code</button>
                            <button>Live Url</button>
                        </div>
                       
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
