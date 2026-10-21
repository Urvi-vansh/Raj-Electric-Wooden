import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  MessageCircle, 
  ArrowRight, 
  Layers, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  ShieldCheck, 
  Users, 
  PackageCheck,
  ExternalLink,
  Sparkles,
  Play
} from 'lucide-react';
import { BUSINESS_INFO } from '../config/businessInfo';
import { CATEGORIES } from '../data/categories';
import { PRODUCTS } from '../data/products';
import { getGeneralEnquiryUrl } from '../utils/whatsapp';
import { useLanguage } from '../context/LanguageContext';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import BulkQuoteModal from '../components/BulkQuoteModal';
import BrandLogosBar from '../components/BrandLogos';
import ShopVideoSection from '../components/ShopVideoSection';

export default function HomePage() {
  const [selectedProductForModal, setSelectedProductForModal] = useState(null);
  const [isBulkModalOpen, setIsBulkModalOpen] = useState(false);
  const { t, isGujarati } = useLanguage();

  const featuredProducts = PRODUCTS.filter(p => p.isFeatured).slice(0, 10);

  const handleOpenBulkModal = (product) => {
    setSelectedProductForModal(product);
    setIsBulkModalOpen(true);
  };

  return (
    <>
      {/* 4B. Hero Section */}
      <section className="hero" id="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="hero-badge">
                <Sparkles size={16} />
                <span>{t('home.heroBadge', 'Electrical Wholesale & Retail • Amreli, Gujarat')}</span>
              </div>

              <h1 className="hero-title">
                {isGujarati ? (
                  <>અમરેલીમાં તમારા વિશ્વસનીય ઇલેક્ટ્રિક સામાનના <span>વેપારી</span></>
                ) : (
                  <>Your Trusted Electrical Goods Partner in <span>Amreli</span></>
                )}
              </h1>

              <p className="hero-subtitle">
                {t('home.heroSubtitle', 'Explore electrical supplies, wires, cables, lighting, electrical boards, and accessories for residential and commercial needs.')}
              </p>

              <div className="hero-buttons">
                <Link to="/products" className="btn btn-primary btn-lg">
                  <span>{t('home.heroExploreBtn', 'Explore Products')}</span>
                  <ArrowRight size={18} />
                </Link>

                <Link to="/wholesale-enquiry" className="btn btn-secondary btn-lg">
                  <span>{t('home.heroBulkBtn', 'Request Bulk Quote')}</span>
                </Link>

                <a href={`tel:${BUSINESS_INFO.contact.phoneTel}`} className="btn btn-outline btn-lg">
                  <Phone size={18} />
                  <span>{isGujarati ? "દુકાને કૉલ કરો" : "Call the Shop"}</span>
                </a>
              </div>

              <div className="hero-highlights">
                <div className="hero-highlight-item">
                  <span className="highlight-number">{isGujarati ? "હોલસેલ" : "Wholesale"}</span>
                  <span className="highlight-label">{isGujarati ? "અને રિટેલ ઓર્ડર" : "& Retail Orders"}</span>
                </div>
                <div className="hero-highlight-item">
                  <span className="highlight-number">{isGujarati ? "બતાર વાડી" : "Batar Wadi"}</span>
                  <span className="highlight-label">{isGujarati ? "અમરેલીમાં મોકાની જગ્યા" : "Central Amreli Location"}</span>
                </div>
                <div className="hero-highlight-item">
                  <span className="highlight-number">{isGujarati ? "ડાયરેક્ટ" : "Direct"}</span>
                  <span className="highlight-label">{isGujarati ? "WhatsApp પૂછપરછ" : "WhatsApp Enquiry"}</span>
                </div>
              </div>
            </div>

            <div className="hero-image-wrapper">
              <div className="hero-image-card">
                <img
                  src="/images/hero-electrical.jpg"
                  alt="Electrical supplies, wires, modular switches and lighting at Raj Electric Wooden"
                  className="hero-image"
                  loading="eager"
                />
                <a
                  href="#shop-tour-video"
                  className="hero-video-badge"
                  title="Watch Shop Tour Video"
                >
                  <div className="hero-video-play-icon">
                    <Play size={14} fill="currentColor" />
                  </div>
                  <span>{isGujarati ? "દુકાનનો વીડિયો જુઓ" : "Watch Shop Video"}</span>
                </a>
                <div className="hero-floating-badge">
                  <div className="badge-icon-box">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <div className="badge-title">Direct Shop Pricing</div>
                    <div className="badge-sub">Amreli, Gujarat 365601</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Brand Dealerships & Partners Bar */}
      <BrandLogosBar />

      {/* 4C. Product Categories */}
      <section className="section section-white" id="categories">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{t('home.categoriesTag', 'Catalogue Categories')}</span>
            <h2 className="section-title">{t('home.categoriesTitle', 'Explore Electrical Supplies')}</h2>
            <p className="section-subtitle">
              {t('home.categoriesSubtitle', 'Browse our key electrical product categories for residential wiring, commercial installations, and shop renovation projects.')}
            </p>
          </div>

          <div className="category-grid">
            {CATEGORIES.map(category => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* 4D. Why Choose Us */}
      <section className="section section-light" id="why-choose-us">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{t('home.whyChooseTag', 'Why Work With Us')}</span>
            <h2 className="section-title">{t('home.whyChooseTitle', 'Direct Wholesaler & Retailer Advantage')}</h2>
            <p className="section-subtitle">
              {t('home.whyChooseSubtitle', 'Focused on genuine product variety, direct wholesale & retail support, and convenient customer communication.')}
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-wrap">
                <Layers size={28} />
              </div>
              <h3 className="feature-title">{t('home.feat1Title', 'Dual Sales Channels')}</h3>
              <p className="feature-desc">
                {t('home.feat1Desc', 'Whether you need a single switchboard for your home or 500 meters of industrial conduit pipe, we cater to both homeowners and contractors.')}
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrap">
                <Users size={28} />
              </div>
              <h3 className="feature-title">{t('home.feat2Title', 'Curated Brand Quality')}</h3>
              <p className="feature-desc">
                {t('home.feat2Desc', 'Genuine ASTRAL conduit pipes, Havells fans, C&S switchgear, PARCOS, KOSCH, and AMRON modular switches backed by direct distributor channels.')}
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrap">
                <MessageCircle size={28} />
              </div>
              <h3 className="feature-title">{t('home.feat3Title', 'Convenient Direct Contact')}</h3>
              <p className="feature-desc">
                {t('home.feat3Desc', 'No complex carts or payment gates. Discuss requirements directly with our shop team over phone or WhatsApp for prompt answers and price clarity.')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4E. Real Store Showcase Video */}
      <ShopVideoSection />

      {/* 4F. Wholesale Enquiry Banner */}
      <section className="section section-white" id="wholesale-banner">
        <div className="container">
          <div className="wholesale-banner">
            <div className="wholesale-banner-content">
              <span className="section-tag" style={{ backgroundColor: 'var(--color-white)' }}>
                {t('home.bulkTag', 'Bulk & Project Orders')}
              </span>
              <h2 className="wholesale-banner-title">
                {t('home.bulkTitle', 'Need Electrical Supplies in Bulk?')}
              </h2>
              <p className="wholesale-banner-text">
                {t('home.bulkText', 'Tell us which products you need and the quantity required. Contact our shop to enquire about pricing and availability.')}
              </p>
              <div className="wholesale-banner-actions">
                <Link to="/wholesale-enquiry" className="btn btn-primary btn-lg">
                  <span>{t('home.bulkQuoteBtn', 'Request a Bulk Quote')}</span>
                  <ArrowRight size={18} />
                </Link>
                <a
                  href={getGeneralEnquiryUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-lg"
                >
                  <MessageCircle size={18} />
                  <span>{t('common.enquireWhatsApp', 'Enquire on WhatsApp')}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4F. Featured Products */}
      <section className="section section-light" id="featured-products">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{t('home.featuredTag', 'Featured & Real Shop Stock')}</span>
            <h2 className="section-title">{t('home.featuredTitle', 'Popular Electrical & Modular Goods')}</h2>
            <p className="section-subtitle">
              {t('home.featuredSubtitle', 'Featuring genuine inventory photographs from our Batar Wadi counter including PARCOS modular plates, copper wires, and wooden switchboards.')}
            </p>
          </div>

          <div className="products-grid">
            {featuredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onOpenBulkModal={handleOpenBulkModal}
              />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/products" className="btn btn-primary btn-lg">
              <span>{isGujarati ? "બધી પ્રોડક્ટ્સ જુઓ" : "View Full Product Catalogue"}</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4G. Shop Information */}
      <section className="section section-white" id="shop-info">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{t('home.visitTag', 'Visit Our Counter')}</span>
            <h2 className="section-title">{t('home.visitTitle', 'Shop Location & Opening Hours')}</h2>
            <p className="section-subtitle">
              {t('home.visitSubtitle', 'Conveniently located at Batar Wadi in Amreli, Gujarat. Walk in during business hours or call ahead.')}
            </p>
          </div>

          <div className="shop-info-card">
            <div className="shop-info-details">
              <div className="shop-info-item">
                <div className="info-icon-box">
                  <MapPin size={22} />
                </div>
                <div>
                  <div className="info-label">{t('home.shopAddressLabel', 'Shop Address')}</div>
                  <div className="info-val">
                    <strong>{isGujarati ? BUSINESS_INFO.gujaratiName : BUSINESS_INFO.alternateName}</strong><br />
                    {isGujarati ? (
                      <>પ્રોપ્રાઇટર: <strong>{BUSINESS_INFO.gujaratiOwnerName}</strong><br /></>
                    ) : (
                      <>Proprietor: <strong>{BUSINESS_INFO.ownerName}</strong> ({BUSINESS_INFO.gujaratiOwnerName})<br /></>
                    )}
                    {isGujarati ? BUSINESS_INFO.address.gujaratiFormatted : (
                      <>
                        {BUSINESS_INFO.address.street},<br />
                        {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.pincode}
                      </>
                    )}
                  </div>
                  <div style={{ marginTop: '0.5rem' }}>
                    <a
                      href={BUSINESS_INFO.address.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline btn-sm"
                    >
                      <span>{t('common.openGoogleMaps', 'Open in Google Maps')}</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="shop-info-item">
                <div className="info-icon-box">
                  <Phone size={22} />
                </div>
                <div>
                  <div className="info-label">{t('home.contactNumbersLabel', 'Contact Numbers')}</div>
                  <div className="info-val">
                    {isGujarati ? "મુખ્ય નંબર: " : "Primary: "}
                    <a href={`tel:${BUSINESS_INFO.contact.phoneTel}`} style={{ color: 'var(--color-primary-blue)', fontWeight: 700 }}>
                      {BUSINESS_INFO.contact.phoneDisplay}
                    </a><br />
                    {isGujarati ? "બીજો નંબર: " : "Alternate: "}
                    <a href={`tel:${BUSINESS_INFO.contact.alternatePhoneTel}`} style={{ color: 'var(--color-primary-blue)' }}>
                      {BUSINESS_INFO.contact.alternatePhoneDisplay}
                    </a><br />
                    WhatsApp: <a href={getGeneralEnquiryUrl()} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-whatsapp-dark)', fontWeight: 700 }}>+91 98790 94290</a>
                  </div>
                </div>
              </div>

              <div className="shop-info-item" style={{ marginBottom: 0 }}>
                <div className="info-icon-box">
                  <Clock size={22} />
                </div>
                <div>
                  <div className="info-label">{t('home.openingHoursLabel', 'Opening Hours')}</div>
                  <div className="info-val">
                    {isGujarati ? (
                      <>
                        <strong>સોમવાર – શનિવાર:</strong> સવારે ૯:૦૦ – રાત્રે ૮:૦૦<br />
                        <strong>રવિવાર:</strong> સવારે ૯:૦૦ – બપોરે ૧૨:૩૦
                      </>
                    ) : (
                      <>
                        <strong>Monday – Saturday:</strong> 9:00 AM – 8:00 PM<br />
                        <strong>Sunday:</strong> 9:00 AM – 12:30 PM
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="shop-info-media" style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#0A0F1D' }}>
              <img
                src="/images/real/shop-signboard-havells.png"
                alt="Raj Electric Wooden official shop signboard in Amreli"
                className="shop-info-image"
                style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                loading="lazy"
              />
              <div style={{
                padding: '0.65rem 1rem',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                fontSize: '0.82rem',
                color: 'var(--color-dark-blue)',
                fontWeight: 600,
                textAlign: 'center',
                borderTop: '1px solid var(--color-border-subtle)'
              }}>
                {t('home.signboardCaption', '📸 Official Illuminated Shop Signboard • Amreli, Gujarat')}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bulk Quote Modal */}
      <BulkQuoteModal
        isOpen={isBulkModalOpen}
        onClose={() => setIsBulkModalOpen(false)}
        initialProduct={selectedProductForModal}
      />
    </>
  );
}
