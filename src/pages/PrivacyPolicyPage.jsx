import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const PrivacyPolicyPage = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main style={{ position: 'relative', zIndex: 10 }}>
      <section className="section" style={{ paddingTop: '120px' }}>
        <div className="container text-center">
          <h2 className="hero-title">{t('web.privacy.title', 'Privacy')} <span className="text-gradient">{t('web.privacy.title_gradient', 'Policy')}</span></h2>
          <p className="hero-subtitle">{t('web.privacy.subtitle', 'Your privacy is our top priority. Learn how we handle your data.')}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-card" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
            <p style={{ marginBottom: '30px', fontWeight: '500' }}>
              {t('web.legal.last_updated', 'Last updated: May 2026')}
            </p>
            
            <p style={{ marginBottom: '40px', color: 'var(--text-muted)' }}>
              {t('web.privacy.intro', 'Welcome to VPN Proxy: Fast Proxy Server ("we", "our", "us"). Your privacy is our top priority. This Privacy Policy explains how we collect, use, and protect your information when you use our VPN application.')}
            </p>

            <h3 style={{ marginBottom: '16px', fontSize: '20px' }}>{t('web.privacy.section1_title', '1. STRICT NO-LOGS POLICY (Important)')}</h3>
            <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
              {t('web.privacy.section1_desc', 'We are firmly committed to your digital privacy. When you connect to our VPN service, we DO NOT collect, log, or store:')}
            </p>
            <ul style={{ marginBottom: '30px', color: 'var(--text-muted)', paddingLeft: '20px' }}>
              <li style={{ marginBottom: '8px' }}>{t('web.privacy.section1_li1', 'Your browsing history')}</li>
              <li style={{ marginBottom: '8px' }}>{t('web.privacy.section1_li2', 'Your traffic destinations or metadata')}</li>
              <li style={{ marginBottom: '8px' }}>{t('web.privacy.section1_li3', 'Your DNS queries')}</li>
              <li style={{ marginBottom: '8px' }}>{t('web.privacy.section1_li4', 'Your original IP address or the VPN IP address assigned to you')}</li>
            </ul>

            <h3 style={{ marginBottom: '16px', fontSize: '20px' }}>{t('web.privacy.section2_title', '2. Information We Collect')}</h3>
            <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
              {t('web.privacy.section2_desc', 'To provide, maintain, and improve our service, we only collect the absolute minimum data necessary:')}
            </p>
            <ul style={{ marginBottom: '30px', color: 'var(--text-muted)', paddingLeft: '20px' }}>
              <li style={{ marginBottom: '8px' }}><strong>{t('account_information', 'Account Information')}:</strong> {t('web.privacy.section2_li1', 'Email address and basic profile information (only if you voluntarily choose to create an account).')}</li>
              <li style={{ marginBottom: '8px' }}><strong>{t('payment_information', 'Payment Information')}:</strong> {t('web.privacy.section2_li2', 'Subscriptions and payments are securely handled by third-party platforms. We do not collect or have access to your credit card details.')}</li>
              <li style={{ marginBottom: '8px' }}><strong>{t('diagnostic_data', 'Diagnostic & Usage Data')}:</strong> {t('web.privacy.section2_li3', 'We may collect non-identifying, anonymized data solely to improve app performance and stability.')}</li>
            </ul>

            <h3 style={{ marginBottom: '16px', fontSize: '20px' }}>{t('web.privacy.section3_title', '3. How We Use Your Information')}</h3>
            <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
              {t('web.privacy.section3_desc', 'We use the limited information we collect to:')}
            </p>
            <ul style={{ marginBottom: '30px', color: 'var(--text-muted)', paddingLeft: '20px' }}>
              <li style={{ marginBottom: '8px' }}>{t('web.privacy.section3_li1', 'Provide, operate, and troubleshoot the VPN service.')}</li>
              <li style={{ marginBottom: '8px' }}>{t('web.privacy.section3_li2', 'Process premium subscriptions and unlock features.')}</li>
              <li style={{ marginBottom: '8px' }}>{t('web.privacy.section3_li3', 'Provide customer support and respond to your inquiries. We do not and will never sell your personal data to any third parties.')}</li>
            </ul>

            <h3 style={{ marginBottom: '16px', fontSize: '20px' }}>{t('web.privacy.section4_title', '4. Third-Party Services')}</h3>
            <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
              {t('web.privacy.section4_desc', 'We utilize trusted third-party services to help operate our app, including:')}
            </p>
            <ul style={{ marginBottom: '30px', color: 'var(--text-muted)', paddingLeft: '20px' }}>
              <li style={{ marginBottom: '8px' }}>{t('web.privacy.section4_li1', 'Payment and subscription processors (Apple, Google, RevenueCat).')}</li>
              <li style={{ marginBottom: '8px' }}>{t('web.privacy.section4_li2', 'Analytics and crash reporting tools. These services are bound by their own strict privacy policies.')}</li>
            </ul>

            <h3 style={{ marginBottom: '16px', fontSize: '20px' }}>{t('web.privacy.section5_title', '5. Data Security')}</h3>
            <p style={{ marginBottom: '30px', color: 'var(--text-muted)' }}>
              {t('web.privacy.section5_desc', 'We implement industry-standard security measures, including strong encryption protocols, to protect your data. However, please be aware that no system can be guaranteed to be 100% secure.')}
            </p>

            <h3 style={{ marginBottom: '16px', fontSize: '20px' }}>{t('web.privacy.section6_title', '6. Data Retention and Deletion')}</h3>
            <p style={{ marginBottom: '30px', color: 'var(--text-muted)' }}>
              {t('web.privacy.section6_desc', 'We retain personal data only for as long as your account is active. You have the right to request the deletion of your account and all associated data at any time.')}
            </p>

            <h3 style={{ marginBottom: '16px', fontSize: '20px' }}>{t('web.privacy.section7_title', '7. Children’s Privacy')}</h3>
            <p style={{ marginBottom: '30px', color: 'var(--text-muted)' }}>
              {t('web.privacy.section7_desc', 'Our service is not intended for or directed at children under the age of 13. We do not knowingly collect personal information from children.')}
            </p>

            <h3 style={{ marginBottom: '16px', fontSize: '20px' }}>{t('web.privacy.section8_title', '8. Changes to This Policy')}</h3>
            <p style={{ marginBottom: '30px', color: 'var(--text-muted)' }}>
              {t('web.privacy.section8_desc', 'We may update this Privacy Policy from time to time. Your continued use of the app after any changes constitutes your acceptance of the updated policy.')}
            </p>

            <h3 style={{ marginBottom: '16px', fontSize: '20px' }}>{t('web.privacy.section9_title', '9. Contact Us')}</h3>
            <p style={{ marginBottom: '30px', color: 'var(--text-muted)' }}>
              {t('web.legal.contact_desc', 'If you have any questions, concerns, or wish to exercise your data rights, please contact us at:')}
              <br /><br />
              <strong>{t('email', 'Email')}:</strong> <a href="mailto:support.tn25@gmail.com">support.tn25@gmail.com</a>
            </p>

          </div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicyPage;
