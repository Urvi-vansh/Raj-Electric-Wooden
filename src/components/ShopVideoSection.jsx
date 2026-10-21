import React, { useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, MapPin, Phone, MessageCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../config/businessInfo';
import { getGeneralEnquiryUrl } from '../utils/whatsapp';
import { useLanguage } from '../context/LanguageContext';

export default function ShopVideoSection() {
  const { t, isGujarati } = useLanguage();
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((e) => {
        console.warn('Playback error:', e);
      });
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleFullScreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    } else if (videoRef.current.webkitRequestFullscreen) {
      videoRef.current.webkitRequestFullscreen();
    }
  };

  return (
    <section className="section section-light shop-video-section" id="shop-tour-video">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Sparkles size={16} />
            <span>{t('home.videoTag', 'Store Showcase Video')}</span>
          </span>
          <h2 className="section-title">
            {t('home.videoTitle', 'Real Shop & Electrical Inventory in Action')}
          </h2>
          <p className="section-subtitle">
            {t('home.videoSubtitle', 'Watch our real shop tour in Batar Wadi, Amreli — see ready stock of modular switches, wires, conduit pipes, and handcrafted wooden switchboards.')}
          </p>
        </div>

        <div className="shop-video-grid">
          {/* Main Video Player Card */}
          <div className="video-player-card">
            <div className="video-player-wrapper" onClick={togglePlay}>
              <video
                ref={videoRef}
                className="shop-video-element"
                playsInline
                muted={isMuted}
                loop
                preload="metadata"
                poster="/images/real/shop-signboard-havells.png"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                <source src="/images/shop-video.mp4" type="video/mp4" />
                <source src="/images/real/gemini_generated_video_a8d4733e.mp4" type="video/mp4" />
                Your browser does not support HTML5 video playback.
              </video>

              {/* Big Play Overlay (when paused) */}
              {!isPlaying && (
                <div className="video-play-overlay">
                  <button
                    type="button"
                    className="video-big-play-btn"
                    aria-label="Play Video"
                    onClick={(e) => {
                      e.stopPropagation();
                      togglePlay();
                    }}
                  >
                    <Play size={36} fill="currentColor" />
                  </button>
                  <span className="video-overlay-text">
                    {isGujarati ? "વીડિયો જોવા ક્લિક કરો" : "Click to Play Shop Video"}
                  </span>
                </div>
              )}

              {/* Custom In-Player Controls */}
              <div className="video-controls-bar" onClick={(e) => e.stopPropagation()}>
                <button
                  type="button"
                  className="video-ctrl-btn"
                  onClick={togglePlay}
                  title={isPlaying ? "Pause" : "Play"}
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? <Pause size={18} /> : <Play size={18} fill="currentColor" />}
                </button>

                <button
                  type="button"
                  className="video-ctrl-btn"
                  onClick={toggleMute}
                  title={isMuted ? "Unmute" : "Mute"}
                  aria-label={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                </button>

                <div className="video-live-badge">
                  <span className="video-pulse-dot"></span>
                  <span>{isGujarati ? "અમરેલી સ્ટોર ટૂર" : "Amreli Store Tour"}</span>
                </div>

                <button
                  type="button"
                  className="video-ctrl-btn video-fs-btn"
                  onClick={handleFullScreen}
                  title="Fullscreen"
                  aria-label="Fullscreen"
                >
                  <Maximize2 size={18} />
                </button>
              </div>
            </div>

            <div className="video-card-footer">
              <span className="video-caption-tag">
                {isGujarati ? "📹 અસલી દુકાનનો વીડિયો • બતાર વાડી, અમરેલી" : "📹 Authentic Shop Tour • Batar Wadi, Amreli"}
              </span>
              <span className="video-caption-brand">Raj Electric Wooden</span>
            </div>
          </div>

          {/* Side Feature Highlights Box */}
          <div className="video-info-sidebar">
            <div className="video-info-header">
              <h3 className="video-sidebar-title">
                {isGujarati ? "રાજ ઇલેક્ટ્રીક વુડન સ્ટોર વિશેષતા" : "Raj Electric Store Highlights"}
              </h3>
              <p className="video-sidebar-desc">
                {isGujarati
                  ? "અમરેલી અને સૌરાષ્ટ્રના ઇલેક્ટ્રિશિયન્સ, કોન્ટ્રાક્ટર્સ અને મકાન માલિકો માટે વિશ્વસનીય ઇલેક્ટ્રિક સામાનનો અસલી સંગ્રહ."
                  : "Serving Amreli & Saurashtra with direct manufacturer dealership stock, transparent pricing, and handcrafted wooden boards."}
              </p>
            </div>

            <div className="video-highlight-list">
              <div className="video-highlight-item">
                <div className="video-highlight-icon">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <div className="video-item-title">
                    {isGujarati ? "ઓરિજિનલ બ્રાન્ડ ડીલરશીપ" : "Authorized Brand Dealerships"}
                  </div>
                  <div className="video-item-desc">
                    HAVELLS, ASTRAL, C&amp;S Electric, PARCOS, KOSCH, AMRON, Hi-Fi Electric
                  </div>
                </div>
              </div>

              <div className="video-highlight-item">
                <div className="video-highlight-icon">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <div className="video-item-title">
                    {isGujarati ? "હાથે બનાવેલા લાકડાના બોર્ડ" : "Handcrafted Wooden Switchboards"}
                  </div>
                  <div className="video-item-desc">
                    {isGujarati ? "દુકાનનું ખાસ ઉત્પાદન - ટકાઉ સાગ અને રોઝવુડ ફિનિશ" : "Our proprietary handcrafted teak & rosewood electrical switchboards"}
                  </div>
                </div>
              </div>

              <div className="video-highlight-item">
                <div className="video-highlight-icon">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="video-item-title">
                    {isGujarati ? "મોકાનું સરનામું" : "Central Amreli Location"}
                  </div>
                  <div className="video-item-desc">
                    {isGujarati
                      ? "શેરી નં ૪, સરદાર નગર, ચકરગઢ રોડ (બતાર વાડી વિસ્તાર), અમરેલી"
                      : "Sheri No 4, Sardar Nagar, Chakkargadh Road (Batar Wadi), Amreli"}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="video-action-buttons">
              <a href={`tel:${BUSINESS_INFO.contact.phoneTel}`} className="btn btn-primary btn-full">
                <Phone size={18} />
                <span>{isGujarati ? `કૉલ કરો ${BUSINESS_INFO.contact.phoneDisplay}` : `Call Shop: ${BUSINESS_INFO.contact.phoneDisplay}`}</span>
              </a>
              <a
                href={getGeneralEnquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-full"
              >
                <MessageCircle size={18} />
                <span>{isGujarati ? "WhatsApp પર વીડિયો વિશે પૂછપરછ" : "WhatsApp Video Enquiry"}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
