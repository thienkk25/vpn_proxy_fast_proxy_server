import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const MarketingPage = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main style={{ position: 'relative', zIndex: 10 }}>
      {/* 1. Hero Section */}
      <section className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '100px' }}>
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="badge"
          >
            {t('web.marketing.badge', 'Next-Generation VPN Architecture')}
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hero-title"
          >
            {t('web.marketing.hero_title', 'Secure Your')} <span className="text-gradient">{t('web.marketing.hero_title_gradient', 'Digital Life')}</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hero-subtitle"
          >
            {t('web.marketing.hero_subtitle', 'Experience military-grade encryption, ultra-fast global servers, and a strict no-logs policy. Your online privacy, finally guaranteed.')}
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <button className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '18px' }}>{t('web.marketing.btn_get_started', 'Get Started Free')}</button>
            <button className="btn btn-outline" style={{ padding: '16px 32px', fontSize: '18px', background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.2)', color: 'white' }}>{t('web.marketing.btn_view_features', 'View Features')}</button>
          </motion.div>
        </div>
      </section>

      {/* 2. Key Features Section */}
      <section className="section" id="features" style={{ paddingBottom: '100px' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-center" 
            style={{ marginBottom: '60px' }}
          >
            <h2 className="section-title">{t('web.features.title', 'Why Choose VPN Proxy?')}</h2>
            <p style={{ color: 'var(--text-muted)', marginTop: '16px' }}>{t('web.features.subtitle', 'Built for performance, designed for privacy.')}</p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            {/* Feature 1 */}
            <motion.div 
              className="glass-card" 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(6, 182, 212, 0.2)" }}
              style={{ padding: '40px' }}
            >
              <div style={{ width: '60px', height: '60px', borderRadius: '16px', background: 'rgba(6, 182, 212, 0.1)', color: 'var(--primary-cyan)', fontSize: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', border: '1px solid rgba(6, 182, 212, 0.2)' }}>
                🛡️
              </div>
              <h3 style={{ fontSize: '22px', marginBottom: '16px' }}>{t('web.features.encryption_title', 'Military-Grade Encryption')}</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
                {t('web.features.encryption_desc', 'Your data is protected by AES-256 encryption, ensuring that ISPs, hackers, and governments cannot intercept your internet traffic.')}
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              className="glass-card" 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59, 130, 246, 0.2)" }}
              style={{ padding: '40px' }}
            >
              <div style={{ width: '60px', height: '60px', borderRadius: '16px', background: 'rgba(59, 130, 246, 0.1)', color: 'var(--primary-blue)', fontSize: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
                ⚡
              </div>
              <h3 style={{ fontSize: '22px', marginBottom: '16px' }}>{t('web.features.speed_title', 'Ultra-Fast Servers')}</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
                {t('web.features.speed_desc', 'Connect to our optimized global network. Enjoy seamless streaming, gaming, and browsing without any bandwidth throttling.')}
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div 
              className="glass-card" 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(139, 92, 246, 0.2)" }}
              style={{ padding: '40px' }}
            >
              <div style={{ width: '60px', height: '60px', borderRadius: '16px', background: 'rgba(139, 92, 246, 0.1)', color: 'var(--accent-purple)', fontSize: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', border: '1px solid rgba(139, 92, 246, 0.2)' }}>
                👁️‍🗨️
              </div>
              <h3 style={{ fontSize: '22px', marginBottom: '16px' }}>{t('web.features.nologs_title', 'Strict No-Logs Policy')}</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
                {t('web.features.nologs_desc', 'We do not track, collect, or share your private data. What you do online is your business, and we keep it that way.')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Global Network Section */}
      <section className="section" id="servers" style={{ position: 'relative' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '60px', flexWrap: 'wrap' }}>
          <motion.div 
            style={{ flex: 1, minWidth: '300px' }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">{t('web.network.title', 'Global Server Network')}</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '18px', marginBottom: '32px' }}>
              {t('web.network.subtitle', 'Access content from anywhere in the world. Our massive network of high-speed servers ensures a stable connection no matter where you are.')}
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '16px', color: 'var(--text-muted)' }}><span style={{ color: 'var(--primary-cyan)' }}>✓</span> {t('web.network.bullet1', '5000+ Servers Worldwide')}</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '16px', color: 'var(--text-muted)' }}><span style={{ color: 'var(--primary-cyan)' }}>✓</span> {t('web.network.bullet2', '60+ Countries Available')}</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '16px', color: 'var(--text-muted)' }}><span style={{ color: 'var(--primary-cyan)' }}>✓</span> {t('web.network.bullet3', 'Unlimited Server Switches')}</li>
            </ul>
          </motion.div>
          
          {/* Mock Server List Glass Card */}
          <motion.div 
            style={{ flex: 1, minWidth: '300px' }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card" style={{ padding: '0', overflow: 'hidden' }}>
              <div style={{ padding: '20px', borderBottom: '1px solid var(--border-glass)', background: 'rgba(255,255,255,0.02)' }}>
                <h4 style={{ fontWeight: '600' }}>{t('web.network.top_locations', 'Top Locations')}</h4>
              </div>
              <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ fontSize: '24px' }}>🇺🇸</span> <span>{t('united_states', 'United States')}</span>
                  </div>
                  <span style={{ color: '#22c55e', fontSize: '12px' }}>● 12ms</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ fontSize: '24px' }}>🇬🇧</span> <span>{t('united_kingdom', 'United Kingdom')}</span>
                  </div>
                  <span style={{ color: '#22c55e', fontSize: '12px' }}>● 28ms</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ fontSize: '24px' }}>🇯🇵</span> <span>{t('japan', 'Japan')}</span>
                  </div>
                  <span style={{ color: '#eab308', fontSize: '12px' }}>● 85ms</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ fontSize: '24px' }}>🇸🇬</span> <span>{t('singapore', 'Singapore')}</span>
                  </div>
                  <span style={{ color: '#22c55e', fontSize: '12px' }}>● 15ms</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section text-center" style={{ position: 'relative', marginTop: '100px', marginBottom: '100px' }}>
        <motion.div 
          className="container glass-card"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ padding: '60px 40px', background: 'rgba(6, 182, 212, 0.05)', border: '1px solid rgba(6, 182, 212, 0.2)' }}
        >
          <h2 className="section-title" style={{ color: 'white' }}>{t('web.cta.title', 'Ready to take back your privacy?')}</h2>
          <p style={{ fontSize: '18px', opacity: 0.8, marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>
            {t('web.cta.subtitle', 'Join thousands of users who trust VPN Proxy for their daily internet security. Download now and start your free trial.')}
          </p>
          <motion.a 
            href="#download" 
            className="btn btn-primary btn-lg" 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ padding: '16px 40px', fontSize: '18px' }}
          >
            {t('web.cta.btn_download', 'Download on App Store')}
          </motion.a>
        </motion.div>
      </section>
    </main>
  );
};

export default MarketingPage;
