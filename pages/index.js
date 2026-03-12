import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>PrediktorAI - Landing Page</title>
        <meta name="description" content="PrediktorAI landing page" />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="#" />
      </Head>

      {/* CSS Global untuk Background Hitam */}
      <style jsx global>{`
        body {
          background: #000;
          color: #fff;
          font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          margin: 0;
          padding: 0;
          background-image: radial-gradient(circle, #111 10%, #000 90%);
          min-height: 100vh;
        }
        
        * {
          box-sizing: border-box;
        }
      `}</style>

      <style jsx>{`
        .container {
          max-width: 450px;
          margin: 0 auto;
          padding: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .logo-wrap { 
          margin-bottom: 20px; 
          text-align: center; 
        }

        .logo-placeholder {
          position: relative;
          width: 200px;
          height: 60px;
          background: #1a1a1a;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #00ff00;
          color: #00ff00;
          font-size: 20px;
          font-weight: bold;
          text-decoration: none;
        }

        .welcome { 
          text-align: center; 
          margin-bottom: 15px; 
        }
        
        .welcome h1 {
          font-size: 11px;
          color: #00ff2a;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin: 0;
        }

        .hologram-frame {
          position: relative;
          width: 100%;
          max-width: 320px;
          margin-bottom: 25px;
          border: 1px solid #15ff00;
          background: #000;
          padding: 3px;
          box-shadow: 0 0 15px rgb(9, 255, 0);
          border-radius: 8px;
          overflow: hidden;
        }

        .scanline {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: #ffffff;
          z-index: 10;
          animation: scan 4s linear infinite;
        }

        @keyframes scan {
          0% { transform: translateY(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(300px); opacity: 0; }
        }

        .banner-placeholder {
          position: relative;
          width: 100%;
          height: 300px;
          background: linear-gradient(45deg, #006600, #000066);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 24px;
          font-weight: bold;
          text-shadow: 0 0 10px #00ff00;
        }

        .main-btn-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          width: 100%;
          margin-bottom: 15px;
        }

        .btn-main {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 13px 0;
          text-align: center;
          font-weight: bold;
          font-size: 14px;
          text-decoration: none;
          color: #fff;
          text-transform: uppercase;
          border-radius: 6px;
          transition: 0.3s;
          cursor: pointer;
        }

        .btn-about { 
          border: 2px solid #01fd01; 
          background: transparent; 
          color: #01fd01; 
        }
        
        .btn-about:hover {
          background: rgba(1, 253, 1, 0.1);
          box-shadow: 0 0 15px #01fd01;
        }
        
        .btn-contact { 
          border: 2px solid #01fd01; 
          color: #01fd01; 
          background: transparent;
        }
        
        .btn-contact:hover {
          background: rgba(1, 253, 1, 0.1);
          box-shadow: 0 0 15px #01fd01;
        }

        .sub-menu-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 10px;
          width: 100%;
          margin-bottom: 30px;
        }

        .btn-sub {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 12px 5px;
          background: transparent;
          border: 1px solid #01fd01;
          border-radius: 6px;
          text-decoration: none;
          color: #01fd01;
          font-size: 10px;
          font-weight: bold;
          transition: 0.3s;
          cursor: pointer;
        }

        .btn-sub:hover { 
          border-color: #01fd01; 
          color: #01fd01;
          background: rgba(1, 253, 1, 0.1);
          box-shadow: 0 0 10px #01fd01;
        }

        .icon-svg { 
          width: 22px; 
          height: 22px; 
          margin-bottom: 5px; 
          fill: #01fd01; 
        }
        
        .icon-main { 
          width: 18px; 
          height: 18px; 
          fill: currentColor; 
        }

        .running-text {
          width: 100%;
          background: transparent;
          border: 1px solid #00f511;
          padding: 7px;
          margin-bottom: 20px;
          font-size: 11px;
          color: #0af802;
          text-align: center;
          font-weight: bold;
          border-radius: 4px;
          position: relative;
          overflow: hidden;
          text-shadow: 2px 0 #000000;
          animation: cyber-glitch 0.2s infinite;
        }

        @keyframes cyber-glitch {
          0% { transform: translate(0); text-shadow: 2px 0 #000000; }
          5% { transform: translate(-2px, 1px); text-shadow: -2px 0 #000000; }
          10% { transform: translate(2px, -1px); clip-path: inset(10% 0 30% 0); }
          15% { transform: translate(-1px, 2px); clip-path: inset(40% 0 10% 0); }
          20% { transform: translate(0); clip-path: none; text-shadow: 2px 0 #000000; }
          100% { transform: translate(0); }
        }

        .running-text::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: repeating-linear-gradient(0deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 2px);
          pointer-events: none;
        }

        .footer-text { 
          font-size: 10px; 
          color: #ffffff; 
          text-align: center; 
        }
        
        .footer-text a { 
          color: #00ff0d; 
          text-decoration: none;
          transition: 0.3s;
        }
        
        .footer-text a:hover {
          text-shadow: 0 0 8px #00ff0d;
        }
      `}</style>

      <div className="container">
        {/* Logo - Placeholder */}
        <div className="logo-wrap">
          <a href="#" rel="noopener noreferrer" target="_blank" className="logo-placeholder">
            LOGO
          </a>
        </div>

        {/* Welcome Text */}
        <div className="welcome">
          <h1>
            PREDIKTORAI ✈️ Landing Page Siap Diisi dengan Link Anda
          </h1>
        </div>

        {/* Running Text */}
        <div className="running-text">
          SELAMAT DATANG DI PREDIKTORAI - LANDING PAGE SIAP PAKAI
        </div>

        {/* Banner - Placeholder */}
        <div className="hologram-frame">
          <div className="scanline"></div>
          <div className="banner-placeholder">
            BANNER
          </div>
        </div>

        {/* Tombol About & Contact */}
        <div className="main-btn-grid">
          <a href="#" rel="noopener noreferrer" target="_blank" className="btn-main btn-about">
            <svg className="icon-main" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
            </svg>
            ABOUT
          </a>
          <a href="#" rel="noopener noreferrer" target="_blank" className="btn-main btn-contact">
            <svg className="icon-main" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            CONTACT
          </a>
        </div>

        {/* Sub Menu Grid */}
        <div className="sub-menu-grid">
          <a href="#" rel="noopener noreferrer" target="_blank" className="btn-sub">
            <svg className="icon-svg" viewBox="0 0 24 24">
              <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1 0 1.71-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
            </svg>
            <span>LINK</span>
          </a>
          <a href="#" rel="noopener noreferrer" target="_blank" className="btn-sub">
            <svg className="icon-svg" viewBox="0 0 24 24">
              <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
            </svg>
            <span>PREDIKSI</span>
          </a>
          <a href="#" rel="noopener noreferrer" target="_blank" className="btn-sub">
            <svg className="icon-svg" viewBox="0 0 24 24">
              <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
            </svg>
            <span>LIVECHAT</span>
          </a>
        </div>

        {/* Footer */}
        <p className="footer-text">
          © 2026 • 
          <a href="#" rel="noopener noreferrer" target="_blank"> PREDIKTORAI </a>
          • ALL RIGHTS RESERVED
        </p>
      </div>
    </>
  )
}