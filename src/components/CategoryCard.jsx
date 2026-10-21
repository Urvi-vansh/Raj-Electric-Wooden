import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function CategoryCard({ category }) {
  const { t, isGujarati } = useLanguage();

  const categoryName = t(`categories.${category.id}.name`, category.name);
  const categoryTagline = t(`categories.${category.id}.tagline`, category.tagline);
  const categoryDesc = t(`categories.${category.id}.description`, category.description);

  return (
    <article className="category-card" id={`cat-${category.id}`}>
      <div className="category-image-wrap">
        <img
          src={category.image}
          alt={categoryName}
          className="category-image"
          loading="lazy"
        />
        {category.badge && (
          <span className="category-pill">
            {isGujarati && category.badge === "Real Shop Stock" ? "📸 દુકાનનો સ્ટોક" : category.badge}
          </span>
        )}
      </div>

      <div className="category-content">
        <h3 className="category-title">{categoryName}</h3>
        <span className="category-tagline">{categoryTagline}</span>
        <p className="category-desc">{categoryDesc}</p>

        <Link
          to={`/products?category=${category.id}`}
          className="category-action-link"
          aria-label={`Explore ${categoryName} products`}
        >
          <span>{isGujarati ? "પ્રોડક્ટ્સ જુઓ" : "Explore Products"}</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}
