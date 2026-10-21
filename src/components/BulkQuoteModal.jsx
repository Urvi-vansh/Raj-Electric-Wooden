import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../config/businessInfo';
import { getBulkEnquiryUrl } from '../utils/whatsapp';
import { useLanguage } from '../context/LanguageContext';

export default function BulkQuoteModal({ isOpen, onClose, initialProduct = null }) {
  const { isGujarati } = useLanguage();
  const [formData, setFormData] = useState({
    customerName: '',
    mobile: '',
    customerType: 'Contractor',
    category: '',
    productName: '',
    quantity: '50',
    notes: '',
    preferredContact: 'WhatsApp'
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (initialProduct) {
      setFormData(prev => ({
        ...prev,
        productName: initialProduct.name || '',
        category: initialProduct.categoryName || '',
        quantity: '50'
      }));
    }
  }, [initialProduct]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg('');
  };

  const handleSendWhatsApp = (e) => {
    e.preventDefault();
    if (!formData.customerName.trim() || !formData.mobile.trim()) {
      setErrorMsg(isGujarati ? 'કૃપા કરીને આગળ વધવા માટે તમારું નામ અને મોબાઇલ નંબર દાખલ કરો.' : 'Please enter your Name and Mobile Number to proceed.');
      return;
    }
    const url = getBulkEnquiryUrl(formData);
    window.open(url, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.customerName.trim() || !formData.mobile.trim()) {
      setErrorMsg(isGujarati ? 'કૃપા કરીને આગળ વધવા માટે તમારું નામ અને મોબાઇલ નંબર દાખલ કરો.' : 'Please enter your Name and Mobile Number to proceed.');
      return;
    }
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">
            {initialProduct 
              ? (isGujarati ? `હોલસેલ ક્વોટ: ${initialProduct.name}` : `Bulk Quote: ${initialProduct.name}`)
              : (isGujarati ? 'હોલસેલ અને બલ્ક ક્વોટેશન મેળવો' : 'Request Wholesale & Bulk Quote')}
          </h3>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
              <div style={{ color: '#2E7D32', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                <CheckCircle2 size={56} />
              </div>
              <h3 style={{ marginBottom: '0.75rem', color: 'var(--color-dark-blue)' }}>
                {isGujarati ? 'ઇન્ક્વાયરી તૈયાર છે!' : 'Enquiry Details Ready!'}
              </h3>
              <p style={{ color: 'var(--color-body-text)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                {isGujarati ? (
                  <>આભાર, <strong>{formData.customerName}</strong>. અમારા બતાર વાડી કાઉન્ટર પરથી તાત્કાલિક હોલસેલ ભાવ અને ડિસ્કાઉન્ટ મેળવવા માટે આ ઇન્ક્વાયરી સીધી WhatsApp પર મોકલો.</>
                ) : (
                  <>Thank you, <strong>{formData.customerName}</strong>. To receive immediate wholesale pricing and availability from our Batar Wadi shop, send this enquiry directly to our WhatsApp number.</>
                )}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <a
                  href={getBulkEnquiryUrl(formData)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-full"
                >
                  <MessageCircle size={18} />
                  <span>{isGujarati ? 'હવે WhatsApp પર ઇન્ક્વાયરી મોકલો' : 'Send Enquiry to WhatsApp Now'}</span>
                </a>
                <button type="button" className="btn btn-outline btn-full" onClick={handleReset}>
                  {isGujarati ? 'વિન્ડો બંધ કરો' : 'Close Window'}
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
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.9rem'
                }}>
                  <AlertCircle size={16} />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="form-grid-2">
                <div className="form-group">
                  <label className="form-label" htmlFor="modal-customerName">
                    {isGujarati ? 'તમારું પૂરું નામ' : 'Your Full Name'} <span className="required">*</span>
                  </label>
                  <input
                    id="modal-customerName"
                    type="text"
                    name="customerName"
                    className="form-control"
                    placeholder={isGujarati ? 'દા.ત., રમેશ પટેલ' : 'e.g. Ramesh Patel'}
                    value={formData.customerName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="modal-mobile">
                    {isGujarati ? 'મોબાઇલ નંબર' : 'Mobile Number'} <span className="required">*</span>
                  </label>
                  <input
                    id="modal-mobile"
                    type="tel"
                    name="mobile"
                    className="form-control"
                    placeholder={isGujarati ? '૧૦ અંકનો નંબર' : 'e.g. 98250 12345'}
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-grid-2">
                <div className="form-group">
                  <label className="form-label" htmlFor="modal-customerType">
                    {isGujarati ? 'ગ્રાહકનો પ્રકાર' : 'Customer Type'}
                  </label>
                  <select
                    id="modal-customerType"
                    name="customerType"
                    className="form-control"
                    value={formData.customerType}
                    onChange={handleChange}
                  >
                    {BUSINESS_INFO.targetCustomerTypes.map(type => (
                      <option key={type.value} value={type.value}>
                        {isGujarati 
                          ? (type.value === 'Retail Customer' ? 'ઘરગથ્થુ ગ્રાહક' 
                            : type.value === 'Electrician' ? 'ઇલેક્ટ્રિશિયન / ટેકનિશિયન' 
                            : type.value === 'Contractor' ? 'ઇલેક્ટ્રિકલ / બિલ્ડિંગ કોન્ટ્રાક્ટર' 
                            : type.value === 'Retailer' ? 'રિટેલ દુકાન / સબ-ડીલર' 
                            : 'અન્ય / કમર્શિયલ')
                          : type.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="modal-quantity">
                    {isGujarati ? 'જરૂરી જથ્થો' : 'Required Quantity'} <span className="required">*</span>
                  </label>
                  <input
                    id="modal-quantity"
                    type="text"
                    name="quantity"
                    className="form-control"
                    placeholder={isGujarati ? 'દા.ત., ૫૦ નંગ / ૧૦ કોઈલ' : 'e.g. 50 pcs / 10 rolls / 5 boxes'}
                    value={formData.quantity}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="modal-productName">
                  {isGujarati ? 'પ્રોડક્ટનું નામ / સામાન' : 'Product Name / Requirement'}
                </label>
                <input
                  id="modal-productName"
                  type="text"
                  name="productName"
                  className="form-control"
                  placeholder={isGujarati ? 'દા.ત., ૧.૫ sq mm વાયર, ASTRAL પાઇપ, સ્વીચો' : 'e.g. 1.5 sq mm copper wire coils, ASTRAL pipes'}
                  value={formData.productName}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="modal-notes">
                  {isGujarati ? 'વધારાની વિગત / બ્રાન્ડ પસંદગી' : 'Additional Specifications / Notes'}
                </label>
                <textarea
                  id="modal-notes"
                  name="notes"
                  className="form-control"
                  rows="2"
                  placeholder={isGujarati ? 'બ્રાન્ડ, સાઇઝ અથવા ડિલિવરી સ્થળ જણાવો.' : 'Specify brand preferences, delivery location in/around Amreli, or required completion timeline.'}
                  value={formData.notes}
                  onChange={handleChange}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginTop: '1.25rem' }}>
                <button
                  type="button"
                  className="btn btn-whatsapp"
                  onClick={handleSendWhatsApp}
                  title="Send directly to shop WhatsApp"
                >
                  <MessageCircle size={18} />
                  <span>{isGujarati ? 'WhatsApp પર મોકલો' : 'Send on WhatsApp'}</span>
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  <Send size={18} />
                  <span>{isGujarati ? 'ઇન્ક્વાયરી સબમિટ કરો' : 'Submit Enquiry'}</span>
                </button>
              </div>

              <p className="form-hint" style={{ marginTop: '0.85rem', textAlign: 'center' }}>
                {isGujarati 
                  ? 'કોઈ ઓનલાઇન પેમેન્ટની જરૂર નથી. અમારા બતાર વાડી કાઉન્ટર પરથી ડાયરેક્ટ ભાવ મળશે.'
                  : 'No online payment required. Our shop in Batar Wadi will confirm available lots & quotes.'}
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
