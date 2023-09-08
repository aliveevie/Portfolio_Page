export function Contact() {
  return (
    <div className="contact-container">
      <h2>Contact</h2>
      <p>Feel free to get in touch with me!</p>
      <form className="contact-form">
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
    </div>
  );
}
