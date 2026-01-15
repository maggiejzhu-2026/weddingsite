import React, { useState } from 'react';

export default function WeddingWebsite() {
  const [rsvpData, setRsvpData] = useState({
    name: '',
    email: '',
    attending: '',
    guests: '1',
    dietaryNeeds: '',
    song: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const handleRsvp = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const scrollToSection = (id) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Stick figure couple SVG matching the save-the-date
  const StickCouple = ({ size = 200 }) => (
    <svg width={size} height={size * 0.75} viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Jordan - left figure (no hair) */}
      <circle cx="60" cy="28" r="16" stroke="#1a1a1a" strokeWidth="2.5" fill="none"/>
      <circle cx="54" cy="25" r="2" fill="#1a1a1a"/>
      <circle cx="66" cy="25" r="2" fill="#1a1a1a"/>
      <path d="M54 33 Q60 38 66 33" stroke="#1a1a1a" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <line x1="60" y1="44" x2="60" y2="85" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="60" y1="55" x2="38" y2="75" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="60" y1="55" x2="82" y2="70" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="60" y1="85" x2="42" y2="125" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="60" y1="85" x2="78" y2="125" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round"/>
      
      {/* Heart in the middle */}
      <path d="M100 58 C100 50 92 46 92 54 C92 62 100 70 100 70 C100 70 108 62 108 54 C108 46 100 50 100 58Z" fill="#e63946"/>
      
      {/* Maggie - right figure (with hair) */}
      <circle cx="140" cy="28" r="16" stroke="#1a1a1a" strokeWidth="2.5" fill="none"/>
      <circle cx="134" cy="25" r="2" fill="#1a1a1a"/>
      <circle cx="146" cy="25" r="2" fill="#1a1a1a"/>
      <path d="M134 33 Q140 38 146 33" stroke="#1a1a1a" strokeWidth="2" fill="none" strokeLinecap="round"/>
      {/* Hair - wavy lines on each side like the original */}
      <path d="M124 22 Q121 32 124 45" stroke="#1a1a1a" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M156 22 Q159 32 156 45" stroke="#1a1a1a" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <line x1="140" y1="44" x2="140" y2="85" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="140" y1="55" x2="118" y2="70" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="140" y1="55" x2="162" y2="75" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="140" y1="85" x2="122" y2="125" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="140" y1="85" x2="158" y2="125" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round"/>
      
      {/* Holding hands */}
      <line x1="82" y1="70" x2="118" y2="70" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  );

  const SmallHeart = () => (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="#e63946">
      <path d="M10 18 C10 18 2 12 2 7 C2 3 5 1 10 5 C15 1 18 3 18 7 C18 12 10 18 10 18Z"/>
    </svg>
  );

  // Simple stick figure icons for events
  const DrinksIcon = () => (
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {/* Wine glass */}
      <path d="M15 8 L15 8 L11 20 Q11 24 15 24 Q19 24 19 20 L15 8" />
      <line x1="15" y1="24" x2="15" y2="38" />
      <line x1="10" y1="38" x2="20" y2="38" />
      {/* Beer mug */}
      <rect x="28" y="12" width="12" height="22" rx="2" />
      <path d="M40 16 Q46 16 46 22 Q46 28 40 28" />
      <line x1="31" y1="18" x2="31" y2="28" />
      <line x1="34" y1="17" x2="34" y2="29" />
      <line x1="37" y1="18" x2="37" y2="28" />
    </svg>
  );

  const CeremonyIcon = () => (
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round">
      {/* Simple arch/arbor */}
      <path d="M10 42 L10 18 Q10 8 25 8 Q40 8 40 18 L40 42" fill="none" />
      {/* Heart at top */}
      <path d="M25 16 C25 13 22 12 22 14.5 C22 17 25 20 25 20 C25 20 28 17 28 14.5 C28 12 25 13 25 16Z" fill="#e63946" stroke="none"/>
      {/* Ground line */}
      <line x1="6" y1="42" x2="44" y2="42" />
    </svg>
  );

  const DinnerIcon = () => (
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round">
      {/* Plate */}
      <ellipse cx="25" cy="30" rx="16" ry="8" />
      {/* Fork */}
      <line x1="12" y1="10" x2="12" y2="22" />
      <line x1="10" y1="10" x2="10" y2="16" />
      <line x1="14" y1="10" x2="14" y2="16" />
      {/* Knife */}
      <line x1="38" y1="10" x2="38" y2="22" />
      <path d="M38 10 Q41 12 38 16" />
    </svg>
  );

  const ShuttleIcon = () => (
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {/* Bus body */}
      <rect x="6" y="16" width="38" height="20" rx="3" />
      {/* Windows */}
      <rect x="10" y="20" width="6" height="6" rx="1" />
      <rect x="19" y="20" width="6" height="6" rx="1" />
      <rect x="28" y="20" width="6" height="6" rx="1" />
      {/* Wheels */}
      <circle cx="14" cy="36" r="4" />
      <circle cx="36" cy="36" r="4" />
      {/* Front */}
      <line x1="38" y1="20" x2="42" y2="20" />
    </svg>
  );

  return (
    <div style={{
      fontFamily: "'Libre Baskerville', Georgia, serif",
      background: '#ffffff',
      minHeight: '100vh',
      color: '#1a1a1a',
      position: 'relative'
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Karla:wght@300;400;500&display=swap');
        
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        
        ::selection {
          background: #e63946;
          color: #ffffff;
        }
        
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .nav-link {
          color: #1a1a1a;
          text-decoration: none;
          font-family: 'Karla', sans-serif;
          font-size: 13px;
          letter-spacing: 1px;
          padding: 8px 0;
          transition: color 0.3s ease;
          cursor: pointer;
          text-transform: lowercase;
        }
        
        .nav-link:hover {
          color: #e63946;
        }
        
        .nav-link.active {
          color: #e63946;
        }
        
        .hero-names {
          font-size: clamp(2.5rem, 10vw, 5rem);
          font-weight: 400;
          letter-spacing: 0.02em;
          text-transform: lowercase;
          animation: fadeUp 1s ease-out;
        }
        
        .section-title {
          font-size: clamp(1.5rem, 4vw, 2rem);
          font-weight: 400;
          text-transform: lowercase;
          margin-bottom: 2rem;
        }
        
        .btn-primary {
          background: #1a1a1a;
          border: none;
          color: #ffffff;
          padding: 14px 40px;
          font-family: 'Karla', sans-serif;
          font-size: 13px;
          letter-spacing: 1px;
          text-transform: lowercase;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .btn-primary:hover {
          background: #e63946;
        }
        
        .input-field {
          width: 100%;
          padding: 14px 16px;
          border: 1px solid #e0e0e0;
          background: #ffffff;
          font-family: 'Karla', sans-serif;
          font-size: 15px;
          color: #1a1a1a;
          transition: all 0.3s ease;
          outline: none;
        }
        
        .input-field:focus {
          border-color: #1a1a1a;
        }
        
        .input-field::placeholder {
          color: #999;
        }
        
        .card {
          background: #fafafa;
          padding: 2.5rem;
          transition: all 0.3s ease;
        }
        
        .card:hover {
          background: #f5f5f5;
        }
        
        .divider {
          width: 40px;
          height: 1px;
          background: #1a1a1a;
          margin: 1.5rem auto;
        }
        
        .heart-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin: 2rem 0;
        }
        
        .heart-divider::before,
        .heart-divider::after {
          content: '';
          width: 40px;
          height: 1px;
          background: #e0e0e0;
        }
        
        .venue-link {
          color: #e63946;
          text-decoration: none;
          transition: opacity 0.3s ease;
        }
        
        .venue-link:hover {
          opacity: 0.7;
        }
        
        .faq-item {
          text-align: left;
          padding: 1.5rem 0;
          border-bottom: 1px solid #e0e0e0;
        }
        
        .faq-item:last-child {
          border-bottom: none;
        }
        
        .faq-question {
          font-family: 'Karla', sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: #1a1a1a;
          margin-bottom: 0.5rem;
        }
        
        .faq-answer {
          font-size: 1rem;
          line-height: 1.7;
          color: #666;
        }
      `}</style>

      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        padding: '1.5rem 2rem',
        display: 'flex',
        justifyContent: 'center',
        gap: '2.5rem',
        background: 'rgba(255,255,255,0.98)',
        zIndex: 1000,
        borderBottom: '1px solid #f0f0f0',
        flexWrap: 'wrap'
      }}>
        {['home', 'details', 'travel', 'faq', 'rsvp'].map((section) => (
          <span
            key={section}
            className={`nav-link ${activeSection === section ? 'active' : ''}`}
            onClick={() => scrollToSection(section)}
          >
            {section === 'details' ? 'the day' : section}
          </span>
        ))}
      </nav>

      {/* Hero Section */}
      <section id="home" style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '6rem 2rem 4rem'
      }}>
        <h1 className="hero-names">
          jordan <span style={{ color: '#e63946' }}>&</span> maggie
        </h1>
        
        <div style={{ margin: '3rem 0', animation: 'fadeUp 1s ease-out 0.3s both' }}>
          <StickCouple size={220} />
        </div>
        
        <p style={{
          fontFamily: "'Karla', sans-serif",
          fontSize: '16px',
          letterSpacing: '1px',
          color: '#1a1a1a',
          textTransform: 'lowercase',
          animation: 'fadeUp 1s ease-out 0.5s both'
        }}>
          may 30, 2026
        </p>
        
        <p style={{
          fontFamily: "'Karla', sans-serif",
          fontSize: '14px',
          color: '#666',
          textTransform: 'lowercase',
          marginTop: '0.5rem',
          animation: 'fadeUp 1s ease-out 0.6s both'
        }}>
          ottawa, canada
        </p>
        
        {/* Welcome message */}
        <p style={{
          maxWidth: '500px',
          fontSize: '1.1rem',
          fontStyle: 'italic',
          lineHeight: 1.8,
          color: '#555',
          marginTop: '3rem',
          animation: 'fadeUp 1s ease-out 0.8s both'
        }}>
          We can't wait to celebrate with the people who mean the most to us. Thank you for being part of our story — and for making the trip to share this day with us. It truly wouldn't be the same without you.
        </p>
      </section>

      {/* Event Details Section */}
      <section id="details" style={{
        padding: '6rem 2rem',
        background: '#fafafa'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="section-title">the celebration</h2>
          
          <div className="heart-divider">
            <SmallHeart />
          </div>
          
          {/* Welcome Event - May 29th */}
          <div style={{ marginTop: '3rem', marginBottom: '4rem' }}>
            <p style={{
              fontFamily: "'Karla', sans-serif",
              fontSize: '12px',
              letterSpacing: '2px',
              textTransform: 'lowercase',
              color: '#e63946',
              marginBottom: '1.5rem'
            }}>
              friday, may 29th
            </p>
            <div className="card" style={{ maxWidth: '400px', margin: '0 auto' }}>
              <div style={{ marginBottom: '1rem' }}>
                <DrinksIcon />
              </div>
              <p style={{
                fontFamily: "'Karla', sans-serif",
                fontSize: '11px',
                letterSpacing: '1px',
                textTransform: 'lowercase',
                color: '#e63946',
                marginBottom: '1rem'
              }}>
                welcome drinks
              </p>
              <p style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>
                <a 
                  href="https://maps.app.goo.gl/tavern-on-the-hill" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="venue-link"
                  style={{ color: '#1a1a1a', textDecoration: 'none' }}
                >
                  Tavern on the Hill
                </a>
              </p>
              <p style={{ fontSize: '1rem', color: '#666' }}>7:00 in the evening</p>
              <div className="divider" />
              <p style={{ fontSize: '1rem', lineHeight: 1.7, color: '#333' }}>
                Join us for casual drinks the night before the wedding
              </p>
              <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
                dress code: casual
              </p>
              <a 
                href="https://maps.app.goo.gl/Uh8ybzZuXoFHWqbE7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="venue-link"
                style={{ fontSize: '0.9rem', display: 'inline-block', marginTop: '1rem' }}
              >
                view on google maps →
              </a>
            </div>
          </div>

          {/* Wedding Day - May 30th */}
          <p style={{
            fontFamily: "'Karla', sans-serif",
            fontSize: '12px',
            letterSpacing: '2px',
            textTransform: 'lowercase',
            color: '#e63946',
            marginBottom: '1.5rem'
          }}>
            saturday, may 30th
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem'
          }}>
            <div className="card">
              <div style={{ marginBottom: '1rem' }}>
                <CeremonyIcon />
              </div>
              <p style={{
                fontFamily: "'Karla', sans-serif",
                fontSize: '11px',
                letterSpacing: '1px',
                textTransform: 'lowercase',
                color: '#e63946',
                marginBottom: '1rem'
              }}>
                ceremony
              </p>
              <p style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>3:00 in the afternoon</p>
              <div className="divider" />
              <p style={{ fontSize: '1rem', lineHeight: 1.7, color: '#333' }}>
                Vignoble de Chelsea<br />
                Gatineau Hills, Quebec
              </p>
              <a 
                href="https://maps.app.goo.gl/m8W7idmSjBKdaefB7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="venue-link"
                style={{ fontSize: '0.9rem', display: 'inline-block', marginTop: '1rem' }}
              >
                view on google maps →
              </a>
            </div>
            
            <div className="card">
              <div style={{ marginBottom: '1rem' }}>
                <DinnerIcon />
              </div>
              <p style={{
                fontFamily: "'Karla', sans-serif",
                fontSize: '11px',
                letterSpacing: '1px',
                textTransform: 'lowercase',
                color: '#e63946',
                marginBottom: '1rem'
              }}>
                reception
              </p>
              <p style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>immediately following</p>
              <p style={{ fontSize: '1rem', color: '#666' }}>dinner & dancing</p>
              <div className="divider" />
              <p style={{ fontSize: '1rem', lineHeight: 1.7, color: '#333' }}>
                Garden Terrace<br />
                Vignoble de Chelsea
              </p>
            </div>
          </div>
          
          {/* Dress Code */}
          <div style={{ marginTop: '2rem' }}>
            <div className="card" style={{ maxWidth: '300px', margin: '0 auto' }}>
              <p style={{
                fontFamily: "'Karla', sans-serif",
                fontSize: '11px',
                letterSpacing: '1px',
                textTransform: 'lowercase',
                color: '#e63946',
                marginBottom: '1rem'
              }}>
                dress code
              </p>
              <p style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>garden formal</p>
              <p style={{ fontSize: '1rem', color: '#666' }}>cocktail attire welcome</p>
              <div className="divider" />
              <p style={{ fontSize: '1rem', lineHeight: 1.7, color: '#333' }}>
                comfortable shoes<br />
                recommended for grass
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Shuttle Section */}
      <section style={{
        padding: '4rem 2rem',
        background: '#ffffff'
      }}>
        <div style={{ maxWidth: '500px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <ShuttleIcon />
          </div>
          <p style={{
            fontFamily: "'Karla', sans-serif",
            fontSize: '11px',
            letterSpacing: '1px',
            textTransform: 'lowercase',
            color: '#e63946',
            marginBottom: '1rem'
          }}>
            getting there & back
          </p>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#333', marginBottom: '1rem' }}>
            <strong style={{ color: '#1a1a1a' }}>getting there:</strong> please grab an Uber to the venue
          </p>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#333' }}>
            <strong style={{ color: '#1a1a1a' }}>getting home:</strong> we'll have a shuttle back to downtown Ottawa at the end of the night
          </p>
        </div>
      </section>

      {/* Travel Section */}
      <section id="travel" style={{
        padding: '6rem 2rem',
        background: '#fafafa'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="section-title">travel & stay</h2>
          
          <div className="heart-divider">
            <SmallHeart />
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            marginTop: '3rem',
            textAlign: 'left'
          }}>
            <div className="card">
              <p style={{
                fontFamily: "'Karla', sans-serif",
                fontSize: '12px',
                letterSpacing: '1px',
                textTransform: 'lowercase',
                color: '#e63946',
                marginBottom: '1rem'
              }}>
                where to stay
              </p>
              <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#333', marginBottom: '1rem' }}>
                We've reserved room blocks at nearby hotels. Mention our wedding when booking:
              </p>
              <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#666' }}>
                <strong style={{ color: '#1a1a1a' }}>[Hotel Name]</strong><br />
                123 Main Street, Chelsea<br />
                <span style={{ color: '#e63946' }}>code: JORDANMAGGIE</span>
              </p>
            </div>
            
            <div className="card">
              <p style={{
                fontFamily: "'Karla', sans-serif",
                fontSize: '12px',
                letterSpacing: '1px',
                textTransform: 'lowercase',
                color: '#e63946',
                marginBottom: '1rem'
              }}>
                getting to ottawa
              </p>
              <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#333' }}>
                <strong style={{ color: '#1a1a1a' }}>by air</strong><br />
                Ottawa Airport (YOW) is ~45 min from the venue
              </p>
              <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#333', marginTop: '1rem' }}>
                <strong style={{ color: '#1a1a1a' }}>by car</strong><br />
                The venue is 30 min north of downtown Ottawa
              </p>
              <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#333', marginTop: '1rem' }}>
                <strong style={{ color: '#1a1a1a' }}>parking</strong><br />
                Yes, there's parking at Vignoble de Chelsea
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" style={{
        padding: '6rem 2rem',
        background: '#ffffff'
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="section-title">questions</h2>
          
          <div className="heart-divider">
            <SmallHeart />
          </div>
          
          <div style={{ marginTop: '2rem' }}>
            <div className="faq-item">
              <p className="faq-question">Are kids invited?</p>
              <p className="faq-answer">Please reach out to us — we're happy to chat about it!</p>
            </div>
            
            <div className="faq-item">
              <p className="faq-question">Can I bring a plus one?</p>
              <p className="faq-answer">If you're not sure, feel free to ask us!</p>
            </div>
            
            <div className="faq-item">
              <p className="faq-question">Is there parking at the venue?</p>
              <p className="faq-answer">Yes, there's parking available at Vignoble de Chelsea on Saturday.</p>
            </div>
            
            <div className="faq-item">
              <p className="faq-question">When should I RSVP by?</p>
              <p className="faq-answer">Initial RSVPs by February 10th, final RSVPs by April 1st. We know life happens — just send us a message if anything changes!</p>
            </div>
            
            <div className="faq-item">
              <p className="faq-question">Where are you registered?</p>
              <p className="faq-answer">Your presence is the best gift! Traveling to celebrate with us is more than enough.</p>
            </div>
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section id="rsvp" style={{
        padding: '6rem 2rem',
        background: '#fafafa'
      }}>
        <div style={{ maxWidth: '500px', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="section-title">rsvp</h2>
          
          <div className="heart-divider">
            <SmallHeart />
          </div>
          
          <p style={{
            fontFamily: "'Karla', sans-serif",
            fontSize: '14px',
            color: '#666',
            marginBottom: '2.5rem'
          }}>
            initial rsvps by february 10th · final rsvps by april 1st
          </p>

          {!submitted ? (
            <form onSubmit={handleRsvp} style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{
                  display: 'block',
                  fontFamily: "'Karla', sans-serif",
                  fontSize: '12px',
                  letterSpacing: '1px',
                  textTransform: 'lowercase',
                  color: '#666',
                  marginBottom: '0.5rem'
                }}>
                  your name
                </label>
                <input
                  type="text"
                  className="input-field"
                  placeholder="as it appears on your invitation"
                  value={rsvpData.name}
                  onChange={(e) => setRsvpData({...rsvpData, name: e.target.value})}
                  required
                />
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{
                  display: 'block',
                  fontFamily: "'Karla', sans-serif",
                  fontSize: '12px',
                  letterSpacing: '1px',
                  textTransform: 'lowercase',
                  color: '#666',
                  marginBottom: '0.5rem'
                }}>
                  email
                </label>
                <input
                  type="email"
                  className="input-field"
                  placeholder="your@email.com"
                  value={rsvpData.email}
                  onChange={(e) => setRsvpData({...rsvpData, email: e.target.value})}
                  required
                />
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{
                  display: 'block',
                  fontFamily: "'Karla', sans-serif",
                  fontSize: '12px',
                  letterSpacing: '1px',
                  textTransform: 'lowercase',
                  color: '#666',
                  marginBottom: '0.5rem'
                }}>
                  will you be joining us?
                </label>
                <select
                  className="input-field"
                  value={rsvpData.attending}
                  onChange={(e) => setRsvpData({...rsvpData, attending: e.target.value})}
                  required
                  style={{ cursor: 'pointer' }}
                >
                  <option value="">please select...</option>
                  <option value="yes">definitely celebrating with you!</option>
                  <option value="maybe">still working out the details</option>
                  <option value="no">unable to make it</option>
                </select>
              </div>

              {(rsvpData.attending === 'yes' || rsvpData.attending === 'maybe') && (
                <>
                  <div style={{ marginBottom: '1.25rem' }}>
                    <label style={{
                      display: 'block',
                      fontFamily: "'Karla', sans-serif",
                      fontSize: '12px',
                      letterSpacing: '1px',
                      textTransform: 'lowercase',
                      color: '#666',
                      marginBottom: '0.5rem'
                    }}>
                      number of guests
                    </label>
                    <select
                      className="input-field"
                      value={rsvpData.guests}
                      onChange={(e) => setRsvpData({...rsvpData, guests: e.target.value})}
                      style={{ cursor: 'pointer' }}
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </div>

                  <div style={{ marginBottom: '1.25rem' }}>
                    <label style={{
                      display: 'block',
                      fontFamily: "'Karla', sans-serif",
                      fontSize: '12px',
                      letterSpacing: '1px',
                      textTransform: 'lowercase',
                      color: '#666',
                      marginBottom: '0.5rem'
                    }}>
                      dietary requirements
                    </label>
                    <input
                      type="text"
                      className="input-field"
                      placeholder="allergies, vegetarian, etc."
                      value={rsvpData.dietaryNeeds}
                      onChange={(e) => setRsvpData({...rsvpData, dietaryNeeds: e.target.value})}
                    />
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{
                      display: 'block',
                      fontFamily: "'Karla', sans-serif",
                      fontSize: '12px',
                      letterSpacing: '1px',
                      textTransform: 'lowercase',
                      color: '#666',
                      marginBottom: '0.5rem'
                    }}>
                      song request
                    </label>
                    <input
                      type="text"
                      className="input-field"
                      placeholder="what gets you on the dance floor?"
                      value={rsvpData.song}
                      onChange={(e) => setRsvpData({...rsvpData, song: e.target.value})}
                    />
                  </div>
                </>
              )}

              <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <button type="submit" className="btn-primary">
                  send rsvp
                </button>
              </div>
            </form>
          ) : (
            <div style={{
              padding: '2.5rem',
              background: '#ffffff',
              border: '1px solid #e0e0e0',
              animation: 'fadeUp 0.5s ease-out'
            }}>
              <p style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>
                thank you!
              </p>
              <p style={{ fontSize: '1rem', color: '#666' }}>
                we can't wait to celebrate with you
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '4rem 2rem',
        textAlign: 'center',
        background: '#ffffff'
      }}>
        <div style={{ marginBottom: '1.5rem' }}>
          <StickCouple size={100} />
        </div>
        <p style={{
          fontFamily: "'Libre Baskerville', serif",
          fontSize: '1.5rem',
          color: '#1a1a1a',
          textTransform: 'lowercase'
        }}>
          jordan <span style={{ color: '#e63946' }}>&</span> maggie
        </p>
        <p style={{
          fontFamily: "'Karla', sans-serif",
          fontSize: '13px',
          color: '#666',
          marginTop: '0.5rem',
          textTransform: 'lowercase'
        }}>
          may 30, 2026 · ottawa, canada
        </p>
      </footer>
    </div>
  );
}
