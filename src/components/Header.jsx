import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Phone, MessageCircle, Menu, X, Zap } from 'lucide-react';
import { BUSINESS_INFO } from '../config/businessInfo';
import { getGeneralEnquiryUrl } from '../utils/whatsapp';
import { useLanguage } from '../context/LanguageContext';
import LanguageToggle from './LanguageToggle';
import InstallAppButton from './InstallAppButton';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, isGujarati } = useLanguage();

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          {/* Brand Logo & Name */}
          <Link to="/" className="brand-link" onClick={closeMenu}>
            <div className="brand-logo-icon" aria-label="Electrical Bolt Logo">
              <Zap size={24} fill="currentColor" />
            </div>
            <div className="brand-text">
              <span className="brand-name">{isGujarati ? BUSINESS_INFO.gujaratiName : BUSINESS_INFO.name}</span>
              <span className="brand-locality">{isGujarati ? "બતાર વાડી, અમરેલી" : "Batar Wadi, Amreli"}</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="nav-desktop" aria-label="Main Navigation">
            <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} end>
              {t('nav.home', 'Home')}
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              {t('nav.about', 'About')}
            </NavLink>
            <NavLink to="/products" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              {t('nav.products', 'Products')}
            </NavLink>
            <NavLink to="/wholesale-enquiry" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              {t('nav.wholesale', 'Wholesale')}
            </NavLink>
            <NavLink to="/gallery" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              {t('nav.gallery', 'Gallery')}
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              {t('nav.contact', 'Contact')}
            </NavLink>
          </nav>

          {/* Desktop Quick Actions & Language Switcher */}
          <div className="header-actions">
            <LanguageToggle />
            <a
              href={`tel:${BUSINESS_INFO.contact.phoneTel}`}
              className="btn btn-outline btn-sm"
              title="Call the shop directly"
            >
              <Phone size={15} />
              <span>{isGujarati ? "કૉલ કરો" : "Call Now"}</span>
            </a>
            <a
              href={getGeneralEnquiryUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-sm"
              title="Chat with Raj Electric on WhatsApp"
            >
              <MessageCircle size={15} />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <>
          <div className="mobile-nav-overlay" onClick={closeMenu} />
          <aside className="mobile-nav-drawer" aria-label="Mobile Navigation">
            <div className="mobile-drawer-header">
              <div className="brand-link">
                <div className="brand-logo-icon" style={{ width: 36, height: 36 }}>
                  <Zap size={20} fill="currentColor" />
                </div>
                <div className="brand-text">
                  <span className="brand-name" style={{ fontSize: '1.1rem' }}>
                    {isGujarati ? BUSINESS_INFO.gujaratiName : BUSINESS_INFO.name}
                  </span>
                  <span className="brand-locality">{isGujarati ? "અમરેલી, ગુજરાત" : "Amreli, Gujarat"}</span>
                </div>
              </div>
              <button className="modal-close-btn" onClick={closeMenu} aria-label="Close menu">
                <X size={20} />
              </button>
            </div>

            {/* Mobile Language Selector */}
            <div style={{ padding: '0.75rem 1rem 0' }}>
              <LanguageToggle variant="mobile" />
            </div>

            <nav className="mobile-nav-links">
              <NavLink to="/" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu} end>
                <span>{t('nav.home', 'Home')}</span>
              </NavLink>
              <NavLink to="/about" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
                <span>{t('nav.about', 'About Us')}</span>
              </NavLink>
              <NavLink to="/products" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
                <span>{t('nav.products', 'Products Catalogue')}</span>
              </NavLink>
              <NavLink to="/wholesale-enquiry" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
                <span>{t('nav.wholesale', 'Wholesale & Bulk Order')}</span>
              </NavLink>
              <NavLink to="/gallery" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
                <span>{t('nav.gallery', 'Photo Gallery')}</span>
              </NavLink>
              <NavLink to="/contact" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
                <span>{t('nav.contact', 'Contact & Location')}</span>
              </NavLink>
            </nav>

            <div className="mobile-drawer-actions">
              <InstallAppButton className="btn-full" />
              <a href={`tel:${BUSINESS_INFO.contact.phoneTel}`} className="btn btn-primary btn-full">
                <Phone size={18} />
                <span>{isGujarati ? `કૉલ કરો ${BUSINESS_INFO.contact.phoneDisplay}` : `Call ${BUSINESS_INFO.contact.phoneDisplay}`}</span>
              </a>
              <a
                href={getGeneralEnquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-full"
              >
                <MessageCircle size={18} />
                <span>WhatsApp</span>
              </a>
            </div>
          </aside>
        </>
      )}
    </>
  );
}
