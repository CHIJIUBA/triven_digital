import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ fname: '', lname: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.id]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    // Wire this up to your backend / form service of choice.
    setSent(true)
  }

  return (
    <div className="untree_co-section contact-section-wrap" id="contact-section">
      <div className="container">
        <div className="row mb-5" data-aos="fade-up" data-aos-delay="0">
          <div className="col-lg-8 mx-auto text-center">
            <span className="caption">Contact Us</span>
            <h2 className="heading">Let's Start a Conversation</h2>
            <p className="lead text-muted">
              Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>

        <div className="row g-5 align-items-start">
          <div className="col-lg-7" data-aos="fade-up" data-aos-delay="100">
            <form className="contact-form" id="contactForm" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6 mb-4">
                  <label className="form-label" htmlFor="fname">First name</label>
                  <input type="text" className="form-control" id="fname" value={form.fname} onChange={handleChange} required />
                </div>
                <div className="col-md-6 mb-4">
                  <label className="form-label" htmlFor="lname">Last name</label>
                  <input type="text" className="form-control" id="lname" value={form.lname} onChange={handleChange} required />
                </div>
              </div>
              <div className="mb-4">
                <label className="form-label" htmlFor="email">Email address</label>
                <input type="email" className="form-control" id="email" value={form.email} onChange={handleChange} required />
              </div>
              <div className="mb-4">
                <label className="form-label" htmlFor="message">Message</label>
                <textarea className="form-control" id="message" rows="5" value={form.message} onChange={handleChange} required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
              {sent && <p className="text-success mt-3 mb-0">Thanks! Your message has been sent.</p>}
            </form>
          </div>

          <div className="col-lg-5" data-aos="fade-left" data-aos-delay="200">
            <div className="contact-info-stack">
              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <span className="icon-room"></span>
                </div>
                <div className="contact-info-content">
                  <h4>Visit Us</h4>
                  <p>43 Raymouth Rd.<br />Baltimore, London 3910</p>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <span className="icon-phone"></span>
                </div>
                <div className="contact-info-content">
                  <h4>Call Us</h4>
                  <p>
                    <a href="tel:+11234567890">+1 (123) 456-7890</a><br />
                    <a href="tel:+11234567891">+1 (123) 456-7891</a>
                  </p>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <span className="icon-envelope"></span>
                </div>
                <div className="contact-info-content">
                  <h4>Email Us</h4>
                  <p>
                    <a href="mailto:hello@launch.com">hello@launch.com</a><br />
                    <a href="mailto:support@launch.com">support@launch.com</a>
                  </p>
                </div>
              </div>

              <div className="contact-social">
                <h4>Follow Us</h4>
                <div className="social-links">
                  <a href="#" aria-label="Twitter"><span className="icon-twitter"></span></a>
                  <a href="#" aria-label="Facebook"><span className="icon-facebook"></span></a>
                  <a href="#" aria-label="Instagram"><span className="icon-instagram"></span></a>
                  <a href="#" aria-label="LinkedIn"><span className="icon-linkedin"></span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
