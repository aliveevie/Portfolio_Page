import '../styles/achievement.css'

export function Achievement() {
    return (
        <div className="achievement" id="achievement" >
            <div className="achievement-header" data-aos="zoom-out"  >
                <h2>
                    <i className="fas fa-medal"></i> Achievements
                </h2>
            </div>
            <div className="achievements-container">
                <div className="achievement-column"
                   data-aos="flip-down"
                >
                    <div className="achievement-item"
                    
                    >
                        <i className="fas fa-certificate"></i>
                        <h3>FreeCodeCamp Completion</h3>
                        <ul>
                            <li>Completed the FreeCodeCamp curriculum</li>
                            <li>Earned over twelve certificates</li>
                            <li>View my achievements <a href="https://www.freecodecamp.org/aliveevie" target="_blank" rel="noopener noreferrer">here</a></li>
                        </ul>
                    </div>
                    <div className="achievement-item"
                       data-aos="flip-up"   
                    
                    >
                        <i className="fas fa-award"></i>
                        <h3>Hacktoberfest 2023</h3>
                        <ul>
                            <li>Participated in Hacktoberfest 2023</li>
                            <li>Earned four different badges, including Digital Ocean, Illa Cloud, Appwrite, and Hacktoberfest</li>
                            <li>Unlocked digital swag and received a free domain from GoDaddy</li>
                        </ul>
                    </div>
                </div>

                <div className="achievement-column">
                   
                    <div className="achievement-item"
                       data-aos="flip-down" 
                    >
                        <i className="fas fa-graduation-cap"></i>
                        <h3>ALX Software Engineering</h3>
                        <ul>
                            <li>Completed the ALX Software Engineering program</li>
                            <li>Graduated in the top 5%</li>
                            <li>Got the opportunity to join The Room</li>
                        </ul>
                    </div>
                    <div className="achievement-item"
                        data-aos="flip-up"
                    
                    >
                        <i className="fas fa-laptop-code"></i>
                        <h3>Teachers Software Management Tool</h3>
                        <ul>
                            <li>Developed a Teachers Software Management Tool</li>
                            <li>Simplified teaching processes for educators</li>
                            <li>Enhanced collaboration among teachers</li>
                            <li>Received positive feedback from educators</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
