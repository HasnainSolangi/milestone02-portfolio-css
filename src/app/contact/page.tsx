// app/contact/page.tsx
export default function Contact() {
    return (
      <div className="section">
        <h1>Contact Me</h1>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows={5} required></textarea>
          </div>
          <button type="submit" className="button">Send Message</button>
        </form>
      </div>
    );
  }