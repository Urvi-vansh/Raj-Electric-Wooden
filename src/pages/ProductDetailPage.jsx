import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  MessageCircle, 
  FileText, 
  Phone, 
  CheckCircle2, 
  ShieldAlert, 
  Share2, 
  ChevronRight,
  Layers
} from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { BUSINESS_INFO } from '../config/businessInfo';
import { getProductEnquiryUrl } from '../utils/whatsapp';
import BulkQuoteModal from '../components/BulkQuoteModal';
import { useLanguage } from '../context/LanguageContext';

export default function ProductDetailPage() {
  const { t, isGujarati } = useLanguage();
  const { productId } = useParams();
  const [isBulkModalOpen, setIsBulkModalOpen] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  const product = PRODUCTS.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="section section-white">
        <div className="container" style={{ textAlign: 'center', padding: '4rem 1rem' }}>
          <h2 style={{ marginBottom: '1rem', color: 'var(--color-dark-blue)' }}>
            {t('productDetail.notFoundTitle', 'Product Not Found')}
          </h2>
          <p style={{ marginBottom: '2rem', color: 'var(--color-dark-blue-muted)' }}>
            {t('productDetail.notFoundDesc', 'The electrical product you are looking for does not exist in our catalogue or may have been updated.')}
          </p>
          <Link to="/products" className="btn btn-primary">
            <ArrowLeft size={16} />
            <span>{t('productDetail.backToCatalogue', 'Back to Product Catalogue')}</span>
          </Link>
        </div>
      </div>
    );
  }

  const enquiryUrl = getProductEnquiryUrl(product.name);

  // Related products from same category
  const relatedProducts = PRODUCTS
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2500);
    }
  };

  const categoryName = isGujarati ? t(`categories.${product.category}.name`, product.categoryName) : product.categoryName;

  return (
    <div className="product-detail-page">
      {/* Breadcrumbs */}
      <div style={{ backgroundColor: 'var(--color-light-grey)', padding: '0.85rem 0', borderBottom: '1px solid var(--color-border-subtle)' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--color-dark-blue-muted)', flexWrap: 'wrap' }}>
          <Link to="/" style={{ color: 'var(--color-dark-blue-muted)' }}>{t('nav.home', 'Home')}</Link>
          <ChevronRight size={14} />
          <Link to="/products" style={{ color: 'var(--color-dark-blue-muted)' }}>{t('nav.products', 'Products')}</Link>
          <ChevronRight size={14} />
          <Link to={`/products?category=${product.category}`} style={{ color: 'var(--color-dark-blue-muted)' }}>
            {categoryName}
          </Link>
          <ChevronRight size={14} />
          <span style={{ color: 'var(--color-dark-blue)', fontWeight: 600 }}>{product.name}</span>
        </div>
      </div>

      <section className="section section-white">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.15fr',
            gap: '3.5rem',
            alignItems: 'start'
          }}>
            {/* Product Image Column */}
            <div>
              <div style={{
                backgroundColor: '#F8FBFE',
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                border: '1px solid var(--color-border-subtle)',
                boxShadow: 'var(--shadow-md)',
                aspectRatio: '4 / 3'
              }}>
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: product.imagePosition || 'center center'
                  }}
                />
              </div>

              <div style={{
                marginTop: '1.25rem',
                padding: '1.25rem',
                backgroundColor: product.isRealPhoto ? '#F0F9FF' : 'var(--color-light-blue)',
                borderRadius: 'var(--radius-md)',
                border: product.isRealPhoto ? '1px solid #BAE6FD' : '1px solid var(--color-soft-blue)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.75rem',
                fontSize: '0.85rem',
                color: 'var(--color-body-text)'
              }}>
                <ShieldAlert size={18} style={{ color: product.isRealPhoto ? '#0284C7' : 'var(--color-primary-blue)', flexShrink: 0, marginTop: 2 }} />
                <div>
                  <strong>{product.isRealPhoto ? (isGujarati ? "📸 દુકાનનો અસલી ફોટો:" : "Verified Shop Stock Photograph:") : (isGujarati ? "પ્રમાણિત કેટલોગ વિગત:" : "Authentic Catalogue Specification:")}</strong> {product.isRealPhoto ? (isGujarati ? "આ અમારા અમરેલી, બતાર વાડી કાઉન્ટર પર ઉપલબ્ધ અસલી સ્ટોકનો ઓરિજિનલ ફોટો છે." : "This is an authentic photograph of real modular switch stock available at our Batar Wadi counter in Amreli.") : (isGujarati ? "તમામ વિશિષ્ટતાઓ સ્ટાન્ડર્ડ ઇલેક્ટ્રિકલ ગાઇડલાઇન મુજબ છે. તાજો સ્ટોક અને હોલસેલ ભાવ માટે કાઉન્ટર પર સંપર્ક કરો." : "All specifications reflect standard electrical guidelines. Stock availability and bulk project quotes are verified directly with our Amreli counter.")}
                </div>
              </div>
            </div>

            {/* Product Details Column */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span className="section-tag" style={{ margin: 0 }}>
                  {categoryName}
                </span>
                <button
                  type="button"
                  onClick={handleShare}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    background: 'transparent',
                    border: '1px solid var(--color-border-subtle)',
                    padding: '0.35rem 0.75rem',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.8rem',
                    color: 'var(--color-dark-blue-muted)',
                    cursor: 'pointer'
                  }}
                >
                  <Share2 size={13} />
                  <span>{copySuccess ? t('common.copied', 'Link Copied!') : (isGujarati ? 'શેર કરો' : 'Share')}</span>
                </button>
              </div>

              <h1 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', marginBottom: '0.85rem', color: 'var(--color-dark-blue)' }}>
                {product.name}
              </h1>

              {product.brand && (
                <div style={{ fontSize: '0.9rem', color: 'var(--color-primary-blue)', fontWeight: 600, marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  {isGujarati ? `બ્રાન્ડ / ક્વોલિટી: ${product.brand}` : `Brand / Grade: ${product.brand}`}
                </div>
              )}

              <p style={{ fontSize: '1.05rem', color: 'var(--color-body-text)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                {product.shortDescription}
              </p>

              {/* Price & Availability Banner */}
              <div style={{
                backgroundColor: 'var(--color-light-grey)',
                border: '1px solid var(--color-border-subtle)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.25rem 1.5rem',
                marginBottom: '2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem'
              }}>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-dark-blue-muted)', textTransform: 'uppercase', fontWeight: 600 }}>
                    {isGujarati ? "ભાવની માહિતી" : "Price Information"}
                  </div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-primary-blue)', fontFamily: 'var(--font-heading)' }}>
                    {product.price ? `₹${product.price}` : t('common.contactForPrice', 'Contact for Price')}
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--color-dark-blue-muted)' }}>
                    {isGujarati ? "રિટેલ અને હોલસેલ દરો માટે સીધો સંપર્ક કરો" : (product.priceNote || 'Retail & wholesale pricing on direct enquiry')}
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backgroundColor: 'var(--color-success-bg)',
                  color: 'var(--color-success)',
                  padding: '0.5rem 0.9rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.85rem',
                  fontWeight: 600
                }}>
                  <CheckCircle2 size={16} />
                  <span>{isGujarati ? "રિટેલ અને હોલસેલ બંને માટે ઉપલબ્ધ" : (product.availability || 'Available for Retail & Wholesale')}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2.5rem' }}>
                <a
                  href={enquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-lg"
                >
                  <MessageCircle size={20} />
                  <span>{t('common.enquireWhatsApp', 'Enquire on WhatsApp')}</span>
                </a>

                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  onClick={() => setIsBulkModalOpen(true)}
                >
                  <FileText size={20} />
                  <span>{t('common.requestBulkQuote', 'Request Bulk Quote')}</span>
                </button>
              </div>

              {/* Technical Specifications Table */}
              {product.specifications && product.specifications.length > 0 && (
                <div style={{ marginBottom: '2rem' }}>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--color-dark-blue)' }}>
                    {isGujarati ? "ટેકનિકલ વિશિષ્ટતાઓ" : "Technical Specifications"}
                  </h3>
                  <div style={{
                    border: '1px solid var(--color-border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    overflow: 'hidden'
                  }}>
                    {product.specifications.map((spec, idx) => (
                      <div
                        key={idx}
                        style={{
                          display: 'grid',
                          gridTemplateColumns: '1.2fr 2fr',
                          padding: '0.75rem 1rem',
                          backgroundColor: idx % 2 === 0 ? 'var(--color-white)' : 'var(--color-light-grey)',
                          borderBottom: idx === product.specifications.length - 1 ? 'none' : '1px solid var(--color-border-subtle)',
                          fontSize: '0.9rem'
                        }}
                      >
                        <span style={{ fontWeight: 600, color: 'var(--color-dark-blue-muted)' }}>{spec.label}</span>
                        <span style={{ color: 'var(--color-dark-blue)', fontWeight: 500 }}>{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Recommended Application */}
              {product.application && (
                <div style={{
                  padding: '1.25rem',
                  backgroundColor: 'var(--color-white)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-border-subtle)',
                  marginBottom: '2rem'
                }}>
                  <div style={{ fontWeight: 700, color: 'var(--color-dark-blue)', marginBottom: '0.4rem', fontSize: '0.95rem' }}>
                    {isGujarati ? "ઉપયોગ માટે ભલામણ:" : "Recommended Applications:"}
                  </div>
                  <div style={{ fontSize: '0.92rem', color: 'var(--color-body-text)', lineHeight: '1.6' }}>
                    {product.application}
                  </div>
                </div>
              )}

              {/* Direct Shop Assistance Note */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid var(--color-border-subtle)'
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
                  flexShrink: 0
                }}>
                  <Phone size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--color-dark-blue-muted)' }}>
                    {isGujarati ? "વાયર સાઇઝ કે મોડ્યુલર ફિટિંગ વિશે કોઈ પ્રશ્ન છે?" : "Have questions regarding compatibility or bulk reel orders?"}
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-dark-blue)' }}>
                    {isGujarati ? "દુકાન પર સીધો કૉલ કરો: " : "Call shop directly: "}
                    <a href={`tel:${BUSINESS_INFO.contact.phoneTel}`} style={{ color: 'var(--color-primary-blue)' }}>
                      {BUSINESS_INFO.contact.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products Section */}
          {relatedProducts.length > 0 && (
            <div style={{ marginTop: '4.5rem', paddingTop: '3rem', borderTop: '1px solid var(--color-border-subtle)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <span className="section-tag">{isGujarati ? "સંબંધિત સામાન" : "Similar Goods"}</span>
                  <h3 style={{ fontSize: '1.5rem', color: 'var(--color-dark-blue)' }}>
                    {isGujarati ? `${categoryName} ની અન્ય પ્રોડક્ટ્સ` : `More in ${categoryName}`}
                  </h3>
                </div>
                <Link to={`/products?category=${product.category}`} className="btn btn-outline btn-sm">
                  <span>{isGujarati ? `બધી ${categoryName} જુઓ` : `View All ${categoryName}`}</span>
                  <ChevronRight size={14} />
                </Link>
              </div>

              <div className="products-grid">
                {relatedProducts.map(p => (
                  <div key={p.id} className="product-card">
                    <div className="product-card-top">
                      <img src={p.image} alt={p.name} className="product-card-img" loading="lazy" />
                    </div>
                    <div className="product-card-body">
                      <h4 className="product-title">
                        <Link to={`/products/${p.id}`} style={{ color: 'inherit' }}>{p.name}</Link>
                      </h4>
                      <p className="product-desc">{p.shortDescription}</p>
                      <div className="product-pricing-bar">
                        <span className="price-status">{t('common.contactForPrice', 'Contact for Price')}</span>
                      </div>
                      <Link to={`/products/${p.id}`} className="btn btn-primary btn-sm btn-full">
                        {t('common.viewDetails', 'View Product')}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Bulk Quote Modal */}
      <BulkQuoteModal
        isOpen={isBulkModalOpen}
        onClose={() => setIsBulkModalOpen(false)}
        initialProduct={product}
      />
    </div>
  );
}
