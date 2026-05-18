import { useEffect } from 'react';

const MarketingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      {/* 1. Hero Section: The Radar & Earth View */}
      <section className="hero-cyber">
        <div className="earth-curve"></div>
        
        <div className="container text-center" style={{ zIndex: 10 }}>
          <p style={{ color: 'var(--text-muted)' }}>Welcome to</p>
          <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '40px' }}>VPN Proxy: Fast Proxy Server</h2>
          
          <div className="connecting-time">
            <h3>Connecting Time</h3>
            <div className="time">00:00</div>
          </div>

          <div className="radar-container">
            <div className="radar-grid"></div>
            <div className="radar-circle rc-1"></div>
            <div className="radar-circle rc-2"></div>
            <div className="radar-circle rc-3"></div>
            <div className="radar-sweep"></div>
            
            <button className="btn-start">
              <i className="fingerprint">◎</i>
              Start
            </button>
          </div>

          <div className="ip-display">
            <span style={{ opacity: 0.5 }}>🛡️</span>
            <span>Your IP: <strong style={{ color: 'white' }}>14.232.211.101</strong></span>
          </div>
        </div>
      </section>

      {/* 2. Dashboard Section: Shield & Tools Grid */}
      <section className="dashboard-section container">
        <div className="glass-card" style={{ marginBottom: '24px' }}>
          <div className="shield-card">
            <div className="shield-header">
              <div className="shield-icon">🛡️</div>
              <div className="shield-info">
                <h3>VPN Shield</h3>
                <p>Real-time threat protection</p>
              </div>
            </div>
            <div className="gauge-badge" style={{ background: 'rgba(239, 68, 68, 0.2)', color: '#ef4444' }}>
              0 Low
            </div>
          </div>
          
          <div className="shield-stats">
            <div className="stat-item">
              <div className="val"><span style={{ color: '#ef4444' }}>⊘</span> 0</div>
              <div className="lbl">Blocked</div>
            </div>
            <div className="stat-item">
              <div className="val"><span style={{ color: 'var(--primary-cyan)' }}>🌐</span> 0</div>
              <div className="lbl">Scanned</div>
            </div>
            <div className="stat-item">
              <div className="val"><span style={{ color: '#eab308' }}>📅</span> 0</div>
              <div className="lbl">Today</div>
            </div>
          </div>
        </div>

        <div className="tools-grid">
          <div className="tool-item">
            <div className="tool-icon bg-purple">🛡️</div>
            <div className="tool-lbl">Secure<br/>Browser</div>
          </div>
          <div className="tool-item">
            <div className="tool-icon bg-green">📶</div>
            <div className="tool-lbl">WiFi<br/>Scan</div>
          </div>
          <div className="tool-item">
            <div className="tool-icon bg-pink">🗄️</div>
            <div className="tool-lbl">DNS<br/>Test</div>
          </div>
          <div className="tool-item">
            <div className="tool-icon bg-blue">📈</div>
            <div className="tool-lbl">Timeline</div>
          </div>
        </div>

        <div className="glass-card" style={{ padding: '16px 24px', marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '24px' }}>🌍</span>
            <span style={{ fontWeight: '600', fontSize: '18px' }}>Auto select</span>
          </div>
          <span style={{ color: 'var(--text-muted)' }}>&gt;</span>
        </div>

        <div className="speed-cards">
          <div className="glass-card speed-card">
            <div className="speed-icon">↓</div>
            <div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Download</div>
              <div style={{ fontSize: '18px', fontWeight: '700' }}>0 B/s</div>
            </div>
          </div>
          <div className="glass-card speed-card">
            <div className="speed-icon">↑</div>
            <div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Upload</div>
              <div style={{ fontSize: '18px', fontWeight: '700' }}>0 B/s</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Speed Test Section */}
      <section className="speedometer-section">
        <div className="container">
          <h2 className="text-center" style={{ marginBottom: '60px', fontSize: '28px' }}>Speed Test</h2>
          
          <div className="gauge-container">
            <svg viewBox="0 0 200 200" className="gauge-svg">
              <path className="gauge-arc" d="M 40 160 A 80 80 0 1 1 160 160" />
              <path className="gauge-progress" d="M 40 160 A 80 80 0 1 1 160 160" />
            </svg>
            <div className="gauge-needle"></div>
            <div className="gauge-center"></div>
            
            <div className="gauge-text">
              <div className="speed-val">0.0</div>
              <div className="speed-lbl">Mbps</div>
              <div className="gauge-badge">READY</div>
            </div>
          </div>

          <div className="tools-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', marginTop: '60px', maxWidth: '800px', margin: '60px auto 0' }}>
            <div className="glass-card tool-item" style={{ alignItems: 'flex-start', padding: '20px' }}>
              <div className="tool-icon bg-orange" style={{ width: '40px', height: '40px', fontSize: '16px', marginBottom: '16px' }}>⇆</div>
              <div className="tool-lbl" style={{ color: 'var(--text-muted)' }}>Ping</div>
              <div style={{ fontSize: '24px', fontWeight: '700' }}>- -</div>
            </div>
            <div className="glass-card tool-item" style={{ alignItems: 'flex-start', padding: '20px' }}>
              <div className="tool-icon bg-blue" style={{ width: '40px', height: '40px', fontSize: '16px', marginBottom: '16px' }}>↓</div>
              <div className="tool-lbl" style={{ color: 'var(--text-muted)' }}>Download</div>
              <div style={{ fontSize: '24px', fontWeight: '700' }}>- - <span style={{fontSize:'12px', color:'var(--text-muted)'}}>Mbps</span></div>
            </div>
            <div className="glass-card tool-item" style={{ alignItems: 'flex-start', padding: '20px' }}>
              <div className="tool-icon bg-purple" style={{ width: '40px', height: '40px', fontSize: '16px', marginBottom: '16px' }}>↑</div>
              <div className="tool-lbl" style={{ color: 'var(--text-muted)' }}>Upload</div>
              <div style={{ fontSize: '24px', fontWeight: '700' }}>- - <span style={{fontSize:'12px', color:'var(--text-muted)'}}>Mbps</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Explore Section (Browser view mock) */}
      <section className="section bg-light">
        <div className="container" style={{ maxWidth: '800px' }}>
          <p style={{ color: 'var(--text-muted)' }}>Good afternoon ☀️</p>
          <h2 style={{ fontSize: '36px', fontWeight: '800', marginBottom: '40px' }}>What do you want to explore today?</h2>
          
          <div className="glass-card" style={{ display: 'flex', padding: '12px 12px 12px 24px', borderRadius: '100px', alignItems: 'center', marginBottom: '40px' }}>
            <span style={{ color: 'var(--text-muted)', fontSize: '20px', marginRight: '16px' }}>🔍</span>
            <input 
              type="text" 
              placeholder="Search or enter address..." 
              style={{ background: 'transparent', border: 'none', color: 'white', outline: 'none', width: '100%', fontSize: '16px' }}
              disabled
            />
            <button className="btn-primary" style={{ padding: '12px 24px', borderRadius: '100px', minWidth: '60px' }}>→</button>
          </div>

          <h4 style={{ fontSize: '13px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '24px' }}>Quick Access</h4>
          
          <div className="explore-grid">
            <div className="explore-item">
              <div className="explore-icon bg-blue">🔍</div>
              <span className="tool-lbl">Google</span>
            </div>
            <div className="explore-item">
              <div className="explore-icon bg-red">▶️</div>
              <span className="tool-lbl">YouTube</span>
            </div>
            <div className="explore-item">
              <div className="explore-icon" style={{ background: '#1877F2' }}>f</div>
              <span className="tool-lbl">Facebook</span>
            </div>
            <div className="explore-item">
              <div className="explore-icon" style={{ background: '#111' }}>W</div>
              <span className="tool-lbl">Wikipedia</span>
            </div>
            <div className="explore-item">
              <div className="explore-icon bg-orange">💬</div>
              <span className="tool-lbl">Reddit</span>
            </div>
            <div className="explore-item">
              <div className="explore-icon" style={{ background: '#333' }}>&lt;/&gt;</div>
              <span className="tool-lbl">GitHub</span>
            </div>
            <div className="explore-item">
              <div className="explore-icon" style={{ background: '#111' }}>𝕏</div>
              <span className="tool-lbl">X / Twitter</span>
            </div>
            <div className="explore-item">
              <div className="explore-icon" style={{ background: '#f59e0b' }}>🛒</div>
              <span className="tool-lbl">Amazon</span>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action at the bottom */}
      <section className="section text-center" style={{ background: 'var(--primary-cyan)', color: 'black' }}>
        <div className="container">
          <h2 style={{ fontSize: '36px', fontWeight: '800', marginBottom: '20px', color: 'black' }}>Experience the ultimate privacy</h2>
          <p style={{ fontSize: '18px', opacity: 0.8, marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>
            Don't let trackers monitor your activity. Download our app and take control of your digital life.
          </p>
          <a href="#download" className="btn btn-primary btn-lg" style={{ background: '#111', color: 'white', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>Download Now</a>
        </div>
      </section>
    </main>
  );
};

export default MarketingPage;
