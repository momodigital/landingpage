import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Head>
        <title>LandingPage | MomoDigital</title>
        <meta name="description" content="Landing page keren dari MomoDigital" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🚀</text></svg>" />
      </Head>

      <div style={{
        fontFamily: 'system-ui, -apple-system, sans-serif',
        margin: 0,
        padding: 0,
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white'
      }}>
        {/* Header */}
        <header style={{
          padding: '20px',
          textAlign: 'center',
          borderBottom: '1px solid rgba(255,255,255,0.1)'
        }}>
          <h1 style={{ margin: 0, fontSize: '2.5rem' }}>🚀 MomoDigital</h1>
          <p style={{ opacity: 0.9 }}>Landing Page Next.js</p>
        </header>

        {/* Hero Section */}
        <main style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '60px 20px',
          textAlign: 'center'
        }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '20px' }}>
            Selamat Datang di Landing Page Saya
          </h2>
          <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 40px', opacity: 0.9 }}>
            Ini adalah landing page sederhana dengan Next.js yang sudah terhubung ke GitHub dan siap deploy ke Vercel.
          </p>

          {/* Tombol Interaktif */}
          <button
            onClick={() => setCount(count + 1)}
            style={{
              backgroundColor: 'white',
              color: '#764ba2',
              border: 'none',
              padding: '15px 30px',
              fontSize: '1.1rem',
              borderRadius: '50px',
              cursor: 'pointer',
              fontWeight: 'bold',
              transition: 'transform 0.2s',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          >
            Klik Saya! {count > 0 && `(${count})`}
          </button>

          {/* Cards Section */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px',
            marginTop: '60px'
          }}>
            {[
              { emoji: '⚡', title: 'Cepat', desc: 'Dioptimasi dengan Next.js untuk performa maksimal' },
              { emoji: '📱', title: 'Responsif', desc: 'Tampil sempurna di semua perangkat' },
              { emoji: '🔍', title: 'SEO Friendly', desc: 'Mudah ditemukan di mesin pencari' },
              { emoji: '🚀', title: 'Auto Deploy', desc: 'Update otomatis via GitHub + Vercel' }
            ].map((item, index) => (
              <div key={index} style={{
                backgroundColor: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
                padding: '30px',
                borderRadius: '15px',
                border: '1px solid rgba(255,255,255,0.2)'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '15px' }}>{item.emoji}</div>
                <h3 style={{ marginBottom: '10px' }}>{item.title}</h3>
                <p style={{ opacity: 0.8 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </main>

        {/* Footer */}
        <footer style={{
          textAlign: 'center',
          padding: '30px',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          marginTop: '40px'
        }}>
          <p>© 2024 MomoDigital. Dibuat dengan ❤️ untuk landing page pertama</p>
          <p style={{ opacity: 0.7, fontSize: '0.9rem' }}>
            Repository: github.com/momodigital/landingpage
          </p>
        </footer>
      </div>
    </>
  )
                     }
