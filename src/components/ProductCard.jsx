import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, FileText, CheckCircle, ArrowRight } from 'lucide-react';
import { getProductEnquiryUrl } from '../utils/whatsapp';
import { useLanguage } from '../context/LanguageContext';

export default function ProductCard({ product, onOpenBulkModal }) {
  const enquiryUrl = getProductEnquiryUrl(product.name);
  const { isGujarati } = useLanguage();

  return (
    <article className="product-card" id={`product-${product.id}`}>
      {/* Product Image */}
      <div className="product-card-top">
        <img
          src={product.image}
          alt={product.name}
          className={`product-card-img ${product.isRealPhoto ? 'real-img' : ''}`}
          style={product.imagePosition ? { objectPosition: product.imagePosition } : undefined}
          loading="lazy"
        />
        <span className="product-badge-category">{product.categoryName}</span>
        {product.isRealPhoto && (
          <span className="badge-real-photo" title="Real photograph of shop stock">
            {isGujarati ? "📸 દુકાનનો અસલી માલ" : "📸 Real Shop Stock"}
          </span>
        )}
      </div>

      {/* Product Content */}
      <div className="product-card-body">
        {product.brand && (
          <span className="product-brand">{product.brand}</span>
        )}

        <h3 className="product-title">
          <Link to={`/products/${product.id}`} style={{ color: 'inherit' }}>
            {product.name}
          </Link>
        </h3>

        <p className="product-desc">
          {product.shortDescription}
        </p>

        {/* Technical Specifications Snapshot */}
        {product.specifications && product.specifications.length > 0 && (
          <div className="product-specs-summary" aria-label="Technical Specifications">
            {product.specifications.slice(0, 3).map((spec, idx) => (
              <div key={idx} className="product-spec-row">
                <span className="spec-key">{spec.label}:</span>
                <span className="spec-val">{spec.value}</span>
              </div>
            ))}
          </div>
        )}

        {/* Price & Availability Bar */}
        <div className="product-pricing-bar">
          <div className="price-tag-wrap">
            <span className="price-status">
              {product.price ? `₹${product.price}` : (isGujarati ? 'ભાવ માટે સંપર્ક કરો' : 'Contact for Price')}
            </span>
            <span className="price-subnote">
              {product.priceNote || (isGujarati ? 'હોલસેલ અને રિટેલ પૂછપરછ' : 'Wholesale & Retail enquiries')}
            </span>
          </div>

          <span className="availability-pill" title="Stock availability status">
            <CheckCircle size={12} style={{ display: 'inline', marginRight: 4, verticalAlign: 'middle' }} />
            {isGujarati ? 'અમરેલી કાઉન્ટર સ્ટોક' : (product.availability || 'Available for Enquiry')}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="product-actions">
          <a
            href={enquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp-subtle btn-sm"
            title={`Enquire about ${product.name} on WhatsApp`}
          >
            <MessageCircle size={15} />
            <span>{isGujarati ? 'WhatsApp પૂછપરછ' : 'Enquire'}</span>
          </a>

          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => onOpenBulkModal(product)}
            title={`Request bulk quotation for ${product.name}`}
          >
            <FileText size={15} />
            <span>{isGujarati ? 'હોલસેલ ક્વોટ' : 'Bulk Quote'}</span>
          </button>
        </div>

        {/* Direct Link to full specs */}
        <div style={{ marginTop: '0.75rem', textAlign: 'center' }}>
          <Link
            to={`/products/${product.id}`}
            style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--color-primary-blue)', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}
          >
            <span>{isGujarati ? 'સંપૂર્ણ વિગતો જુઓ' : 'View Full Specifications'}</span>
            <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </article>
  );
}
