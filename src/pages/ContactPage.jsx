import React, { useState } from 'react';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  ExternalLink, 
  AlertCircle,
  HelpCircle,
  Navigation,
  UserCheck
} from 'lucide-react';
import { BUSINESS_INFO } from '../config/businessInfo';
import { getGeneralEnquiryUrl, buildWhatsAppUrl } from '../utils/whatsapp';
import { useLanguage } from '../context/LanguageContext';

export default function ContactPage() {
  const { t, isGujarati } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: 'General Enquiry',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg('');
  };

  const validate = () => {
    if (!formData.name.trim()) {
      setErrorMsg(isGujarati ? 'કૃપા કરીને તમારું નામ લખો.' : 'Please enter your name.');
      return false;
    }
    if (!formData.phone.trim()) {
      setErrorMsg(isGujarati ? 'કૃપા કરીને તમારો મોબાઇલ અથવા WhatsApp નંબર લખો.' : 'Please enter your phone or WhatsApp number.');
      return false;
    }
    if (!formData.message.trim()) {
      setErrorMsg(isGujarati ? 'કૃપા કરીને તમારો પ્રશ્ન અથવા સંદેશ લખો.' : 'Please enter your message or question.');
      return false;
    }
    return true;
  };

  const handleSendViaWhatsApp = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const text = `*New Contact Message to ${BUSINESS_INFO.alternateName}*\n• Name: ${formData.name}\n• Phone: ${formData.phone}\n• Subject: ${formData.subject}\n• Message: ${formData.message}`;
    const url = buildWhatsAppUrl(text);
    window.open(url, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      {/* Header Banner */}
      <section className="section-light" style={{ padding: '3.5rem 0 2.5rem 0', borderBottom: '1px solid var(--color-border-subtle)' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '1rem' }}>
            <span className="section-tag">{t('contact.tag', 'Get in Touch')}</span>
            <h1 className="section-title">{t('contact.title', 'Visit Our Shop in Amreli')}</h1>
            <p className="section-subtitle">
              {t('contact.subtitle', 'We welcome walk-ins, phone consultations, and direct WhatsApp enquiries for electrical goods wholesale and retail.')}
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section section-white">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1.3fr',
            gap: '3.5rem',
            alignItems: 'start'
          }}>
            {/* Contact Details & Hours Column */}
            <div>
              <span className="section-tag">{isGujarati ? "ચકાસાયેલ વિગતો" : "Verified Details"}</span>
              <h2 style={{ fontSize: '1.85rem', color: 'var(--color-dark-blue)', marginBottom: '1.5rem' }}>
                {isGujarati ? BUSINESS_INFO.gujaratiName : BUSINESS_INFO.alternateName}
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
                {/* Address Item */}
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div className="info-icon-box">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.05rem', color: 'var(--color-dark-blue)', marginBottom: '0.25rem' }}>
                      {t('contact.storeAddressTitle', 'Shop Location')}
                    </h3>
                    <p style={{ margin: 0, color: 'var(--color-body-text)', lineHeight: '1.6' }}>
                      {isGujarati ? (
                        <>
                          {BUSINESS_INFO.address.gujaratiFormatted}<br />
                          {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.pincode}
                        </>
                      ) : (
                        <>
                          {BUSINESS_INFO.address.street}, {BUSINESS_INFO.address.city},<br />
                          {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.pincode}, India
                        </>
                      )}
                    </p>
                    <div style={{ marginTop: '0.5rem' }}>
                      <a
                        href={BUSINESS_INFO.address.directionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline btn-sm"
                      >
                        <Navigation size={14} />
                        <span>{t('contact.directionsBtn', 'Get Driving Directions')}</span>
                        <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Owner & Contact Person */}
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div className="info-icon-box">
                    <UserCheck size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.05rem', color: 'var(--color-dark-blue)', marginBottom: '0.25rem' }}>
                      {t('common.proprietor', 'Proprietor')}
                    </h3>
                    <p style={{ margin: 0, color: 'var(--color-body-text)', fontSize: '1.05rem', fontWeight: 700 }}>
                      {isGujarati ? `${BUSINESS_INFO.gujaratiOwnerName} (${BUSINESS_INFO.ownerName})` : `${BUSINESS_INFO.ownerName} (${BUSINESS_INFO.gujaratiOwnerName})`}
                    </p>
                    <span style={{ fontSize: '0.85rem', color: 'var(--color-primary-blue)' }}>
                      Raj Electric Wooden ({BUSINESS_INFO.gujaratiName})
                    </span>
                  </div>
                </div>

                {/* Phone Item */}
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div className="info-icon-box">
                    <Phone size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.05rem', color: 'var(--color-dark-blue)', marginBottom: '0.25rem' }}>
                      {t('contact.callUsTitle', 'Telephone Enquiries')}
                    </h3>
                    <p style={{ margin: 0, color: 'var(--color-body-text)' }}>
                      {isGujarati ? "ભાવ અને સ્ટોકની માહિતી માટે સીધો કૉલ કરો:" : "Call directly for immediate quotes or stock check:"}
                    </p>
                    <div style={{ marginTop: '0.35rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                      <a
                        href={`tel:${BUSINESS_INFO.contact.phoneTel}`}
                        style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-primary-blue)' }}
                      >
                        {BUSINESS_INFO.contact.phoneDisplay} {isGujarati ? "(મુખ્ય)" : "(Primary)"}
                      </a>
                      <a
                        href={`tel:${BUSINESS_INFO.contact.alternatePhoneTel}`}
                        style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--color-dark-blue)' }}
                      >
                        {BUSINESS_INFO.contact.alternatePhoneDisplay} {isGujarati ? "(બીજો)" : "(Alternate)"}
                      </a>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Item */}
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div className="info-icon-box" style={{ backgroundColor: 'var(--color-whatsapp-light)', color: 'var(--color-whatsapp-dark)', borderColor: '#C2F0D3' }}>
                    <MessageCircle size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.05rem', color: 'var(--color-dark-blue)', marginBottom: '0.25rem' }}>
                      {t('contact.whatsAppChatTitle', 'WhatsApp Chat & Photos')}
                    </h3>
                    <p style={{ margin: 0, color: 'var(--color-body-text)' }}>
                      {isGujarati
                        ? "હાથે લખેલી ચિઠ્ઠી, પ્રોડક્ટના ફોટા કે જથ્થા વિશે સીધી પૂછપરછ મોકલો:"
                        : "Send handwritten material lists, product photos, or requirement queries:"}
                    </p>
                    <div style={{ marginTop: '0.5rem' }}>
                      <a
                        href={getGeneralEnquiryUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-whatsapp btn-sm"
                      >
                        <MessageCircle size={15} />
                        <span>{t('contact.chatBtn', 'Chat on WhatsApp')} ({BUSINESS_INFO.contact.phoneDisplay})</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Business Hours Item */}
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div className="info-icon-box">
                    <Clock size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.05rem', color: 'var(--color-dark-blue)', marginBottom: '0.5rem' }}>
                      {t('contact.hoursTitle', 'Opening Hours')}
                    </h3>
                    <div style={{
                      backgroundColor: 'var(--color-light-grey)',
                      borderRadius: 'var(--radius-md)',
                      padding: '0.85rem 1rem',
                      border: '1px solid var(--color-border-subtle)',
                      fontSize: '0.92rem'
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                        <span><strong>{t('contact.monSat', 'Monday – Saturday')}:</strong></span>
                        <span style={{ color: 'var(--color-primary-blue)', fontWeight: 600 }}>{t('contact.monSatHours', '9:00 AM to 8:00 PM')}</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span><strong>{t('contact.sunday', 'Sunday')}:</strong></span>
                        <span style={{ color: 'var(--color-primary-blue)', fontWeight: 600 }}>{t('contact.sundayHours', '9:00 AM to 12:30 PM')}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Verified Business Card Card */}
                <div style={{
                  border: '1px solid var(--color-border-subtle)',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  backgroundColor: 'var(--color-light-grey)',
                  boxShadow: 'var(--shadow-sm)'
                }}>
                  <img
                    src="/images/real/visiting-card-manojbhai.jpg"
                    alt="Manojbhai Raj Electric Wooden official visiting card"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                  <div style={{ padding: '0.65rem 1rem', fontSize: '0.82rem', fontWeight: 600, color: 'var(--color-dark-blue)', textAlign: 'center', backgroundColor: 'var(--color-white)', borderTop: '1px solid var(--color-border-subtle)' }}>
                    {isGujarati ? "📸 અધિકૃત વિઝિટિંગ કાર્ડ • C&S Electric અને PARCOS ડીલર" : "📸 Verified Business Card • C&S Electric & PARCOS Dealer"}
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Message Form */}
            <div>
              <div className="enquiry-card">
                <div style={{ marginBottom: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.35rem', color: 'var(--color-dark-blue)', marginBottom: '0.4rem' }}>
                    {isGujarati ? "સંદેશ અથવા પૂછપરછ મોકલો" : "Send a Message or Enquiry"}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--color-dark-blue-muted)' }}>
                    {isGujarati
                      ? "ઇલેક્ટ્રિક સામાન અથવા હોલસેલ ક્વોટેશન વિશે પ્રશ્ન છે? સીધો મેસેજ મોકલો."
                      : "Have questions about electrical items or bulk quotes? Send your message directly to our counter."}
                  </p>
                </div>

                {submitted ? (
                  <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                    <div style={{ color: 'var(--color-success)', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                      <CheckCircle2 size={56} />
                    </div>
                    <h4 style={{ fontSize: '1.25rem', color: 'var(--color-dark-blue)', marginBottom: '0.5rem' }}>
                      {isGujarati ? "સંદેશ તૈયાર છે!" : "Message Prepared!"}
                    </h4>
                    <p style={{ fontSize: '0.92rem', color: 'var(--color-body-text)', marginBottom: '1.5rem' }}>
                      {isGujarati ? (
                        <>આભાર, <strong>{formData.name}</strong>. ઝડપી ઉત્તર મેળવવા માટે સીધા અમારા WhatsApp પર સંદેશ મોકલો:</>
                      ) : (
                        <>Thank you, <strong>{formData.name}</strong>. For the quickest response, send your message directly to our shop WhatsApp:</>
                      )}
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      <a
                        href={buildWhatsAppUrl(`*Message from ${formData.name} (${formData.phone})*\nSubject: ${formData.subject}\n\n${formData.message}`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-whatsapp btn-full"
                      >
                        <MessageCircle size={18} />
                        <span>{isGujarati ? "દુકાનના WhatsApp પર મોકલો" : "Send to Shop WhatsApp"}</span>
                      </a>
                      <button
                        type="button"
                        className="btn btn-outline btn-full"
                        onClick={() => setSubmitted(false)}
                      >
                        {isGujarati ? "બીજો સંદેશ લખો" : "Send Another Note"}
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    {errorMsg && (
                      <div style={{
                        padding: '0.75rem 1rem',
                        backgroundColor: '#FFEBEE',
                        color: '#C62828',
                        borderRadius: 'var(--radius-sm)',
                        marginBottom: '1.25rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontSize: '0.9rem'
                      }}>
                        <AlertCircle size={16} />
                        <span>{errorMsg}</span>
                      </div>
                    )}

                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-name">
                        {isGujarati ? "તમારું નામ" : "Your Name"} <span className="required">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder={isGujarati ? "દા.ત. કેતનભાઈ શાહ" : "e.g. Ketan Shah"}
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-phone">
                        {isGujarati ? "મોબાઇલ નંબર" : "Phone / Mobile Number"} <span className="required">*</span>
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        name="phone"
                        className="form-control"
                        placeholder={isGujarati ? "૧૦ અંકનો મોબાઇલ નંબર" : "e.g. 98790 94290"}
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-subject">
                        {isGujarati ? "વિષય" : "Subject"}
                      </label>
                      <select
                        id="contact-subject"
                        name="subject"
                        className="form-control"
                        value={formData.subject}
                        onChange={handleChange}
                      >
                        <option value="Product Enquiry">{isGujarati ? "પ્રોડક્ટ પૂછપરછ / સ્ટોક માહિતી" : "Product Enquiry / Availability"}</option>
                        <option value="Wholesale Quotation">{isGujarati ? "હોલસેલ અને બલ્ક ક્વોટેશન" : "Wholesale & Bulk Quotation"}</option>
                        <option value="Wooden Switchboards">{isGujarati ? "લાકડાના સ્વીચબોર્ડનો ઓર્ડર" : "Wooden Switchboards Order"}</option>
                        <option value="Electrician / Contractor Partner">{isGujarati ? "ઇલેક્ટ્રિશિયન / કોન્ટ્રાક્ટર પૂછપરછ" : "Electrician / Contractor Enquiry"}</option>
                        <option value="General Question">{isGujarati ? "સામાન્ય પૂછપરછ" : "General Question"}</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-message">
                        {isGujarati ? "તમારો સંદેશ અથવા પ્રશ્ન" : "Message / Query"} <span className="required">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        className="form-control"
                        rows="4"
                        placeholder={isGujarati ? "તમને જરૂરી ઇલેક્ટ્રિક સામાન કે પ્રશ્ન વિગતવાર લખો..." : "Describe the electrical items or requirements you need..."}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginTop: '1.5rem' }}>
                      <button
                        type="button"
                        className="btn btn-whatsapp"
                        onClick={handleSendViaWhatsApp}
                      >
                        <MessageCircle size={18} />
                        <span>{isGujarati ? "WhatsApp મેસેજ" : "WhatsApp Message"}</span>
                      </button>

                      <button
                        type="submit"
                        className="btn btn-primary"
                      >
                        <Send size={18} />
                        <span>{isGujarati ? "સંદેશ સબમિટ કરો" : "Submit Note"}</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Google Maps Embed / Location View */}
          <div style={{ marginTop: '4.5rem' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '1.25rem',
              flexWrap: 'wrap',
              gap: '1rem'
            }}>
              <div>
                <span className="section-tag" style={{ margin: 0 }}>{isGujarati ? "મેપ લોકેશન" : "Map Location"}</span>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--color-dark-blue)', marginTop: '0.35rem' }}>
                  {isGujarati ? "અમરેલી, બતાર વાડીમાં રાજ ઇલેક્ટ્રીક વુડનનું લોકેશન" : "Find Raj Electric Wooden in Batar Wadi, Amreli"}
                </h3>
              </div>
              <a
                href={BUSINESS_INFO.address.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm"
              >
                <Navigation size={14} />
                <span>{isGujarati ? "Google Maps એપમાં ખોલો" : "Open in Google Maps App"}</span>
                <ExternalLink size={12} />
              </a>
            </div>

            <div style={{
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-md)',
              border: '1px solid var(--color-border-subtle)',
              height: '420px',
              backgroundColor: 'var(--color-light-grey)'
            }}>
              {/* Google Maps Embed iframe centered on Batar Wadi, Amreli */}
              <iframe
                title="Raj Electric Wooden Map Location"
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://maps.google.com/maps?q=Batar+Wadi,+Amreli,+Gujarat+365601&t=&z=15&ie=UTF8&iwloc=&output=embed"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
