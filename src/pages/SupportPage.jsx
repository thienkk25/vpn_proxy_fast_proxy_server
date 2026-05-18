import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const SupportPage = () => {
  const { t } = useTranslation();
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
      q: t('web.support.faq.q1', "How do I reset my password?"),
      a: t('web.support.faq.a1', "Go to settings, tap Account, and select Reset Password. We will send an email with instructions.")
    },
    {
      q: t('web.support.faq.q2', "Why is my connection slow?"),
      a: t('web.support.faq.a2', "Try switching to a server closer to your physical location. You can also try changing the protocol in settings.")
    },
    {
      q: t('web.support.faq.q3', "Can I use one account on multiple devices?"),
      a: t('web.support.faq.a3', "Yes, a premium subscription allows you to connect up to 5 devices simultaneously.")
    },
    {
      q: t('web.support.faq.q4', "How do I cancel my subscription?"),
      a: t('web.support.faq.a4', "Subscriptions are managed by Apple. Open the Settings app on your iOS device, tap your name, tap Subscriptions, and select VPN Proxy: Fast Proxy Server to manage or cancel it.")
    }
  ];

  return (
    <main style={{ position: 'relative', zIndex: 10 }}>
      <section className="section" style={{ paddingTop: '120px' }}>
        <div className="container text-center">
          <h2 className="hero-title">{t('web.support.title', 'Help Center &')} <span className="text-gradient">{t('web.support.title_gradient', 'Support')}</span></h2>
          <p className="hero-subtitle">{t('web.support.subtitle', 'How can we help you today? Find answers to common questions or reach out to our team.')}</p>
        </div>
      </section>

      <section id="faq" className="section">
        <div className="container">
          <h3 className="section-title text-center">{t('web.support.faq_title', 'Frequently Asked Questions')}</h3>
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
          <h3 className="section-title text-center">{t('web.support.contact_title', 'Contact Support')}</h3>
          <div className="contact-card">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">{t('web.support.form.name_label', 'Your Name')}</label>
                <input type="text" id="name" name="name" required placeholder={t('web.support.form.name_placeholder', 'John Doe')} />
              </div>
              <div className="form-group">
                <label htmlFor="email">{t('web.support.form.email_label', 'Email Address')}</label>
                <input type="email" id="email" name="email" required placeholder={t('web.support.form.email_placeholder', 'john@example.com')} />
              </div>
              <div className="form-group">
                <label htmlFor="topic">{t('web.support.form.topic_label', 'Topic')}</label>
                <select id="topic" name="topic" required>
                  <option value="">{t('web.support.form.topic_default', 'Select an issue')}</option>
                  <option value="connection">{t('web.support.form.topic_connection', 'Connection Issue')}</option>
                  <option value="billing">{t('web.support.form.topic_billing', 'Billing & Subscription')}</option>
                  <option value="bug">{t('web.support.form.topic_bug', 'Report a Bug')}</option>
                  <option value="feature">{t('web.support.form.topic_feature', 'Feature Request')}</option>
                  <option value="other">{t('web.support.form.topic_other', 'Other')}</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">{t('web.support.form.message_label', 'Message')}</label>
                <textarea id="message" name="message" rows="5" required placeholder={t('web.support.form.message_placeholder', 'Please describe your issue in detail...')}></textarea>
              </div>
              <button type="submit" className="btn btn-primary">{t('web.support.form.submit', 'Send Message')}</button>
              {formSuccess && (
                <div className="success-msg">{t('web.support.form.success', 'Your message has been sent successfully. We will get back to you soon!')}</div>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SupportPage;
