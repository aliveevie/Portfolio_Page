import '../styles/content.css'

export function Content(){
    return (
        <div className="eye-catching" id="about"  >
            <h2  data-aos="zoom-in"  data-aos-duration='4000' >Hello!</h2>
            <p className='coder' data-aos="fade-down" data-aos-duration="4000"  >&lt;I'm /&gt;</p>
            <div className="start-text" >
                <h3 
                data-aos="zoom-out"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                
                >IBRAHIM ABDULKARIM</h3>
            <div className="animation-text" >
                <p data-aos="fade-right" >I do more than just code; I craft web apps, ignite startups, 
                and elevate your business to the next level!</p>
                <img src="/sysadmin_03.png" alt="Man With Computer"  data-aos="fade-left"
                data-aos-duration="4000"
                />
            </div>
            </div>
        </div>
    )
}