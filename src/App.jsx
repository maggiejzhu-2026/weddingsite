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
  
  // Yoga RSVP state
  const [yogaRsvp, setYogaRsvp] = useState({ name: '' });
  const [yogaSubmitted, setYogaSubmitted] = useState(false);
  const [yogaSlotsRemaining, setYogaSlotsRemaining] = useState(35);
  
  const handleYogaRsvp = (e) => {
    e.preventDefault();
    setYogaSlotsRemaining(prev => Math.max(0, prev - 1));
    setYogaSubmitted(true);
  };

  // Running RSVP state
  const [runRsvp, setRunRsvp] = useState({ name: '' });
  const [runSubmitted, setRunSubmitted] = useState(false);
  
  const handleRunRsvp = (e) => {
    e.preventDefault();
    setRunSubmitted(true);
  };

  const handleRsvp = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const scrollToSection = (id) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Using the original stick figure graphic
  const StickCouple = ({ width = 220 }) => (
    <img 
      src="/couple.png" 
      alt="Jordan and Maggie stick figures holding hands with a heart"
      className="couple-image"
      style={{ width, height: 'auto' }}
    />
  );

  const SmallHeart = () => (
    <svg width="12" height="12" viewBox="0 0 20 20" fill="#e63946">
      <path d="M10 18 C10 18 2 12 2 7 C2 3 5 1 10 5 C15 1 18 3 18 7 C18 12 10 18 10 18Z"/>
    </svg>
  );

  // Simple stick figure icons for events
  const DrinksIcon = () => (
    <svg width="36" height="36" viewBox="0 0 50 50" fill="none" stroke="#ccc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {/* Wine glass */}
      <path d="M15 8 L15 8 L11 20 Q11 24 15 24 Q19 24 19 20 L15 8" />
      <line x1="15" y1="24" x2="15" y2="38" />
      <line x1="10" y1="38" x2="20" y2="38" />
      {/* Beer mug */}
      <rect x="28" y="12" width="12" height="22" rx="2" />
      <path d="M40 16 Q46 16 46 22 Q46 28 40 28" />
    </svg>
  );

  const CeremonyIcon = () => (
    <svg width="36" height="36" viewBox="0 0 50 50" fill="none" stroke="#ccc" strokeWidth="2" strokeLinecap="round">
      {/* Two interlocking wedding rings */}
      <circle cx="18" cy="25" r="10" />
      <circle cx="32" cy="25" r="10" />
      {/* Small heart above */}
      <path d="M25 12 C25 10 23 9 23 10.5 C23 12 25 14 25 14 C25 14 27 12 27 10.5 C27 9 25 10 25 12Z" fill="#e63946" stroke="none"/>
    </svg>
  );

  const DinnerIcon = () => (
    <svg width="36" height="36" viewBox="0 0 50 50" fill="none" stroke="#ccc" strokeWidth="2" strokeLinecap="round">
      {/* Plate */}
      <ellipse cx="25" cy="30" rx="14" ry="6" />
      {/* Fork */}
      <line x1="12" y1="12" x2="12" y2="22" />
      <line x1="10" y1="12" x2="10" y2="17" />
      <line x1="14" y1="12" x2="14" y2="17" />
      {/* Knife */}
      <line x1="38" y1="12" x2="38" y2="22" />
      <path d="M38 12 Q41 14 38 17" />
    </svg>
  );

  const ShuttleIcon = () => (
    <svg width="36" height="36" viewBox="0 0 50 50" fill="none" stroke="#ccc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {/* Bus body */}
      <rect x="6" y="16" width="38" height="18" rx="3" />
      {/* Windows */}
      <rect x="11" y="20" width="7" height="6" rx="1" />
      <rect x="21" y="20" width="7" height="6" rx="1" />
      <rect x="31" y="20" width="7" height="6" rx="1" />
      {/* Wheels */}
      <circle cx="14" cy="34" r="3" />
      <circle cx="36" cy="34" r="3" />
    </svg>
  );

  const YogaIcon = () => (
    <svg width="36" height="36" viewBox="0 0 50 50" fill="none" stroke="#ccc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {/* Person in lotus pose */}
      <circle cx="25" cy="12" r="6" />
      {/* Body */}
      <path d="M25 18 L25 30" />
      {/* Crossed legs */}
      <path d="M15 38 Q20 32 25 35 Q30 32 35 38" />
      {/* Arms out */}
      <path d="M25 24 L12 20" />
      <path d="M25 24 L38 20" />
    </svg>
  );

  const CoffeeIcon = () => (
    <svg width="36" height="36" viewBox="0 0 50 50" fill="none" stroke="#ccc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {/* Cup */}
      <path d="M10 18 L10 36 Q10 40 14 40 L30 40 Q34 40 34 36 L34 18" />
      {/* Handle */}
      <path d="M34 22 Q42 22 42 28 Q42 34 34 34" />
      {/* Steam */}
      <path d="M18 8 Q20 12 18 14" />
      <path d="M25 10 Q27 14 25 16" />
    </svg>
  );

  const RunningIcon = () => (
    <svg width="36" height="36" viewBox="0 0 50 50" fill="none" stroke="#ccc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {/* Head */}
      <circle cx="30" cy="10" r="5" />
      {/* Body leaning forward */}
      <path d="M28 15 L22 28" />
      {/* Arms - one forward, one back */}
      <path d="M24 20 L14 16" />
      <path d="M24 20 L32 24" />
      {/* Legs - running pose */}
      <path d="M22 28 L12 38" />
      <path d="M22 28 L30 40" />
      {/* Motion lines */}
      <path d="M36 12 L40 12" />
      <path d="M38 16 L42 16" />
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
        
        @keyframes gentleSway {
          0%, 100% { transform: rotate(-2deg); }
          50% { transform: rotate(2deg); }
        }
        
        .couple-image {
          transition: transform 0.3s ease;
        }
        
        .couple-image:hover {
          animation: gentleSway 1s ease-in-out infinite;
        }
        
        .icon-wrapper {
          display: flex;
          justify-content: center;
          margin-bottom: 0.75rem;
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
        
        @media (max-width: 600px) {
          .nav-link {
            font-size: 11px;
            letter-spacing: 0.5px;
          }
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
          font-size: clamp(1.25rem, 3vw, 1.5rem);
          font-weight: 400;
          text-transform: lowercase;
          margin-bottom: 1rem;
          color: #1a1a1a;
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
          padding: 2rem;
          transition: background 0.3s ease;
        }
        
        .card:hover {
          background: #f5f5f5;
        }
        
        .divider {
          width: 30px;
          height: 1px;
          background: #e0e0e0;
          margin: 1.25rem auto;
        }
        
        .heart-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          margin: 1.5rem 0;
        }
        
        .heart-divider::before,
        .heart-divider::after {
          content: '';
          width: 30px;
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
          padding: 1.25rem 0;
          border-bottom: 1px solid #f0f0f0;
        }
        
        .faq-item:last-child {
          border-bottom: none;
        }
        
        .faq-question {
          font-family: 'Karla', sans-serif;
          font-size: 13px;
          font-weight: 500;
          color: #1a1a1a;
          margin-bottom: 0.4rem;
        }
        
        .faq-answer {
          font-size: 14px;
          line-height: 1.6;
          color: '#666';
        }
        
        /* Mobile styles */
        @media (max-width: 600px) {
          section {
            padding: 4rem 1.5rem !important;
          }
          
          nav {
            gap: 1rem !important;
            padding: 1rem !important;
          }
        }
      `}</style>

      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        padding: '1.25rem 1.5rem',
        display: 'flex',
        justifyContent: 'center',
        gap: '1.5rem',
        background: 'rgba(255,255,255,0.98)',
        zIndex: 1000,
        borderBottom: '1px solid #f0f0f0',
        flexWrap: 'wrap'
      }}>
        {['home', 'day-before', 'details', 'travel', 'faq', 'rsvp'].map((section) => (
          <span
            key={section}
            className={`nav-link ${activeSection === section ? 'active' : ''}`}
            onClick={() => scrollToSection(section)}
          >
            {section === 'day-before' ? 'the day before' : section === 'details' ? 'the day' : section}
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
          <StickCouple width={280} />
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
          maxWidth: '400px',
          fontFamily: "'Karla', sans-serif",
          fontSize: '14px',
          lineHeight: 1.8,
          color: '#888',
          marginTop: '2.5rem',
          animation: 'fadeUp 1s ease-out 0.8s both'
        }}>
          We can't wait to celebrate with the people who mean the most to us. Thank you for making the trip to share this day with us.
        </p>
      </section>

      {/* The Day Before Section - Friday */}
      <section id="day-before" style={{
        padding: '6rem 2rem',
        background: '#fafafa'
      }}>
        <div style={{ maxWidth: '500px', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="section-title">the day before</h2>
          
          <div className="heart-divider">
            <SmallHeart />
          </div>
          
          <p style={{
            fontFamily: "'Karla', sans-serif",
            fontSize: '13px',
            letterSpacing: '1px',
            textTransform: 'lowercase',
            color: '#999',
            marginBottom: '1.5rem'
          }}>
            friday, may 29th
          </p>
          
          <div>
            <div className="icon-wrapper">
              <DrinksIcon />
            </div>
            <p style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>welcome drinks</p>
            <p style={{ fontSize: '0.9rem', color: '#666' }}>6:00pm – 9:00pm · <a href="https://www.google.com/maps/search/?api=1&query=Tavern+on+the+Hill+Major%27s+Hill+Park+Ottawa" target="_blank" rel="noopener noreferrer" className="venue-link">Tavern on the Hill</a></p>
            <p style={{ fontSize: '0.85rem', color: '#999', marginTop: '0.25rem' }}>dress code: casual · downtown</p>
          </div>
        </div>
      </section>

      {/* The Day Section - Saturday */}
      <section id="details" style={{
        padding: '6rem 2rem',
        background: '#ffffff'
      }}>
        <div style={{ maxWidth: '500px', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="section-title">the day</h2>
          
          <div className="heart-divider">
            <SmallHeart />
          </div>
          
          <p style={{
            fontFamily: "'Karla', sans-serif",
            fontSize: '13px',
            letterSpacing: '1px',
            textTransform: 'lowercase',
            color: '#999',
            marginBottom: '2rem'
          }}>
            saturday, may 30th
          </p>
          
          {/* Morning Activities */}
          <div style={{ marginBottom: '3rem' }}>
            <p style={{
              fontFamily: "'Karla', sans-serif",
              fontSize: '11px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: '#999',
              marginBottom: '1.5rem'
            }}>
              · morning ·
            </p>
            
            {/* Yoga */}
            <div style={{ marginBottom: '2rem' }}>
              <div className="icon-wrapper">
                <YogaIcon />
              </div>
              <p style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>morning yoga <span style={{ fontStyle: 'italic', color: '#999', fontSize: '0.9rem' }}>with maggie</span></p>
              <p style={{ fontSize: '0.9rem', color: '#666' }}>8:30am · <a href="https://www.google.com/maps/search/?api=1&query=PranaShanti+Yoga+Centre+Ottawa" target="_blank" rel="noopener noreferrer" className="venue-link">PranaShanti Yoga Centre</a></p>
              <p style={{ fontSize: '0.85rem', color: '#999', marginTop: '0.25rem' }}>dress code: comfortable · 10 min from downtown · <span style={{ fontStyle: 'italic' }}>taught by Julia Chen</span></p>
              
              {/* Simple Yoga RSVP */}
              <div style={{ 
                marginTop: '1rem',
                padding: '1rem',
                background: '#fafafa',
                borderRadius: '4px',
                maxWidth: '300px',
                margin: '1rem auto 0'
              }}>
                <p style={{ fontSize: '0.8rem', color: yogaSlotsRemaining <= 5 ? '#e63946' : '#666', marginBottom: '0.5rem' }}>
                  {yogaSlotsRemaining} of 35 spots remaining
                </p>
                <p style={{ fontSize: '0.75rem', fontStyle: 'italic', color: '#999', marginBottom: '0.75rem' }}>
                  prioritizing out-of-town guests 💕
                </p>
                
                {yogaSlotsRemaining === 0 && !yogaSubmitted ? (
                  <p style={{ fontSize: '0.85rem', color: '#666' }}>class is full — message maggie for waitlist</p>
                ) : !yogaSubmitted ? (
                  <form onSubmit={handleYogaRsvp} style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <input
                      type="text"
                      className="input-field"
                      placeholder="your name"
                      value={yogaRsvp.name}
                      onChange={(e) => setYogaRsvp({...yogaRsvp, name: e.target.value})}
                      required
                      style={{ flex: '1', minWidth: '120px', padding: '10px 12px', fontSize: '13px' }}
                    />
                    <button type="submit" className="btn-primary" style={{ padding: '10px 16px', fontSize: '12px' }}>
                      i'm in
                    </button>
                  </form>
                ) : (
                  <p style={{ fontSize: '0.9rem', color: '#666' }}>see you on the mat ✨</p>
                )}
              </div>
            </div>
            
            {/* Running */}
            <div style={{ marginBottom: '2rem' }}>
              <div className="icon-wrapper">
                <RunningIcon />
              </div>
              <p style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>morning run <span style={{ fontStyle: 'italic', color: '#999', fontSize: '0.9rem' }}>with jordan</span></p>
              <p style={{ fontSize: '0.9rem', color: '#666' }}>8:30am · 5K along the canal</p>
              <p style={{ fontSize: '0.85rem', color: '#999', marginTop: '0.25rem' }}>dress code: athletic · downtown · <span style={{ fontStyle: 'italic' }}>all paces welcome</span></p>
              
              {/* Simple Run RSVP */}
              <div style={{ 
                marginTop: '1rem',
                padding: '1rem',
                background: '#fafafa',
                borderRadius: '4px',
                maxWidth: '300px',
                margin: '1rem auto 0'
              }}>
                {!runSubmitted ? (
                  <form onSubmit={handleRunRsvp} style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <input
                      type="text"
                      className="input-field"
                      placeholder="your name"
                      value={runRsvp.name}
                      onChange={(e) => setRunRsvp({...runRsvp, name: e.target.value})}
                      required
                      style={{ flex: '1', minWidth: '120px', padding: '10px 12px', fontSize: '13px' }}
                    />
                    <button type="submit" className="btn-primary" style={{ padding: '10px 16px', fontSize: '12px' }}>
                      i'm in
                    </button>
                  </form>
                ) : (
                  <p style={{ fontSize: '0.9rem', color: '#666' }}>see you at the start line 🏃</p>
                )}
              </div>
            </div>
            
            {/* Coffee */}
            <div>
              <div className="icon-wrapper">
                <CoffeeIcon />
              </div>
              <p style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>coffee after</p>
              <p style={{ fontSize: '0.9rem', color: '#666' }}>~9:30am · <a href="https://www.google.com/maps/search/?api=1&query=Bridgehead+130+Anderson+St+Ottawa" target="_blank" rel="noopener noreferrer" className="venue-link">Bridgehead</a></p>
              <p style={{ fontSize: '0.85rem', color: '#999', marginTop: '0.25rem' }}>dress code: come as you are · downtown · <span style={{ fontStyle: 'italic' }}>4 min walk from yoga</span></p>
            </div>
          </div>
          
          {/* Divider */}
          <div style={{ 
            width: '60px', 
            height: '1px', 
            background: '#e0e0e0', 
            margin: '2.5rem auto' 
          }} />
          
          {/* Ceremony & Reception */}
          <div style={{ marginBottom: '2rem' }}>
            <p style={{
              fontFamily: "'Karla', sans-serif",
              fontSize: '11px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: '#999',
              marginBottom: '1.5rem'
            }}>
              · afternoon & evening ·
            </p>
            
            <div className="icon-wrapper">
              <CeremonyIcon />
            </div>
            <p style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>ceremony & reception</p>
            <p style={{ fontSize: '0.9rem', color: '#666' }}>4:00pm – 11:00pm · <a href="https://www.google.com/maps/search/?api=1&query=Vignoble+de+Chelsea+1582+Route+105+Chelsea+Quebec" target="_blank" rel="noopener noreferrer" className="venue-link">Vignoble de Chelsea</a></p>
            <p style={{ fontSize: '0.85rem', color: '#999', marginTop: '0.25rem' }}>dress code: garden formal · 30 min from downtown</p>
          </div>
          
          {/* Shuttle info */}
          <div style={{ marginTop: '2rem' }}>
            <div className="icon-wrapper">
              <ShuttleIcon />
            </div>
            <p style={{
              fontFamily: "'Karla', sans-serif",
              fontSize: '13px',
              letterSpacing: '1px',
              textTransform: 'lowercase',
              color: '#666',
              marginBottom: '1rem'
            }}>
              getting there & back
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#333', marginBottom: '0.5rem' }}>
              <strong style={{ color: '#1a1a1a' }}>there:</strong> drive or rideshare (Uber/Lyft)
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#333' }}>
              <strong style={{ color: '#1a1a1a' }}>back:</strong> shuttle to downtown Ottawa at the end of the night
            </p>
          </div>
        </div>
      </section>

      {/* Travel Section */}
      <section id="travel" style={{
        padding: '6rem 2rem',
        background: '#fafafa'
      }}>
        <div style={{ maxWidth: '500px', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="section-title">travel & stay</h2>
          
          <div className="heart-divider">
            <SmallHeart />
          </div>
          
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#333', marginTop: '2rem' }}>
            We recommend staying in downtown Ottawa — there's lots to see and do, and it's an easy walk/drive to all events.
          </p>
          
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#333', marginTop: '1.5rem' }}>
            <strong style={{ color: '#1a1a1a' }}>Flying in?</strong><br />
            Ottawa Airport (YOW) is about 20 minutes from downtown.
          </p>
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
        <StickCouple width={120} />
      </footer>
    </div>
  );
}
