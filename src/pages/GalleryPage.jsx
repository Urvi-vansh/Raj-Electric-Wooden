import React, { useState } from 'react';
import { 
  X, 
  ExternalLink, 
  MessageCircle, 
  Layers, 
  Info,
  ChevronLeft,
  ChevronRight,
  Maximize2
} from 'lucide-react';
import { GALLERY_ITEMS, GALLERY_CATEGORIES } from '../data/gallery';
import { BUSINESS_INFO } from '../config/businessInfo';
import { getGeneralEnquiryUrl, buildWhatsAppUrl } from '../utils/whatsapp';
import { useLanguage } from '../context/LanguageContext';

export default function GalleryPage() {
  const { t, isGujarati } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  const handleOpenPhoto = (item) => {
    setSelectedPhoto(item);
  };

  const handleClosePhoto = () => {
    setSelectedPhoto(null);
  };

  const handleNextPhoto = () => {
    if (!selectedPhoto) return;
    const currentIndex = filteredItems.findIndex(i => i.id === selectedPhoto.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedPhoto(filteredItems[nextIndex]);
  };

  const handlePrevPhoto = () => {
    if (!selectedPhoto) return;
    const currentIndex = filteredItems.findIndex(i => i.id === selectedPhoto.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedPhoto(filteredItems[prevIndex]);
  };

  const getCategoryLabel = (id, fallbackLabel) => {
    if (!isGujarati) return fallbackLabel;
    switch (id) {
      case 'all': return 'બધા ફોટા';
      case 'real-stock': return '📸 દુકાનનો અસલી માલ';
      case 'products': return 'ઇલેક્ટ્રિકલ સામાન';
      case 'shop-interior': return 'દુકાન પરિસર';
      case 'accessories': return 'ઇલેક્ટ્રિકલ એસેસરીઝ';
      case 'displays': return 'શોરૂમ ડિસ્પ્લે';
      default: return fallbackLabel;
    }
  };

  return (
    <div className="gallery-page">
      {/* Header Banner */}
      <section className="section-light" style={{ padding: '3.5rem 0 2.5rem 0', borderBottom: '1px solid var(--color-border-subtle)' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '1.5rem' }}>
            <span className="section-tag">{t('gallery.tag', 'Visual Showcase')}</span>
            <h1 className="section-title">{t('gallery.title', 'Shop Gallery & Product Displays')}</h1>
            <p className="section-subtitle">
              {t('gallery.subtitle', 'Explore photographs of our inventory, shop counter in Batar Wadi, electrical modular switches, wooden boards, and installation supplies.')}
            </p>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            fontSize: '0.88rem',
            color: 'var(--color-dark-blue-muted)',
            backgroundColor: 'var(--color-white)',
            padding: '0.65rem 1rem',
            borderRadius: 'var(--radius-full)',
            maxWidth: '640px',
            margin: '0 auto',
            border: '1px solid var(--color-border-subtle)'
          }}>
            <Info size={16} style={{ color: 'var(--color-primary-blue)', flexShrink: 0 }} />
            <span>
              {isGujarati
                ? "નોંધ: આ ગેલેરીમાં અમારા બતાર વાડી કાઉન્ટરના અસલી ફોટા અને કેટલોગ બંને સામેલ છે."
                : "Note: Includes both counter photographs and representative product catalogue displays."}
            </span>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section section-white">
        <div className="container">
          {/* Category Filter Pills */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            flexWrap: 'wrap',
            marginBottom: '2.5rem'
          }}>
            {GALLERY_CATEGORIES.map(cat => (
              <button
                key={cat.id}
                type="button"
                className={`category-filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {getCategoryLabel(cat.id, cat.label)}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="gallery-grid">
            {filteredItems.map(item => (
              <div
                key={item.id}
                className="gallery-card"
                onClick={() => handleOpenPhoto(item)}
              >
                <div className="gallery-img-wrap">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="gallery-img"
                    loading="lazy"
                  />
                  <div style={{
                    position: 'absolute',
                    top: '0.75rem',
                    right: '0.75rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    padding: '0.35rem',
                    borderRadius: 'var(--radius-sm)',
                    color: 'var(--color-dark-blue)'
                  }}>
                    <Maximize2 size={16} />
                  </div>
                </div>

                <div className="gallery-info">
                  <span className="gallery-tag-pill">{getCategoryLabel(item.category, item.categoryLabel)}</span>
                  <h3 className="gallery-title">{item.title}</h3>
                  <p className="gallery-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Assistance Banner */}
          <div style={{
            marginTop: '4rem',
            backgroundColor: 'var(--color-light-blue)',
            borderRadius: 'var(--radius-lg)',
            padding: '2.5rem',
            textAlign: 'center',
            border: '1px solid var(--color-soft-blue)'
          }}>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--color-dark-blue)', marginBottom: '0.5rem' }}>
              {isGujarati ? "આમાંથી કોઈપણ સામાન વિશે પૂછપરછ કરવી છે?" : "Interested in any item displayed here?"}
            </h3>
            <p style={{ maxWidth: 540, margin: '0 auto 1.5rem auto', color: 'var(--color-dark-blue-muted)', fontSize: '0.95rem' }}>
              {isGujarati
                ? "અમારા બતાર વાડી શોપ કાઉન્ટર પરથી તાત્કાલિક ભાવ અને સ્ટોકની ખાતરી મેળવવા WhatsApp પર સ્ક્રીનશોટ અથવા સંદેશ મોકલો."
                : "Send us a screenshot or message on WhatsApp for immediate pricing and stock confirmation at our Batar Wadi shop."}
            </p>
            <a
              href={getGeneralEnquiryUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
            >
              <MessageCircle size={18} />
              <span>{isGujarati ? `WhatsApp પર પૂછપરછ કરો (${BUSINESS_INFO.contact.phoneDisplay})` : `Enquire on WhatsApp (${BUSINESS_INFO.contact.phoneDisplay})`}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="modal-backdrop" onClick={handleClosePhoto} role="dialog" aria-modal="true">
          <div
            style={{
              backgroundColor: 'var(--color-white)',
              borderRadius: 'var(--radius-xl)',
              maxWidth: '820px',
              width: '95%',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)',
              border: '1px solid var(--color-border-subtle)',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '1.25rem 1.5rem',
              borderBottom: '1px solid var(--color-border-subtle)'
            }}>
              <div>
                <span className="gallery-tag-pill" style={{ margin: 0 }}>
                  {selectedPhoto.categoryLabel}
                </span>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--color-dark-blue)', marginTop: '0.25rem' }}>
                  {selectedPhoto.title}
                </h3>
              </div>
              <button className="modal-close-btn" onClick={handleClosePhoto} aria-label="Close modal">
                <X size={22} />
              </button>
            </div>

            <div style={{ position: 'relative', backgroundColor: '#F8FBFE' }}>
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                style={{ width: '100%', maxHeight: '60vh', objectFit: 'contain', display: 'block' }}
              />
              <button
                type="button"
                onClick={handlePrevPhoto}
                style={{
                  position: 'absolute',
                  left: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(255, 255, 255, 0.9)',
                  border: '1px solid var(--color-border-subtle)',
                  borderRadius: '50%',
                  width: 40,
                  height: 40,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: 'var(--color-dark-blue)'
                }}
                aria-label="Previous photo"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                type="button"
                onClick={handleNextPhoto}
                style={{
                  position: 'absolute',
                  right: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(255, 255, 255, 0.9)',
                  border: '1px solid var(--color-border-subtle)',
                  borderRadius: '50%',
                  width: 40,
                  height: 40,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: 'var(--color-dark-blue)'
                }}
                aria-label="Next photo"
              >
                <ChevronRight size={22} />
              </button>
            </div>

            <div style={{
              padding: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem'
            }}>
              <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--color-body-text)', maxWidth: '520px' }}>
                {selectedPhoto.description}
              </p>
              <a
                href={buildWhatsAppUrl(`Hello ${BUSINESS_INFO.alternateName}, I would like to enquire about the products shown in: "${selectedPhoto.title}".`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-sm"
              >
                <MessageCircle size={16} />
                <span>{isGujarati ? "આ સામાન વિશે WhatsApp પર પૂછપરછ કરો" : "Enquire About This Item"}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
