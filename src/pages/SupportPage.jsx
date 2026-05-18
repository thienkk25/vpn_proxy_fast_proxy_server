import { useState, useEffect } from 'react';

const SupportPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [formSuccess, setFormSuccess] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSuccess(true);
    e.target.reset();
    setTimeout(() => setFormSuccess(false), 5000);
  };

  const faqs = [
    {
      q: "How do I connect to a VPN server?",
      a: "Open the app, select your preferred location from the server list, and tap the large connection button in the center of the home screen."
    },
    {
      q: "Why is my connection slow?",
      a: "Connection speed can depend on your distance from the server, your original internet speed, and server load. Try switching to a different server location for better performance."
    },
    {
      q: "How do I restore my Premium purchase?",
      a: "Go to Settings, tap on 'Manage Subscription' or 'Upgrade', and select 'Restore Purchases'. Make sure you are logged into the same Apple ID used for the purchase."
    },
    {
      q: "How do I cancel my subscription?",
      a: "Subscriptions are managed by Apple. Open the Settings app on your iOS device, tap your name, tap Subscriptions, and select VPN Proxy: Fast Proxy Server to manage or cancel it."
    }
  ];

  return (
    <main style={{ position: 'relative', zIndex: 10 }}>
      <section className="section" style={{ paddingTop: '120px' }}>
        <div className="container text-center">
          <h2 className="hero-title">How can we <span className="text-gradient">help you?</span></h2>
          <p className="hero-subtitle">Welcome to the Support Center. We are here to assist you with any issues or questions.</p>
        </div>
      </section>

      <section id="faq" className="section">
        <div className="container">
          <h3 className="section-title text-center">Frequently Asked Questions</h3>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className={`faq-item ${activeFaq === index ? 'active' : ''}`}>
                <div className="faq-question" onClick={() => toggleFaq(index)}>
                  {faq.q} <span className="arrow">▼</span>
                </div>
                <div className="faq-answer">
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container">
          <h3 className="section-title text-center">Contact Support</h3>
          <div className="contact-card">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="name" required placeholder="John Doe" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" required placeholder="john@example.com" />
              </div>
              <div className="form-group">
                <label htmlFor="topic">Topic</label>
                <select id="topic" name="topic" required>
                  <option value="">Select an issue</option>
                  <option value="connection">Connection Issue</option>
                  <option value="billing">Billing & Subscription</option>
                  <option value="bug">Report a Bug</option>
                  <option value="feature">Feature Request</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" required placeholder="Please describe your issue in detail..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
              {formSuccess && (
                <div className="success-msg">Your message has been sent successfully. We will get back to you soon!</div>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SupportPage;
