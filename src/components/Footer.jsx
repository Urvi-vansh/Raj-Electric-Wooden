import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, MessageCircle, Clock, ExternalLink, ChevronRight } from 'lucide-react';
import { BUSINESS_INFO } from '../config/businessInfo';
import { getGeneralEnquiryUrl } from '../utils/whatsapp';
import { useLanguage } from '../context/LanguageContext';
import InstallAppButton from './InstallAppButton';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t, isGujarati } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Business Overview */}
          <div className="footer-col">
            <Link to="/" className="brand-link" style={{ marginBottom: '1.25rem' }}>
              <div className="brand-logo-box" style={{ width: 42, height: 42 }} aria-label="Raj Electric & Wooden Logo">
                <img
                  src="/images/logo-icon.png"
                  alt="Raj Electric & Wooden REW Logo"
                  className="brand-logo-img"
                />
              </div>
              <div className="brand-text">
                <span className="brand-name" style={{ fontSize: '1.2rem' }}>
                  {isGujarati ? BUSINESS_INFO.gujaratiName : BUSINESS_INFO.name}
                </span>
                <span className="brand-locality">{isGujarati ? "અમરેલી, ગુજરાત" : "Amreli, Gujarat"}</span>
              </div>
            </Link>
            <p className="footer-desc">
              {t('footer.desc', 'Your trusted partner for electrical goods wholesale and retail in Amreli. Supplying building wires, LED fixtures, modular switches, handcrafted wooden switchboards, and electrical accessories.')}
            </p>
            <div style={{ marginTop: '1rem', display: 'flex', gap: '0.65rem', flexWrap: 'wrap' }}>
              <a
                href={getGeneralEnquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-sm"
              >
                <MessageCircle size={16} />
                <span>{t('footer.quickWhatsApp', 'Quick WhatsApp Chat')}</span>
              </a>
              <InstallAppButton className="btn-sm" />
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">{t('footer.navTitle', 'Navigation')}</h4>
            <ul className="footer-links">
              <li className="footer-link-item">
                <Link to="/"><ChevronRight size={14} /> {t('nav.home', 'Home')}</Link>
              </li>
              <li className="footer-link-item">
                <Link to="/about"><ChevronRight size={14} /> {t('nav.about', 'About Us')}</Link>
              </li>
              <li className="footer-link-item">
                <Link to="/products"><ChevronRight size={14} /> {t('nav.products', 'Product Catalogue')}</Link>
              </li>
              <li className="footer-link-item">
                <Link to="/wholesale-enquiry"><ChevronRight size={14} /> {t('nav.wholesale', 'Wholesale Enquiry')}</Link>
              </li>
              <li className="footer-link-item">
                <Link to="/gallery"><ChevronRight size={14} /> {t('nav.gallery', 'Photo Gallery')}</Link>
              </li>
              <li className="footer-link-item">
                <Link to="/contact"><ChevronRight size={14} /> {t('nav.contact', 'Contact & Directions')}</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Product Categories */}
          <div className="footer-col">
            <h4 className="footer-col-title">{t('footer.categoriesTitle', 'Categories')}</h4>
            <ul className="footer-links">
              <li className="footer-link-item">
                <Link to="/products?category=wires-cables">
                  <ChevronRight size={14} /> {isGujarati ? "વાયર અને કેબલ" : "Wires & Cables"}
                </Link>
              </li>
              <li className="footer-link-item">
                <Link to="/products?category=led-lights">
                  <ChevronRight size={14} /> {isGujarati ? "LED લાઇટ્સ અને બલ્બ" : "LED Lights & Bulbs"}
                </Link>
              </li>
              <li className="footer-link-item">
                <Link to="/products?category=switches-sockets">
                  <ChevronRight size={14} /> {isGujarati ? "સ્વીચ અને સોકેટ્સ" : "Switches & Sockets"}
                </Link>
              </li>
              <li className="footer-link-item">
                <Link to="/products?category=electrical-boards">
                  <ChevronRight size={14} /> {isGujarati ? "ઇલેક્ટ્રિક બોર્ડ (લાકડાના)" : "Electrical Boards"}
                </Link>
              </li>
              <li className="footer-link-item">
                <Link to="/products?category=fans-accessories">
                  <ChevronRight size={14} /> {isGujarati ? "પંખા અને એસેસરીઝ" : "Fans & Accessories"}
                </Link>
              </li>
              <li className="footer-link-item">
                <Link to="/products?category=other-electrical">
                  <ChevronRight size={14} /> {isGujarati ? "અન્ય ઇલેક્ટ્રિક સામાન" : "Other Electrical Goods"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Shop Information */}
          <div className="footer-col">
            <h4 className="footer-col-title">{t('footer.contactTitle', 'Shop Information')}</h4>
            <div className="footer-contact-item">
              <MapPin size={18} />
              <div>
                <strong>{isGujarati ? BUSINESS_INFO.gujaratiName : BUSINESS_INFO.alternateName}</strong><br />
                {isGujarati ? BUSINESS_INFO.address.gujaratiFormatted : BUSINESS_INFO.address.formatted}
                <div style={{ marginTop: '0.25rem' }}>
                  <a
                    href={BUSINESS_INFO.address.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: '0.82rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}
                  >
                    <span>{t('footer.directions', 'Get Directions')}</span> <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>

            <div className="footer-contact-item">
              <Phone size={18} />
              <div>
                <strong>{isGujarati ? "સંપર્ક નંબર:" : "Phone:"}</strong>{' '}
                <a href={`tel:${BUSINESS_INFO.contact.phoneTel}`} style={{ fontWeight: 600 }}>
                  {BUSINESS_INFO.contact.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="footer-contact-item">
              <Clock size={18} />
              <div>
                <strong>{isGujarati ? "દુકાનનો સમય:" : "Business Hours:"}</strong><br />
                {isGujarati ? (
                  <>
                    સોમવાર – શનિવાર: સવારે ૯:૦૦ – રાત્રે ૮:૦૦<br />
                    રવિવાર: સવારે ૯:૦૦ – બપોરે ૧૨:૩૦
                  </>
                ) : (
                  <>
                    Mon–Sat: 9:00 AM – 8:00 PM<br />
                    Sunday: 9:00 AM – 12:30 PM
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Notice */}
        <div className="footer-bottom">
          <p>© {currentYear} {isGujarati ? BUSINESS_INFO.gujaratiName : BUSINESS_INFO.name}. {t('footer.rights', 'All rights reserved.')}</p>
          <p>
            {t('footer.wholesalerFooter', 'Electrical Wholesaler and Retailer in Amreli, Gujarat 365601.')}
          </p>
        </div>
      </div>

      {/* Bottom Information Line (moved from top) */}
      <div className="bottom-info-strip">
        <div className="container bottom-info-inner">
          <div className="bottom-info-left">
            <span className="bottom-info-item">
              <MapPin size={14} />
              <span>{isGujarati ? BUSINESS_INFO.address.gujaratiFormatted : BUSINESS_INFO.address.formatted}</span>
            </span>
            <span className="bottom-info-item">
              <Clock size={14} />
              <span>{isGujarati ? "સોમ-શનિ: સવારે ૯:૦૦ - રાત્રે ૮:૦૦ | રવિ: સવારે ૯:૦૦ - બપોરે ૧૨:૩૦" : BUSINESS_INFO.hoursSummary}</span>
            </span>
          </div>
          <div className="bottom-info-right">
            <a href={`tel:${BUSINESS_INFO.contact.phoneTel}`} className="bottom-info-item" style={{ fontWeight: 600 }}>
              <Phone size={14} />
              <span>{isGujarati ? "કૉલ:" : "Call:"} {BUSINESS_INFO.contact.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
