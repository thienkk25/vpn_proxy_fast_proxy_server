import { useEffect } from 'react';
import { motion } from 'framer-motion';

const MarketingPage = () => {
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
            style={{ display: 'inline-block', padding: '8px 16px', background: 'rgba(6, 182, 212, 0.1)', border: '1px solid var(--primary-cyan)', borderRadius: '100px', color: 'var(--primary-cyan)', fontSize: '14px', fontWeight: '600', marginBottom: '24px' }}
          >
            Next-Generation VPN Architecture
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ fontSize: '64px', fontWeight: '800', lineHeight: 1.1, marginBottom: '24px', letterSpacing: '-1px' }}
          >
            Secure Your <span className="text-gradient">Digital Life</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ fontSize: '20px', color: 'var(--text-muted)', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}
          >
            Experience military-grade encryption, ultra-fast global servers, and a strict no-logs policy. Your online privacy, finally guaranteed.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}
          >
            <button className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '18px' }}>Get Started Free</button>
            <button className="btn btn-outline" style={{ padding: '16px 32px', fontSize: '18px', background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.2)', color: 'white' }}>View Features</button>
          </motion.div>
        </div>
      </section>

      {/* 2. Key Features Section */}
      <section className="section" id="features" style={{ background: 'linear-gradient(to bottom, transparent, rgba(7, 11, 20, 0.95) 20%)', paddingBottom: '100px' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-center" 
            style={{ marginBottom: '60px' }}
          >
            <h2 style={{ fontSize: '36px', fontWeight: '700' }}>Why Choose VPN Proxy?</h2>
            <p style={{ color: 'var(--text-muted)', marginTop: '16px' }}>Built for performance, designed for privacy.</p>
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
              <h3 style={{ fontSize: '22px', marginBottom: '16px' }}>Military-Grade Encryption</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
                Your data is protected by AES-256 encryption, ensuring that ISPs, hackers, and governments cannot intercept your internet traffic.
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
              <h3 style={{ fontSize: '22px', marginBottom: '16px' }}>Ultra-Fast Servers</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
                Connect to our optimized global network. Enjoy seamless streaming, gaming, and browsing without any bandwidth throttling.
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
              <h3 style={{ fontSize: '22px', marginBottom: '16px' }}>Strict No-Logs Policy</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
                We do not track, collect, or share your private data. What you do online is your business, and we keep it that way.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Global Network Section */}
      <section className="section" id="servers" style={{ background: 'rgba(7, 11, 20, 1)' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '60px', flexWrap: 'wrap' }}>
          <motion.div 
            style={{ flex: 1, minWidth: '300px' }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={{ fontSize: '40px', fontWeight: '800', marginBottom: '24px' }}>Global Server Network</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '18px', marginBottom: '32px' }}>
              Access content from anywhere in the world. Our massive network of high-speed servers ensures a stable connection no matter where you are.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '16px', color: 'var(--text-muted)' }}><span style={{ color: 'var(--primary-cyan)' }}>✓</span> 5000+ Servers Worldwide</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '16px', color: 'var(--text-muted)' }}><span style={{ color: 'var(--primary-cyan)' }}>✓</span> 60+ Countries Available</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '16px', color: 'var(--text-muted)' }}><span style={{ color: 'var(--primary-cyan)' }}>✓</span> Unlimited Server Switches</li>
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
                <h4 style={{ fontWeight: '600' }}>Top Locations</h4>
              </div>
              <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ fontSize: '24px' }}>🇺🇸</span> <span>United States</span>
                  </div>
                  <span style={{ color: '#22c55e', fontSize: '12px' }}>● 12ms</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ fontSize: '24px' }}>🇬🇧</span> <span>United Kingdom</span>
                  </div>
                  <span style={{ color: '#22c55e', fontSize: '12px' }}>● 28ms</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ fontSize: '24px' }}>🇯🇵</span> <span>Japan</span>
                  </div>
                  <span style={{ color: '#eab308', fontSize: '12px' }}>● 85ms</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ fontSize: '24px' }}>🇸🇬</span> <span>Singapore</span>
                  </div>
                  <span style={{ color: '#22c55e', fontSize: '12px' }}>● 15ms</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section text-center" style={{ background: 'var(--primary-cyan)', color: 'black' }}>
        <motion.div 
          className="container"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 style={{ fontSize: '36px', fontWeight: '800', marginBottom: '20px', color: 'black' }}>Ready to take back your privacy?</h2>
          <p style={{ fontSize: '18px', opacity: 0.8, marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>
            Join thousands of users who trust VPN Proxy for their daily internet security. Download now and start your free trial.
          </p>
          <motion.a 
            href="#download" 
            className="btn btn-primary btn-lg" 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ background: '#111', color: 'white', boxShadow: '0 10px 30px rgba(0,0,0,0.3)', padding: '16px 40px', fontSize: '18px' }}
          >
            Download on App Store
          </motion.a>
        </motion.div>
      </section>
    </main>
  );
};

export default MarketingPage;
