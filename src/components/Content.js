import '../styles/content.css'

export function Content(){
    return (
        <div className="eye-catching" id="about"  >
            <h2  
            data-aos="zoom-out"  
            data-aos-duration="4000"
            >Hello!</h2>
            <p className='coder'
            data-aos="zoom-in-up"  
            data-aos-duration="4000"
            >&lt;I'm /&gt;</p>
            <div className="start-text" >
                <h3 
                data-aos="zoom-out-down"  
                data-aos-duration="4000"
                >IBRAHIM ABDULKARIM</h3>
            <div className="animation-text" >
                <p 
                data-aos="fade-right"  
                data-aos-duration="4000"
                
                >I do more than just code,
                 <br></br>    I craft web apps, ignite startups, 
                 <br></br>    and elevate your business to the next level!</p>
                <img src="/sysadmin_03.png" alt="Man With Computer"
                data-aos="fade-left"  
                data-aos-duration="4000"

                />
            </div>
            </div>
        </div>
    )
}