import React, { useState } from 'react';
import { 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  Building2, 
  Wrench, 
  Store, 
  HelpCircle, 
  Phone,
  FileSpreadsheet,
  AlertCircle,
  Clock,
  Sparkles
} from 'lucide-react';
import { BUSINESS_INFO } from '../config/businessInfo';
import { CATEGORIES } from '../data/categories';
import { getBulkEnquiryUrl } from '../utils/whatsapp';
import { useLanguage } from '../context/LanguageContext';

export default function BulkEnquiryPage() {
  const { t, isGujarati } = useLanguage();
  const [formData, setFormData] = useState({
    customerName: '',
    mobile: '',
    customerType: 'Contractor',
    category: 'Wires and Cables',
    productName: '',
    quantity: '',
    notes: '',
    preferredContact: 'WhatsApp'
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg('');
  };

  const validate = () => {
    if (!formData.customerName.trim()) {
      setErrorMsg('Please enter your full name.');
      return false;
    }
    if (!formData.mobile.trim() || formData.mobile.trim().length < 8) {
      setErrorMsg('Please enter a valid mobile number for quotation follow-up.');
      return false;
    }
    if (!formData.quantity.trim()) {
      setErrorMsg('Please state the required quantity (e.g. 10 coils, 100 switches).');
      return false;
    }
    return true;
  };

  const handleSendWhatsApp = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const url = getBulkEnquiryUrl(formData);
    window.open(url, '_blank', 'noopener,noreferrer');
    setFormSubmitted(true);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (!validate()) return;
    // Honest UI: Shows submission confirmed state and prompts sending on WhatsApp for immediate review
    setFormSubmitted(true);
  };

  const handlePresetSelect = (presetName, presetCategory, presetQuantity) => {
    setFormData(prev => ({
      ...prev,
      productName: presetName,
      category: presetCategory,
      quantity: presetQuantity
    }));
    window.scrollTo({ top: 380, behavior: 'smooth' });
  };

  return (
    <div className="bulk-enquiry-page">
      {/* Header Banner */}
      <section className="section-light" style={{ padding: '3.5rem 0 2.5rem 0', borderBottom: '1px solid var(--color-border-subtle)' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '1.5rem' }}>
            <span className="section-tag">{t('wholesale.tag', 'Direct Wholesale Counter')}</span>
            <h1 className="section-title">{t('wholesale.title', 'Wholesale & Bulk Order Quotation')}</h1>
            <p className="section-subtitle">
              {t('wholesale.subtitle', 'Supplying building contractors, licensed electricians, sub-dealers, and residential developers across Amreli and Saurashtra.')}
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.25rem',
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            <div style={{
              backgroundColor: 'var(--color-white)',
              padding: '1.25rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--color-border-subtle)',
              textAlign: 'center'
            }}>
              <Wrench size={24} style={{ color: 'var(--color-primary-blue)', margin: '0 auto 0.5rem auto' }} />
              <div style={{ fontWeight: 700, color: 'var(--color-dark-blue)', fontSize: '0.95rem' }}>
                {isGujarati ? 'ઇલેક્ટ્રિશિયન માટે' : 'For Electricians'}
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--color-dark-blue-muted)' }}>
                {isGujarati ? 'પ્રોજેક્ટ વાયરિંગ મટિરિયલ અને જથ્થાબંધ કોઈલ ભાવ' : 'Project-based material lists & batch coil rates'}
              </div>
            </div>

            <div style={{
              backgroundColor: 'var(--color-white)',
              padding: '1.25rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--color-border-subtle)',
              textAlign: 'center'
            }}>
              <Building2 size={24} style={{ color: 'var(--color-primary-blue)', margin: '0 auto 0.5rem auto' }} />
              <div style={{ fontWeight: 700, color: 'var(--color-dark-blue)', fontSize: '0.95rem' }}>
                {isGujarati ? 'કોન્ટ્રાક્ટર્સ માટે' : 'For Contractors'}
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--color-dark-blue-muted)' }}>
                {isGujarati ? 'આખા મકાનનું વાયરિંગ, MCB બોક્સ અને મોડ્યુલર સેટ' : 'Full building wiring, MCB boxes & modular lots'}
              </div>
            </div>

            <div style={{
              backgroundColor: 'var(--color-white)',
              padding: '1.25rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--color-border-subtle)',
              textAlign: 'center'
            }}>
              <Store size={24} style={{ color: 'var(--color-primary-blue)', margin: '0 auto 0.5rem auto' }} />
              <div style={{ fontWeight: 700, color: 'var(--color-dark-blue)', fontSize: '0.95rem' }}>
                {isGujarati ? 'રિટેલર્સ / દુકાનદારો માટે' : 'For Retailers'}
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--color-dark-blue-muted)' }}>
                {isGujarati ? 'સ્વીચો, ટેપ અને એસેસરીઝનું બોક્સ પેકિંગ' : 'Box packaging of switches, tapes & accessories'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="section section-white">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 0.9fr',
            gap: '3rem',
            alignItems: 'start'
          }}>
            {/* Form Column */}
            <div>
              <div className="enquiry-card">
                <div style={{ marginBottom: '1.75rem' }}>
                  <h2 style={{ fontSize: '1.6rem', color: 'var(--color-dark-blue)', marginBottom: '0.5rem' }}>
                    {t('wholesale.formTitle', 'Enquiry Details')}
                  </h2>
                  <p style={{ fontSize: '0.92rem', color: 'var(--color-dark-blue-muted)' }}>
                    {isGujarati
                      ? "નીચે જરૂરિયાત જણાવો. તમે તાત્કાલિક અમારા દુકાનના WhatsApp પર મોકલી શકો છો."
                      : "Fill out the requirements below. You can send this instantly to our shop WhatsApp or submit it for reference."}
                  </p>
                </div>

                {formSubmitted ? (
                  <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                    <div style={{ color: 'var(--color-success)', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                      <CheckCircle2 size={64} />
                    </div>
                    <h3 style={{ fontSize: '1.4rem', color: 'var(--color-dark-blue)', marginBottom: '0.75rem' }}>
                      {isGujarati ? "હોલસેલ પૂછપરછ તૈયાર છે!" : "Bulk Enquiry Prepared!"}
                    </h3>
                    <p style={{ color: 'var(--color-body-text)', marginBottom: '1.75rem', lineHeight: '1.6' }}>
                      {isGujarati ? (
                        <>આભાર, <strong>{formData.customerName}</strong>. દૈનિક કોપર અને હોલસેલ દરો મુજબ તાત્કાલિક ચોક્કસ ભાવ મેળવવા નીચે ક્લિક કરી સીધા અમારા WhatsApp નંબર <strong>+91 98790 94290</strong> પર વિગતો મોકલો.</>
                      ) : (
                        <>Thank you, <strong>{formData.customerName}</strong>. Since quotation rates depend on daily copper and manufacturer wholesale pricing, click below to send your details directly to our shop WhatsApp at <strong>+91 98790 94290</strong> for immediate confirmation.</>
                      )}
                    </p>

                    <div style={{
                      backgroundColor: 'var(--color-light-grey)',
                      borderRadius: 'var(--radius-md)',
                      padding: '1.25rem',
                      textAlign: 'left',
                      marginBottom: '1.75rem',
                      fontSize: '0.9rem',
                      border: '1px solid var(--color-border-subtle)'
                    }}>
                      <div style={{ fontWeight: 700, color: 'var(--color-dark-blue)', marginBottom: '0.5rem' }}>
                        {isGujarati ? "તમારી પૂછપરછની વિગત:" : "Summary of your request:"}
                      </div>
                      <div>• <strong>{isGujarati ? "ગ્રાહક:" : "Customer:"}</strong> {formData.customerName} ({formData.customerType})</div>
                      <div>• <strong>{isGujarati ? "મોબાઇલ:" : "Mobile:"}</strong> {formData.mobile}</div>
                      <div>• <strong>{isGujarati ? "કેટેગરી:" : "Category:"}</strong> {formData.category}</div>
                      <div>• <strong>{isGujarati ? "પ્રોડક્ટ:" : "Product:"}</strong> {formData.productName || (isGujarati ? 'સામાન્ય જરૂરિયાત' : 'General requirements')}</div>
                      <div>• <strong>{isGujarati ? "જથ્થો:" : "Quantity:"}</strong> {formData.quantity}</div>
                      {formData.notes && <div>• <strong>{isGujarati ? "નોંધ:" : "Notes:"}</strong> {formData.notes}</div>}
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      <a
                        href={getBulkEnquiryUrl(formData)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-whatsapp btn-lg"
                      >
                        <MessageCircle size={20} />
                        <span>{isGujarati ? "WhatsApp પર મોકલો (+91 98790 94290)" : "Send via WhatsApp to +91 98790 94290"}</span>
                      </a>

                      <button
                        type="button"
                        className="btn btn-outline"
                        onClick={() => setFormSubmitted(false)}
                      >
                        {isGujarati ? "બીજી પૂછપરછ મોકલો" : "Submit Another Enquiry"}
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmitForm}>
                    {errorMsg && (
                      <div style={{
                        padding: '0.85rem 1rem',
                        backgroundColor: '#FFEBEE',
                        color: '#C62828',
                        borderRadius: 'var(--radius-sm)',
                        marginBottom: '1.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontSize: '0.92rem'
                      }}>
                        <AlertCircle size={18} />
                        <span>{errorMsg}</span>
                      </div>
                    )}

                    {/* Customer Name & Mobile */}
                    <div className="form-grid-2">
                      <div className="form-group">
                        <label className="form-label" htmlFor="customerName">
                          {t('wholesale.fullNameLabel', 'Customer Name')} <span className="required">*</span>
                        </label>
                        <input
                          id="customerName"
                          type="text"
                          name="customerName"
                          className="form-control"
                          placeholder={t('wholesale.placeholderName', 'Your Name or Business Name')}
                          value={formData.customerName}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label className="form-label" htmlFor="mobile">
                          {t('wholesale.phoneLabel', 'Mobile Number')} <span className="required">*</span>
                        </label>
                        <input
                          id="mobile"
                          type="tel"
                          name="mobile"
                          className="form-control"
                          placeholder={t('wholesale.placeholderPhone', 'e.g. +91 98790 94290')}
                          value={formData.mobile}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    {/* Customer Type & Preferred Contact */}
                    <div className="form-grid-2">
                      <div className="form-group">
                        <label className="form-label" htmlFor="customerType">
                          {t('wholesale.customerTypeLabel', 'Customer Type')} <span className="required">*</span>
                        </label>
                        <select
                          id="customerType"
                          name="customerType"
                          className="form-control"
                          value={formData.customerType}
                          onChange={handleChange}
                        >
                          {BUSINESS_INFO.targetCustomerTypes.map(tType => (
                            <option key={tType.value} value={tType.value}>
                              {isGujarati ? (tType.gujaratiLabel || tType.label) : tType.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="form-group">
                        <label className="form-label" htmlFor="preferredContact">
                          {isGujarati ? "સંપર્કની રીત" : "Preferred Contact Method"}
                        </label>
                        <select
                          id="preferredContact"
                          name="preferredContact"
                          className="form-control"
                          value={formData.preferredContact}
                          onChange={handleChange}
                        >
                          <option value="WhatsApp">{isGujarati ? "WhatsApp (સૌથી ઝડપી જવાબ)" : "WhatsApp (Fastest response)"}</option>
                          <option value="Phone Call">{isGujarati ? "સીધો ફોન કૉલ" : "Phone Call"}</option>
                          <option value="Shop Visit">{isGujarati ? "રૂબરૂ દુકાન મુલાકાત (અમરેલી)" : "Shop Counter Visit (Amreli)"}</option>
                        </select>
                      </div>
                    </div>

                    {/* Product Category & Required Quantity */}
                    <div className="form-grid-2">
                      <div className="form-group">
                        <label className="form-label" htmlFor="category">
                          {t('wholesale.productLabel', 'Product Category')} <span className="required">*</span>
                        </label>
                        <select
                          id="category"
                          name="category"
                          className="form-control"
                          value={formData.category}
                          onChange={handleChange}
                        >
                          {CATEGORIES.map(c => (
                            <option key={c.id} value={c.name}>
                              {isGujarati ? t(`categories.${c.id}.name`, c.name) : c.name}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="form-group">
                        <label className="form-label" htmlFor="quantity">
                          {isGujarati ? "જરૂરી જથ્થો (નંગ / મીટર)" : "Required Quantity"} <span className="required">*</span>
                        </label>
                        <input
                          id="quantity"
                          type="text"
                          name="quantity"
                          className="form-control"
                          placeholder={isGujarati ? "દા.ત. ૨૦ કોઈલ, ૧૫૦ સ્વીચ, ૪૦ લાઇટ" : "e.g. 20 coils, 150 switches, 40 lights"}
                          value={formData.quantity}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    {/* Product Name or Description */}
                    <div className="form-group">
                      <label className="form-label" htmlFor="productName">
                        {isGujarati ? "પ્રોડક્ટનું નામ / વાયર સાઇઝ / મોડેલ" : "Product Name / Wire Size / Model Specification"}
                      </label>
                      <input
                        id="productName"
                        type="text"
                        name="productName"
                        className="form-control"
                        placeholder={isGujarati ? "દા.ત. ૧.૫ sq mm કોપર વાયર + 6A મોડ્યુલર સ્વીચો" : "e.g. 1.5 sq mm red/black copper wire + 6A modular switches"}
                        value={formData.productName}
                        onChange={handleChange}
                      />
                    </div>

                    {/* Additional Requirements */}
                    <div className="form-group">
                      <label className="form-label" htmlFor="notes">
                        {t('wholesale.detailsLabel', 'Additional Requirements or Site Notes')}
                      </label>
                      <textarea
                        id="notes"
                        name="notes"
                        className="form-control"
                        rows="3"
                        placeholder={t('wholesale.placeholderDetails', 'Include brand preferences, expected pickup timeline in Amreli, or complete bill summary.')}
                        value={formData.notes}
                        onChange={handleChange}
                      />
                    </div>

                    {/* Form Action Buttons */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '1rem', marginTop: '1.75rem' }}>
                      <button
                        type="button"
                        className="btn btn-whatsapp btn-lg"
                        onClick={handleSendWhatsApp}
                        title="Send enquiry directly to shop WhatsApp"
                      >
                        <MessageCircle size={20} />
                        <span>{t('wholesale.submitBtn', 'Send Wholesale Enquiry on WhatsApp')}</span>
                      </button>

                      <button
                        type="submit"
                        className="btn btn-primary btn-lg"
                      >
                        <Send size={18} />
                        <span>{isGujarati ? "વિગત સબમિટ કરો" : "Submit Enquiry"}</span>
                      </button>
                    </div>

                    <div style={{ marginTop: '1.25rem', fontSize: '0.82rem', color: 'var(--color-dark-blue-muted)', textAlign: 'center' }}>
                      {isGujarati
                        ? "નોંધ: અમારો મુખ્ય સંપર્ક WhatsApp અને ફોન છે. કોઈ ઓનલાઇન અગાઉ પેમેન્ટ લેવામાં આવતું નથી."
                        : "Notice: WhatsApp is our primary enquiry channel. No online cart checkout or advance payment is requested on this website."}
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Sidebar Column: Helpful Tips & Common Estimates */}
            <div>
              {/* Quick Preset Selector for Contractors */}
              <div style={{
                backgroundColor: 'var(--color-light-blue)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.75rem',
                border: '1px solid var(--color-soft-blue)',
                marginBottom: '2rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <Sparkles size={18} style={{ color: 'var(--color-primary-blue)' }} />
                  <h3 style={{ fontSize: '1.15rem', color: 'var(--color-dark-blue)' }}>
                    {t('wholesale.presetBundlesTitle', 'Quick Preset Requirements')}
                  </h3>
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-body-text)', marginBottom: '1.25rem' }}>
                  {t('wholesale.presetBundlesSubtitle', 'Click to quickly populate common wholesale bundles into the enquiry form:')}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  <button
                    type="button"
                    onClick={() => handlePresetSelect('1.5 sq mm + 2.5 sq mm House Wire Bundle', 'Wires and Cables', '10 Coils (90m each)')}
                    style={{
                      textAlign: 'left',
                      padding: '0.75rem 1rem',
                      backgroundColor: 'var(--color-white)',
                      border: '1px solid var(--color-border-subtle)',
                      borderRadius: 'var(--radius-sm)',
                      cursor: 'pointer',
                      fontSize: '0.88rem',
                      color: 'var(--color-dark-blue)',
                      fontWeight: 600,
                      transition: 'var(--transition)'
                    }}
                  >
                    {isGujarati ? "+ ઘર વાયરિંગ પેકેજ (૧૦ કોઈલ)" : "+ Residential Wiring Bundle (10 Coils)"}
                  </button>

                  <button
                    type="button"
                    onClick={() => handlePresetSelect('6A Modular Switches & 16A Sockets Lot', 'Switches and Sockets', '100 Switches + 30 Sockets')}
                    style={{
                      textAlign: 'left',
                      padding: '0.75rem 1rem',
                      backgroundColor: 'var(--color-white)',
                      border: '1px solid var(--color-border-subtle)',
                      borderRadius: 'var(--radius-sm)',
                      cursor: 'pointer',
                      fontSize: '0.88rem',
                      color: 'var(--color-dark-blue)',
                      fontWeight: 600,
                      transition: 'var(--transition)'
                    }}
                  >
                    {isGujarati ? "+ મોડ્યુલર સ્વીચોનો લોટ (૧૦૦ સ્વીચ)" : "+ Modular Switches Lot (100 Switches)"}
                  </button>

                  <button
                    type="button"
                    onClick={() => handlePresetSelect('Handcrafted Wooden Switchboards Assorted Sizes', 'Electrical Boards', '25 Boards (4x4, 7x4, 8x10)')}
                    style={{
                      textAlign: 'left',
                      padding: '0.75rem 1rem',
                      backgroundColor: 'var(--color-white)',
                      border: '1px solid var(--color-border-subtle)',
                      borderRadius: 'var(--radius-sm)',
                      cursor: 'pointer',
                      fontSize: '0.88rem',
                      color: 'var(--color-dark-blue)',
                      fontWeight: 600,
                      transition: 'var(--transition)'
                    }}
                  >
                    {isGujarati ? "+ લાકડાના સ્વીચબોર્ડ બેચ (૨૫ બોર્ડ)" : "+ Wooden Switchboards Batch (25 Boards)"}
                  </button>

                  <button
                    type="button"
                    onClick={() => handlePresetSelect('12W Slim LED Concealed Ceiling Panels', 'LED Lights and Bulbs', '30 Panels')}
                    style={{
                      textAlign: 'left',
                      padding: '0.75rem 1rem',
                      backgroundColor: 'var(--color-white)',
                      border: '1px solid var(--color-border-subtle)',
                      borderRadius: 'var(--radius-sm)',
                      cursor: 'pointer',
                      fontSize: '0.88rem',
                      color: 'var(--color-dark-blue)',
                      fontWeight: 600,
                      transition: 'var(--transition)'
                    }}
                  >
                    {isGujarati ? "+ LED ફોલ્સ-સીલિંગ પેનલ પેક (૩૦ નંગ)" : "+ LED False-Ceiling Panel Pack (30 Pcs)"}
                  </button>
                </div>
              </div>

              {/* Shop Assurance & Direct Call Card */}
              <div style={{
                backgroundColor: 'var(--color-white)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.75rem',
                border: '1px solid var(--color-border-subtle)',
                boxShadow: 'var(--shadow-sm)'
              }}>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--color-dark-blue)', marginBottom: '0.85rem' }}>
                  {t('wholesale.directPhoneHelp', 'Prefer Speaking Directly?')}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-body-text)', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                  {isGujarati
                    ? "જો તમારી પાસે જથ્થાબંધ મટિરિયલ લિસ્ટ કે હાથે લખેલી ચિઠ્ઠી હોય તો સીધો ફોન કરો અથવા WhatsApp પર ફોટો મોકલો."
                    : "If you have a complex bill of materials or hand-written contractor list, you can phone our counter directly or share a photograph on WhatsApp."}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <a href={`tel:${BUSINESS_INFO.contact.phoneTel}`} className="btn btn-outline btn-full">
                    <Phone size={16} />
                    <span>{t('wholesale.directPhoneBtn', `Call Manojbhai: ${BUSINESS_INFO.contact.phoneDisplay}`)}</span>
                  </a>

                  <div style={{
                    padding: '0.75rem',
                    backgroundColor: 'var(--color-light-grey)',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.82rem',
                    color: 'var(--color-dark-blue-muted)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <Clock size={16} style={{ color: 'var(--color-primary-blue)', flexShrink: 0 }} />
                    <span>
                      <strong>{t('common.hours', 'Shop Hours')}:</strong> {isGujarati ? "સોમ-શનિ: સવારે ૯ થી રાત્રે ૮, રવિ: સવારે ૯ થી બપોરે ૧૨:૩૦" : "Mon–Sat 9am–8pm, Sun 9am–12:30pm"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
