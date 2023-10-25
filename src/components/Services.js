import '../styles/services.css';
export function Services() {
    return (
        <div className='services-container' id="services" >
            <div className="services-header" 
                    data-aos="fade-left"
                    data-aos-anchor="#example-anchor"
                    data-aos-offset="500"
                    data-aos-duration="500"
                    
            >
                <i class="fas fa-cogs"></i>
                <h2>Services</h2>
            </div>
            <div className="services">
            <div className="service"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            >
                <i class="fas fa-laptop-code"></i>
                <h3>Front-End Development</h3>
                <p>Creating user-friendly and interactive web interfaces using HTML, CSS, and JavaScript.</p>
            </div>

            <div className="service"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            
            >
                <i class="fas fa-server"></i>
                <h3>Back-End Development</h3>
                <p>Building robust server-side applications and APIs using various programming languages and frameworks.</p>
            </div>

            <div className="service"
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
            
            >
                <i class="fas fa-code"></i>
                <h3>Full-Stack Development</h3>
                <p>End-to-end development, from front-end to back-end, ensuring complete application functionality.</p>
            </div>

            <div className="service"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
            
            >
                <i class="fas fa-chart-bar"></i>
                <h3>Data Analysis</h3>
                <p>Collecting, processing, and analyzing data to derive meaningful insights and make data-driven decisions.</p>
            </div>

            <div className="service"
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
            
            >
                <i class="fab fa-wordpress"></i>
                <h3>WordPress Development</h3>
                <p>Creating and customizing WordPress websites with themes and plugins tailored to your needs.</p>
            </div>
            <div className="service"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
            
            >
                <i class="fas fa-chalkboard-teacher"></i>
                <h3>Training</h3>
                <p>Providing hands-on training and mentoring in web development and data analysis to empower aspiring professionals.</p>
            </div>

        </div>
        </div>
    )
}
