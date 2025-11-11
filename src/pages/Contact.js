import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({ name: "", email: "" });
  const [submittedMessage, setSubmittedMessage] = useState("");

  const validate = () => {
    const nextErrors = { name: "", email: "" };
    if (!name.trim()) {
      nextErrors.name = "Name is required";
    }
    if (!email.trim()) {
      nextErrors.email = "Email is required";
    }
    setErrors(nextErrors);
    return !nextErrors.name && !nextErrors.email;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedMessage("");
    if (!validate()) {
      return;
    }

    setSubmittedMessage("Thanks! Your message has been sent.");
    setName("");
    setEmail("");
  };

  return (
    <section id="contact-us" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Contact Us</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="contact-field">
            <label htmlFor="contact-name">Name</label>
            <input
              id="contact-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your full name"
              aria-describedby="contact-name-error"
            />
            {errors.name ? (
              <span id="contact-name-error" className="contact-error">
                {errors.name}
              </span>
            ) : null}
          </div>
          <div className="contact-field">
            <label htmlFor="contact-email">Email</label>
            <input
              id="contact-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              aria-describedby="contact-email-error"
            />
            {errors.email ? (
              <span id="contact-email-error" className="contact-error">
                {errors.email}
              </span>
            ) : null}
          </div>
          <button type="submit" className="contact-submit">
            Submit
          </button>
          {submittedMessage ? (
            <p className="contact-success" role="status">
              {submittedMessage}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}

export default Contact;
