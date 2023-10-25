import '../styles/contact.css'

export function Contact() {
  return (

    <div className="contact-container" id="contact" >
      <div className="contact-header" >
      <h2>&lt;Contact /&gt;</h2>
      </div>
     
    <div class="contact-icons">
        <a href="https://github.com/aliveevie/"><i class="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/ibrahim193/"><i class="fab fa-linkedin"></i></a>
        <a href="https://wa.me/2348138300357"><i class="fab fa-whatsapp"></i></a>
        <a href="mailto:ibrahim@ibadulkarim.co"><i class="far fa-envelope"></i></a>
        <a href="https://twitter.com/iabdulkarim472"><i class="fab fa-twitter"></i></a>
    </div>


    {/** 
     *  <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Your Name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Your Email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" placeholder="Your Message"></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
     * 
     * 
    */}
     
    </div>
  );
}
