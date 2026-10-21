import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  MapPin, 
  Phone, 
  MessageCircle, 
  CheckCircle2, 
  Package, 
  Users, 
  Zap, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { BUSINESS_INFO } from '../config/businessInfo';
import { getGeneralEnquiryUrl } from '../utils/whatsapp';
import { useLanguage } from '../context/LanguageContext';

export default function AboutPage() {
  const { t, isGujarati } = useLanguage();

  return (
    <div className="about-page">
      {/* Header Banner */}
      <section className="section-light" style={{ padding: '3.5rem 0 2.5rem 0', borderBottom: '1px solid var(--color-border-subtle)' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '1.5rem' }}>
            <span className="section-tag">{t('about.tag', 'About Our Business')}</span>
            <h1 className="section-title">{t('about.title', 'Electrical Wholesaler & Retailer in Amreli')}</h1>
            <p className="section-subtitle">
              {t('about.subtitle', 'Raj Electric Wooden (Raj Electric & Wooden Works) provides dependable electrical supplies, wooden boards, and installation hardware to the Amreli community.')}
            </p>
          </div>
        </div>
      </section>

      {/* Main Story & Purpose */}
      <section className="section section-white">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.9fr',
            gap: '3.5rem',
            alignItems: 'center',
            marginBottom: '4.5rem'
          }}>
            <div>
              <span className="section-tag">{t('about.profileTag', 'Our Shop Profile')}</span>
              <h2 style={{ fontSize: 'clamp(1.7rem, 3vw, 2.3rem)', color: 'var(--color-dark-blue)', marginBottom: '1.25rem' }}>
                {t('about.profileTitle', 'Serving Residential, Commercial & Trade Electrical Needs')}
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--color-body-text)', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                {isGujarati ? (
                  <>અમરેલીના <strong>{BUSINESS_INFO.address.gujaratiFormatted}</strong> ખાતે <strong>મનોજભાઈ ({BUSINESS_INFO.ownerName})</strong> દ્વારા સંચાલિત <strong>{BUSINESS_INFO.gujaratiName} ({BUSINESS_INFO.alternateName})</strong>, નામાંકિત બ્રાન્ડ્સ જેવી કે <strong>HAVELLS</strong>, <strong>C&amp;S Electric (WiNtrip)</strong>, <strong>PARCOS</strong>, અને <strong>KOSCH</strong> ના અધિકૃત હોલસેલ તથા રિટેલ ડીલર છે.</>
                ) : (
                  <>Managed by <strong>Manojbhai ({BUSINESS_INFO.gujaratiOwnerName})</strong> at <strong>{BUSINESS_INFO.address.street}, {BUSINESS_INFO.address.city}</strong>, <strong>Raj Electric Wooden ({BUSINESS_INFO.gujaratiName})</strong> operates as an authorized wholesale and retail dealer for leading electrical brands including <strong>HAVELLS</strong>, <strong>C&amp;S Electric (WiNtrip)</strong>, <strong>PARCOS</strong>, and <strong>KOSCH</strong>.</>
                )}
              </p>
              <p style={{ fontSize: '1.05rem', color: 'var(--color-body-text)', lineHeight: '1.7', marginBottom: '1.75rem' }}>
                {t('about.storyP2', 'From our signature handcrafted wooden switchboards to high-end modular designer plates, home appliances, and certified building wires, we supply local electricians, construction contractors, and residential buyers with direct counter pricing and dependable trade service.')}
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/products" className="btn btn-primary">
                  <span>{t('about.exploreBtn', 'Explore Catalogue')}</span>
                  <ArrowRight size={16} />
                </Link>
                <a href={getGeneralEnquiryUrl()} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                  <MessageCircle size={16} />
                  <span>{t('about.chatBtn', 'Chat on WhatsApp')}</span>
                </a>
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              <div style={{
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-lg)',
                border: '1px solid var(--color-border-subtle)'
              }}>
                <img
                  src="/images/real/raj-electric-kosch-banner.png"
                  alt="Raj Electric Wooden Premium Modular Electrical Solutions"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
              <div style={{
                position: 'absolute',
                bottom: '1rem',
                left: '1rem',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(6px)',
                padding: '0.65rem 1rem',
                borderRadius: 'var(--radius-md)',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: 'var(--color-dark-blue)',
                border: '1px solid var(--color-soft-blue)'
              }}>
                {t('about.badgePhoto', '📸 Official Raj Electric Wooden Modular Collection')}
              </div>
            </div>
          </div>

          {/* What We Supply Grid */}
          <div style={{
            backgroundColor: 'var(--color-light-blue)',
            borderRadius: 'var(--radius-xl)',
            padding: '3.5rem 2.5rem',
            border: '1px solid var(--color-soft-blue)',
            marginBottom: '4.5rem'
          }}>
            <div className="section-header" style={{ marginBottom: '2.5rem' }}>
              <span className="section-tag" style={{ backgroundColor: 'var(--color-white)' }}>
                {t('about.scopeTag', 'Catalogue Scope')}
              </span>
              <h2 className="section-title">{t('about.scopeTitle', 'What You Can Source From Us')}</h2>
              <p className="section-subtitle">
                {t('about.scopeSubtitle', 'Comprehensive electrical inventory available directly from our Amreli shop floor.')}
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1.75rem'
            }}>
              <div style={{
                backgroundColor: 'var(--color-white)',
                padding: '1.75rem',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--color-border-subtle)'
              }}>
                <div style={{
                  width: 44,
                  height: 44,
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--color-light-blue)',
                  color: 'var(--color-primary-blue)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }}>
                  <Zap size={22} />
                </div>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--color-dark-blue)', marginBottom: '0.5rem' }}>
                  {t('about.item1Title', 'Copper Wires & Cables')}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-body-text)', lineHeight: '1.6' }}>
                  {t('about.item1Desc', 'Standard single core multi-strand building wires (1.5mm, 2.5mm, 4.0mm) in 90m coils and 3-core submersible pump cables.')}
                </p>
              </div>

              <div style={{
                backgroundColor: 'var(--color-white)',
                padding: '1.75rem',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--color-border-subtle)'
              }}>
                <div style={{
                  width: 44,
                  height: 44,
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--color-light-blue)',
                  color: 'var(--color-primary-blue)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }}>
                  <Package size={22} />
                </div>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--color-dark-blue)', marginBottom: '0.5rem' }}>
                  {t('about.item2Title', 'Switches, Sockets & Boards')}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-body-text)', lineHeight: '1.6' }}>
                  {t('about.item2Desc', 'Modern modular switches, shuttered sockets, fan step regulators, polished wooden switch boards, and PVC gang boxes.')}
                </p>
              </div>

              <div style={{
                backgroundColor: 'var(--color-white)',
                padding: '1.75rem',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--color-border-subtle)'
              }}>
                <div style={{
                  width: 44,
                  height: 44,
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--color-light-blue)',
                  color: 'var(--color-primary-blue)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }}>
                  <Users size={22} />
                </div>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--color-dark-blue)', marginBottom: '0.5rem' }}>
                  {t('about.item3Title', 'Lighting & Protection')}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-body-text)', lineHeight: '1.6' }}>
                  {t('about.item3Desc', 'Ceiling LED panel lights, downlights, battens, miniature circuit breakers (MCBs), insulation tape sets, and tester tools.')}
                </p>
              </div>
            </div>
          </div>

          {/* Business Values / Direct Approach */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '2.5rem',
            alignItems: 'center'
          }}>
            <div>
              <span className="section-tag">{t('about.valuesTag', 'Direct Counter Service')}</span>
              <h2 style={{ fontSize: '1.85rem', color: 'var(--color-dark-blue)', marginBottom: '1rem' }}>
                {t('about.valuesTitle', 'Honest Pricing, Direct Communication')}
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--color-body-text)', lineHeight: '1.7', marginBottom: '1rem' }}>
                {t('about.valuesDesc', 'Electrical material requirements vary significantly based on wire lengths, brand specifications, and lot quantities. For this reason, we provide direct WhatsApp and in-person quotations rather than impersonal automated checkouts.')}
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.75rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.95rem' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-success)', flexShrink: 0 }} />
                  <span>{t('about.val1', 'Direct phone and WhatsApp access to our Amreli counter.')}</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.95rem' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-success)', flexShrink: 0 }} />
                  <span>{t('about.val2', 'Flexibility for single residential items or whole building wiring bills.')}</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.95rem' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-success)', flexShrink: 0 }} />
                  <span>{t('about.val3', 'Convenient location in Batar Wadi with easy transport access.')}</span>
                </li>
              </ul>

              <a href={`tel:${BUSINESS_INFO.contact.phoneTel}`} className="btn btn-outline">
                <Phone size={16} />
                <span>{t('about.callBtn', 'Call Us')}: {BUSINESS_INFO.contact.phoneDisplay}</span>
              </a>
            </div>

            <div style={{
              backgroundColor: 'var(--color-light-grey)',
              padding: '2rem',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--color-border-subtle)'
            }}>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--color-dark-blue)', marginBottom: '1rem' }}>
                {t('about.infoTitle', 'Shop Information & Hours')}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.95rem' }}>
                <div>
                  <strong>{t('about.shopNameLabel', 'Shop Name:')}</strong> {isGujarati ? `${BUSINESS_INFO.gujaratiName} (${BUSINESS_INFO.alternateName})` : BUSINESS_INFO.alternateName}
                </div>
                <div>
                  <strong>{t('about.addressLabel', 'Address:')}</strong> {isGujarati ? BUSINESS_INFO.address.gujaratiFormatted : BUSINESS_INFO.address.formatted}
                </div>
                <div>
                  <strong>{t('about.workingDaysLabel', 'Working Days:')}</strong> {t('about.workingDaysVal', 'Monday to Saturday (9:00 AM – 8:00 PM)')}
                </div>
                <div>
                  <strong>{t('about.sundayLabel', 'Sunday Hours:')}</strong> {t('about.sundayVal', '9:00 AM – 12:30 PM')}
                </div>
                <div>
                  <strong>{t('about.locationLabel', 'Primary Location:')}</strong> {t('about.locationVal', 'Batar Wadi, Amreli, Gujarat 365601')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
