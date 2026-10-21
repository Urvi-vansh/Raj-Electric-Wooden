import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, Filter, RefreshCw, AlertCircle, Phone, MessageCircle } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { CATEGORIES } from '../data/categories';
import { BUSINESS_INFO } from '../config/businessInfo';
import { getGeneralEnquiryUrl } from '../utils/whatsapp';
import { useLanguage } from '../context/LanguageContext';
import ProductCard from '../components/ProductCard';
import BulkQuoteModal from '../components/BulkQuoteModal';

export default function ProductsPage() {
  const { t, isGujarati } = useLanguage();
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'all';
  const searchParam = searchParams.get('search') || searchParams.get('brand') || '';

  const [searchQuery, setSearchQuery] = useState(searchParam);
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [selectedProductForModal, setSelectedProductForModal] = useState(null);
  const [isBulkModalOpen, setIsBulkModalOpen] = useState(false);

  // Sync with URL query parameters
  useEffect(() => {
    setSelectedCategory(categoryParam);
    if (searchParam) {
      setSearchQuery(searchParam);
    }
  }, [categoryParam, searchParam]);

  const handleCategoryChange = (catId) => {
    setSelectedCategory(catId);
    if (catId === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', catId);
    }
    setSearchParams(searchParams);
  };

  const handleClearFilters = () => {
    setSearchQuery('');
    searchParams.delete('search');
    searchParams.delete('brand');
    handleCategoryChange('all');
  };

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = !query || 
        product.name.toLowerCase().includes(query) ||
        product.shortDescription.toLowerCase().includes(query) ||
        (product.brand && product.brand.toLowerCase().includes(query)) ||
        product.categoryName.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleOpenBulkModal = (product) => {
    setSelectedProductForModal(product);
    setIsBulkModalOpen(true);
  };

  return (
    <div className="products-page">
      {/* Page Header */}
      <section className="section-light" style={{ padding: '3.5rem 0 2.5rem 0', borderBottom: '1px solid var(--color-border-subtle)' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '1.5rem' }}>
            <span className="section-tag">
              {isGujarati ? "ઇલેક્ટ્રિક પ્રોડક્ટ્સ કેટલોગ" : "Electrical Goods Catalogue"}
            </span>
            <h1 className="section-title">
              {isGujarati ? "હોલસેલ અને રિટેલ પ્રોડક્ટ્સ કેટલોગ" : "Wholesale & Retail Product Catalogue"}
            </h1>
            <p className="section-subtitle">
              {isGujarati 
                ? "અમારો વેરિફાઇડ ઇલેક્ટ્રિક સામાન જુઓ. દૈનિક તાજા હોલસેલ ભાવ અને જથ્થાબંધ ઓર્ડર માટે સીધો સંપર્ક કરો."
                : "Browse our verified electrical inventory. For current pricing, customized reel lengths, or bulk quantities, enquire directly with our Amreli shop."}
            </p>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
            fontSize: '0.9rem',
            color: 'var(--color-dark-blue-muted)',
            backgroundColor: 'var(--color-white)',
            padding: '0.75rem 1.25rem',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--color-border-subtle)',
            maxWidth: '750px',
            margin: '0 auto'
          }}>
            <span>
              <strong>{isGujarati ? "દુકાનનો નિયમ:" : "Shop Policy:"}</strong>{' '}
              {isGujarati ? "સાચો માલ, વ્યાજબી ભાવ અને કોઈ નકલી ડિસ્કાઉન્ટ નહીં." : "No fabricated pricing or artificial discounts."}
            </span>
            <span>•</span>
            <a href={`tel:${BUSINESS_INFO.contact.phoneTel}`} style={{ fontWeight: 600 }}>
              {isGujarati ? "કૉલ:" : "Call:"} {BUSINESS_INFO.contact.phoneDisplay}
            </a>
            <span>•</span>
            <a href={getGeneralEnquiryUrl()} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-whatsapp-dark)', fontWeight: 600 }}>
              {isGujarati ? "WhatsApp પૂછપરછ" : "WhatsApp Enquiries"}
            </a>
          </div>
        </div>
      </section>

      {/* Main Catalogue Section */}
      <section className="section section-white">
        <div className="container">
          {/* Search & Filter Bar */}
          <div className="filter-bar">
            {/* Search Input */}
            <div className="search-input-wrap">
              <Search size={20} className="search-icon" />
              <input
                type="text"
                className="search-input"
                placeholder={isGujarati 
                  ? "પ્રોડક્ટનું નામ, બ્રાન્ડ અથવા સાઇઝથી શોધો (દા.ત., વાયર, મોડ્યુલર સ્વીચ, પંખા, પાઇપ)..."
                  : "Search products by name, specifications, or type (e.g. 1.5 sq mm wire, LED, modular switch, wooden board)..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search products"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  style={{
                    position: 'absolute',
                    right: '1rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--color-dark-blue-muted)',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    fontWeight: 600
                  }}
                >
                  {isGujarati ? "સાફ કરો" : "Clear"}
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="filter-categories" role="group" aria-label="Category filters">
              <button
                type="button"
                className={`category-filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
                onClick={() => handleCategoryChange('all')}
              >
                {isGujarati ? `બધી પ્રોડક્ટ્સ (${PRODUCTS.length})` : `All Products (${PRODUCTS.length})`}
              </button>
              {CATEGORIES.map(cat => {
                const count = PRODUCTS.filter(p => p.category === cat.id).length;
                const catShortName = t(`categories.${cat.id}.shortName`, cat.shortName);
                return (
                  <button
                    key={cat.id}
                    type="button"
                    className={`category-filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                    onClick={() => handleCategoryChange(cat.id)}
                  >
                    {catShortName} ({count})
                  </button>
                );
              })}
            </div>

            {/* Active Filters Summary */}
            {(selectedCategory !== 'all' || searchQuery) && (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '0.75rem',
                borderTop: '1px solid var(--color-border-subtle)',
                fontSize: '0.88rem'
              }}>
                <span>
                  Showing <strong>{filteredProducts.length}</strong> matching item(s)
                  {selectedCategory !== 'all' && ` in "${CATEGORIES.find(c => c.id === selectedCategory)?.name}"`}
                  {searchQuery && ` matching "${searchQuery}"`}
                </span>
                <button
                  type="button"
                  className="btn btn-outline btn-sm"
                  onClick={handleClearFilters}
                  style={{ padding: '0.3rem 0.75rem', fontSize: '0.8rem' }}
                >
                  <RefreshCw size={12} />
                  <span>Reset All Filters</span>
                </button>
              </div>
            )}
          </div>

          {/* Product Grid or Empty State */}
          {filteredProducts.length > 0 ? (
            <div className="products-grid">
              {filteredProducts.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onOpenBulkModal={handleOpenBulkModal}
                />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <div className="empty-state-icon">
                <AlertCircle size={32} />
              </div>
              <h3 style={{ marginBottom: '0.5rem', color: 'var(--color-dark-blue)' }}>
                No Products Found
              </h3>
              <p style={{ maxWidth: 480, margin: '0 auto 1.5rem auto', color: 'var(--color-dark-blue-muted)' }}>
                We couldn't find any items matching your search criteria. Please try different keywords or reset your filters.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleClearFilters}
                >
                  <RefreshCw size={16} />
                  <span>View All Products</span>
                </button>
                <a
                  href={getGeneralEnquiryUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  <MessageCircle size={16} />
                  <span>Ask Shop for Specific Item</span>
                </a>
              </div>
            </div>
          )}

          {/* Catalogue Bottom Note */}
          <div style={{
            marginTop: '3.5rem',
            padding: '2rem',
            backgroundColor: 'var(--color-light-blue)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--color-soft-blue)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem'
          }}>
            <div>
              <h4 style={{ color: 'var(--color-dark-blue)', marginBottom: '0.35rem' }}>
                Looking for unlisted electrical hardware or custom cut lengths?
              </h4>
              <p style={{ fontSize: '0.92rem', color: 'var(--color-body-text)', margin: 0 }}>
                We stock hundreds of additional electrical supplies at our Batar Wadi premises in Amreli.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <Link to="/wholesale-enquiry" className="btn btn-primary btn-sm">
                Request Bulk Quote
              </Link>
              <a href={`tel:${BUSINESS_INFO.contact.phoneTel}`} className="btn btn-outline btn-sm">
                <Phone size={14} />
                <span>Call Shop</span>
              </a>
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
    </div>
  );
}
