import Head from 'next/head'
import { useState, useRef, useEffect } from 'react'

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [messages, setMessages] = useState([
    { text: 'Halo! Ada yang bisa saya bantu?', isUser: false }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const chatEndRef = useRef(null)

  // Auto scroll ke pesan terbaru
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // Fungsi untuk mendapatkan respons AI (simulasi dulu)
  const getAIResponse = async (userMessage) => {
  try {
    const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyDqpzPrzX_22v6gPtysMv9H9foAQB633G0', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: userMessage
          }]
        }]
      })
    })

    const data = await response.json()
    return data.candidates[0].content.parts[0].text
  } catch (error) {
    console.error('Error:', error)
    return 'Maaf, terjadi kesalahan. Silakan coba lagi.'
  }
}

  const handleSendMessage = async (e) => {
    e?.preventDefault()
    if (!inputMessage.trim() || isLoading) return

    // Tambah pesan user
    const userMessage = inputMessage
    setMessages(prev => [...prev, { text: userMessage, isUser: true }])
    setInputMessage('')
    setIsLoading(true)

    // Dapatkan respons AI
    const aiResponse = await getAIResponse(userMessage)
    
    // Tambah respons AI
    setMessages(prev => [...prev, { text: aiResponse, isUser: false }])
    setIsLoading(false)
  }

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
          position: relative;
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

        .btn-sub.active {
          background: rgba(1, 253, 1, 0.2);
          box-shadow: 0 0 15px #01fd01;
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

        /* Chat Widget Styles */
        .chat-widget {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 1000;
        }

        .chat-button {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, #00ff00, #00cc00);
          border: 2px solid #fff;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 15px rgba(0, 255, 0, 0.3);
          transition: all 0.3s ease;
          animation: pulse 2s infinite;
        }

        .chat-button:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 20px rgba(0, 255, 0, 0.5);
        }

        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(0, 255, 0, 0.4); }
          70% { box-shadow: 0 0 0 15px rgba(0, 255, 0, 0); }
          100% { box-shadow: 0 0 0 0 rgba(0, 255, 0, 0); }
        }

        .chat-icon {
          width: 30px;
          height: 30px;
          fill: #000;
        }

        .chat-box {
          position: fixed;
          bottom: 90px;
          right: 20px;
          width: 350px;
          height: 500px;
          background: #111;
          border: 2px solid #00ff00;
          border-radius: 15px;
          box-shadow: 0 5px 30px rgba(0, 255, 0, 0.2);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          animation: slideIn 0.3s ease;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .chat-header {
          background: linear-gradient(135deg, #00ff00, #00cc00);
          padding: 15px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #333;
        }

        .chat-header h3 {
          color: #000;
          margin: 0;
          font-size: 16px;
          font-weight: bold;
        }

        .close-button {
          background: none;
          border: none;
          color: #000;
          font-size: 24px;
          cursor: pointer;
          padding: 0;
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: 0.3s;
        }

        .close-button:hover {
          background: rgba(0, 0, 0, 0.1);
        }

        .chat-messages {
          flex: 1;
          overflow-y: auto;
          padding: 15px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .message {
          max-width: 80%;
          padding: 10px 15px;
          border-radius: 15px;
          font-size: 14px;
          line-height: 1.4;
          word-wrap: break-word;
          animation: messagePop 0.3s ease;
        }

        @keyframes messagePop {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .user-message {
          background: linear-gradient(135deg, #00ff00, #00cc00);
          color: #000;
          align-self: flex-end;
          border-bottom-right-radius: 5px;
        }

        .bot-message {
          background: #222;
          color: #00ff00;
          align-self: flex-start;
          border-bottom-left-radius: 5px;
          border: 1px solid #00ff00;
        }

        .chat-input-form {
          display: flex;
          padding: 15px;
          gap: 10px;
          border-top: 1px solid #333;
          background: #111;
        }

        .chat-input {
          flex: 1;
          padding: 10px;
          border: 1px solid #333;
          border-radius: 20px;
          background: #222;
          color: #fff;
          font-size: 14px;
          outline: none;
          transition: 0.3s;
        }

        .chat-input:focus {
          border-color: #00ff00;
          box-shadow: 0 0 10px rgba(0, 255, 0, 0.2);
        }

        .chat-input:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .send-button {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #00ff00;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: 0.3s;
        }

        .send-button:hover:not(:disabled) {
          transform: scale(1.1);
          box-shadow: 0 0 15px #00ff00;
        }

        .send-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .send-icon {
          width: 20px;
          height: 20px;
          fill: #000;
        }

        .typing-indicator {
          display: flex;
          gap: 5px;
          padding: 10px 15px;
          background: #222;
          border-radius: 15px;
          align-self: flex-start;
          border: 1px solid #00ff00;
        }

        .typing-indicator span {
          width: 8px;
          height: 8px;
          background: #00ff00;
          border-radius: 50%;
          animation: typing 1s infinite ease-in-out;
        }

        .typing-indicator span:nth-child(2) {
          animation-delay: 0.2s;
        }

        .typing-indicator span:nth-child(3) {
          animation-delay: 0.4s;
        }

        @keyframes typing {
          0%, 60%, 100% {
            transform: translateY(0);
          }
          30% {
            transform: translateY(-10px);
          }
        }

        .message-time {
          font-size: 10px;
          color: #666;
          margin-top: 5px;
          text-align: right;
        }

        .bot-message .message-time {
          color: #00ff00;
          opacity: 0.7;
        }

        /* Overlay untuk mobile */
        .chat-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          z-index: 999;
          display: none;
        }

        @media (max-width: 480px) {
          .chat-box {
            width: 100%;
            height: 100%;
            bottom: 0;
            right: 0;
            border-radius: 0;
          }
          
          .chat-overlay {
            display: block;
          }
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

        {/* Banner - dengan tag img biasa */}
        <div className="hologram-frame">
          <div className="scanline"></div>
          <img 
            src="https://i.ibb.co.com/SwnWkqXn/IMG-20260309-WA0007.jpg" 
            alt="Banner PrediktorAI"
            style={{
              width: '100%',
              height: '300px',
              objectFit: 'cover',
              display: 'block'
            }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://via.placeholder.com/320x300?text=Banner+PrediktorAI';
              e.target.style.objectFit = 'contain';
            }}
          />
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
          <a 
            href="#" 
            rel="noopener noreferrer" 
            target="_blank" 
            className={`btn-sub ${isChatOpen ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault()
              setIsChatOpen(true)
            }}
          >
            <svg className="icon-svg" viewBox="0 0 24 24">
              <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
            </svg>
            <span>LIVECHAT</span>
          </a>
          <a href="#" rel="noopener noreferrer" target="_blank" className="btn-sub">
            <svg className="icon-svg" viewBox="0 0 24 24">
              <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
            </svg>
            <span>PREDIKSI</span>
          </a>
        </div>

        {/* Footer */}
        <p className="footer-text">
          © 2026 • 
          <a href="#" rel="noopener noreferrer" target="_blank"> PREDIKTORAI </a>
          • ALL RIGHTS RESERVED
        </p>
      </div>

      {/* Chat Widget */}
      <div className="chat-widget">
        {!isChatOpen && (
          <div className="chat-button" onClick={() => setIsChatOpen(true)}>
            <svg className="chat-icon" viewBox="0 0 24 24">
              <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z" />
            </svg>
          </div>
        )}

        {isChatOpen && (
          <>
            <div className="chat-overlay" onClick={() => setIsChatOpen(false)} />
            <div className="chat-box">
              <div className="chat-header">
                <h3>🤖 AI Assistant</h3>
                <button className="close-button" onClick={() => setIsChatOpen(false)}>×</button>
              </div>

              <div className="chat-messages">
                {messages.map((msg, index) => (
                  <div key={index}>
                    <div className={`message ${msg.isUser ? 'user-message' : 'bot-message'}`}>
                      {msg.text}
                    </div>
                    <div className="message-time">
                      {new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>

              <form className="chat-input-form" onSubmit={handleSendMessage}>
                <input
                  type="text"
                  className="chat-input"
                  placeholder="Ketik pesan..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  disabled={isLoading}
                />
                <button 
                  type="submit" 
                  className="send-button"
                  disabled={isLoading || !inputMessage.trim()}
                >
                  <svg className="send-icon" viewBox="0 0 24 24">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                  </svg>
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </>
  )
}
