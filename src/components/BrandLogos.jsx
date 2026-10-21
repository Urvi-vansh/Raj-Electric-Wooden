import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

/**
 * Authentic SVG Company Icons / Logos for Raj Electric Wooden's authorized brands & dealerships.
 * Faithfully matches actual dealership signage, product packaging, and visiting cards from the shop.
 */

export function AstralIcon({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
      {/* Background Pill/Box */}
      <rect width="100" height="100" rx="18" fill="#00569B" />
      {/* Dynamic Conduit Curve Arc (Cyan) */}
      <path
        d="M20 72 C 20 40, 42 20, 78 20 C 60 28, 40 46, 36 72 Z"
        fill="#00A3E0"
      />
      {/* Outer Chevron Wave (White) */}
      <path
        d="M32 78 L52 24 L72 78 L60 78 L52 54 L44 78 Z"
        fill="#FFFFFF"
      />
      {/* Red Wire Guard Core Accent */}
      <polygon points="52,42 46,56 58,56" fill="#E53935" />
    </svg>
  );
}

export function HavellsIcon({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
      {/* Havells Signature Red Box */}
      <rect width="100" height="100" rx="18" fill="#D32F2F" />
      {/* Symmetrical Winged 'H' Emblem matching actual shop counter signboard */}
      <path
        d="M 27 30 C 37 32 44 41 44 50 C 44 59 37 68 27 70 C 36 70 47 63 48 54 L 52 54 C 53 63 64 70 73 70 C 63 68 56 59 56 50 C 56 41 63 32 73 30 C 64 30 53 37 52 46 L 48 46 C 47 37 36 30 27 30 Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function CsElectricIcon({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
      {/* C&S Royal Blue Square matching visiting card */}
      <rect width="100" height="100" rx="18" fill="#0D47A1" />
      {/* Golden Sunrise Starburst in top-left */}
      <circle cx="22" cy="22" r="7" fill="#FFB300" />
      <path
        d="M22 8 L22 13 M22 31 L22 36 M8 22 L13 22 M31 22 L36 22 M12 12 L16 16 M28 28 L32 32 M12 32 L16 28 M28 16 L32 12"
        stroke="#FFD54F"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      {/* Bold C&S typography */}
      <text
        x="55"
        y="72"
        fill="#FFFFFF"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        fontWeight="900"
        fontSize="36"
        textAnchor="middle"
        letterSpacing="-1"
      >
        C&amp;S
      </text>
    </svg>
  );
}

export function ParcosIcon({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
      {/* Rich Bronze / Dark Chocolate Base matching visiting card */}
      <rect width="100" height="100" rx="18" fill="#3E2723" />
      <rect x="8" y="8" width="84" height="84" rx="12" stroke="#BCAAA4" strokeWidth="2.5" fill="none" />
      {/* 3 Modular Switch Rockers */}
      <rect x="22" y="26" width="16" height="48" rx="3" fill="#D7CCC8" />
      <rect x="42" y="26" width="16" height="48" rx="3" fill="#FFFFFF" />
      <rect x="62" y="26" width="16" height="48" rx="3" fill="#D7CCC8" />
      {/* Rocker Pivots */}
      <line x1="22" y1="50" x2="38" y2="50" stroke="#8D6E63" strokeWidth="2" />
      <line x1="42" y1="50" x2="58" y2="50" stroke="#8D6E63" strokeWidth="2" />
      <line x1="62" y1="50" x2="78" y2="50" stroke="#8D6E63" strokeWidth="2" />
    </svg>
  );
}

export function KoschIcon({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
      {/* Slate Dark Background */}
      <rect width="100" height="100" rx="18" fill="#0F172A" />
      {/* Geometric Modern K Emblem */}
      <rect x="22" y="20" width="14" height="60" rx="4" fill="#38BDF8" />
      <path d="M42 50 L68 20 L80 20 L52 50 L82 80 L70 80 Z" fill="#F8FAFC" />
      <circle cx="70" cy="28" r="3.5" fill="#38BDF8" />
    </svg>
  );
}

export function AmronIcon({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
      {/* Forest Green Base */}
      <rect width="100" height="100" rx="18" fill="#1B5E20" />
      {/* Hexagonal Modular Shield */}
      <polygon points="50,14 84,32 84,68 50,86 16,68 16,32" fill="none" stroke="#81C784" strokeWidth="4.5" />
      {/* Modular Rocker Switch */}
      <rect x="36" y="30" width="28" height="40" rx="4" fill="#FFFFFF" />
      <line x1="42" y1="50" x2="58" y2="50" stroke="#1B5E20" strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="50" cy="39" r="3" fill="#1B5E20" />
    </svg>
  );
}

export function HiFiIcon({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
      {/* Warm Orange Base matching QILO Light box */}
      <rect width="100" height="100" rx="18" fill="#E65100" />
      {/* Illuminated Junction Light Ring */}
      <circle cx="50" cy="50" r="36" fill="#FFF3E0" stroke="#FFFFFF" strokeWidth="3.5" />
      <circle cx="50" cy="50" r="26" fill="#FFE082" />
      {/* High-Voltage Lightning Spark in Center */}
      <path d="M53 30 L39 49 L48 49 L44 70 L62 47 L51 47 Z" fill="#E65100" />
    </svg>
  );
}

export function RajWoodenIcon({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
      {/* Teakwood Warm Brown Base */}
      <rect width="100" height="100" rx="18" fill="#5D4037" />
      {/* Wooden Switchboard Plate with Woodgrain border */}
      <rect x="14" y="16" width="72" height="68" rx="8" fill="#8D6E63" stroke="#D7CCC8" strokeWidth="2.5" />
      {/* Concentric Wood Rings */}
      <circle cx="50" cy="50" r="20" stroke="#A1887F" strokeWidth="2" strokeDasharray="6 4" fill="none" />
      {/* Golden Electrical Spark in center */}
      <path d="M53 32 L40 50 L49 50 L44 68 L60 48 L51 48 Z" fill="#FFD54F" />
    </svg>
  );
}

export const BRAND_DATA = [
  {
    id: "astral",
    name: "ASTRAL",
    badge: "Wire Guard",
    sub: "Conduit Pipes & Wiring",
    gujaratiSub: "કન્સીલ્ડ પાઇપ્સ અને ફિટિંગ્સ",
    searchQuery: "ASTRAL",
    nameColor: "#00569B",
    badgeColor: "#0288D1",
    borderColor: "#B3E5FC",
    IconComponent: AstralIcon
  },
  {
    id: "havells",
    name: "HAVELLS",
    badge: "Authorized",
    sub: "Fans, Cables & Lighting",
    gujaratiSub: "પંખા, કેબલ અને લાઇટિંગ",
    searchQuery: "HAVELLS",
    nameColor: "#D32F2F",
    badgeColor: "#EF5350",
    borderColor: "#FFCDD2",
    IconComponent: HavellsIcon
  },
  {
    id: "cs-electric",
    name: "C&S electric",
    badge: "WiNtrip",
    sub: "MCB & Protection Switchgear",
    gujaratiSub: "MCB અને સ્વિચગિયર",
    searchQuery: "C&S",
    nameColor: "#0D47A1",
    badgeColor: "#1565C0",
    borderColor: "#BBDEFB",
    IconComponent: CsElectricIcon
  },
  {
    id: "parcos",
    name: "PARCOS",
    badge: "Simply Innovating",
    sub: "Designer Modular Plates",
    gujaratiSub: "ડિઝાઇનર સ્વિચ પ્લેટ્સ",
    searchQuery: "PARCOS",
    nameColor: "#4E342E",
    badgeColor: "#8D6E63",
    borderColor: "#D7CCC8",
    IconComponent: ParcosIcon
  },
  {
    id: "kosch",
    name: "KOSCH",
    badge: "Modular",
    sub: "Architectural Switches",
    gujaratiSub: "આર્કિટેક્ચરલ સ્વિચો",
    searchQuery: "KOSCH",
    nameColor: "#111827",
    badgeColor: "#4B5563",
    borderColor: "#E2E8F0",
    IconComponent: KoschIcon
  },
  {
    id: "amron",
    name: "AMRON",
    badge: "Systems",
    sub: "Heavy-Duty Modular Switches",
    gujaratiSub: "હેવી-ડ્યુટી મોડ્યુલર સ્વિચો",
    searchQuery: "AMRON",
    nameColor: "#1B5E20",
    badgeColor: "#388E3C",
    borderColor: "#C8E6C9",
    IconComponent: AmronIcon
  },
  {
    id: "hifi",
    name: "Hi-Fi Electric",
    badge: "QILO",
    sub: "Concealed Junction Lights",
    gujaratiSub: "જંક્શન બોક્સ LED લાઇટ્સ",
    searchQuery: "Hi-Fi",
    nameColor: "#E65100",
    badgeColor: "#F57C00",
    borderColor: "#FFE0B2",
    IconComponent: HiFiIcon
  },
  {
    id: "raj-wooden",
    name: "Raj Wooden",
    badge: "Handcrafted",
    sub: "Proprietary Wooden Boards",
    gujaratiSub: "હાથે બનાવેલા લાકડાના બોર્ડ",
    searchQuery: "Wooden",
    nameColor: "#5D4037",
    badgeColor: "#795548",
    borderColor: "#D7CCC8",
    IconComponent: RajWoodenIcon
  }
];

export default function BrandLogosBar() {
  const { t, isGujarati } = useLanguage();

  return (
    <section className="brands-bar-section" aria-label="Authorized Brands and Dealerships">
      <div className="container">
        <div className="brands-bar-inner">
          <div className="brands-bar-header">
            <div className="brands-bar-title">
              <ShieldCheck size={22} className="brands-shield-icon" />
              <span>{t('home.brandsTitle', 'Authorized Brands & Dealerships:')}</span>
            </div>
            <span className="brands-bar-subtag">
              {isGujarati ? "અમરેલીમાં અસલી બ્રાન્ડ ગેરંટી" : "Authentic Stock Guaranteed in Amreli"}
            </span>
          </div>

          <div className="brands-grid-wrap">
            {BRAND_DATA.map((brand) => {
              const Icon = brand.IconComponent;
              return (
                <Link
                  to={`/products?search=${encodeURIComponent(brand.searchQuery)}`}
                  key={brand.id}
                  className="brand-card-chip"
                  title={`${brand.name} - ${isGujarati ? brand.gujaratiSub : brand.sub} (Click to view products)`}
                >
                  <div className="brand-chip-icon">
                    <Icon size={34} />
                  </div>
                  <div className="brand-chip-text">
                    <div className="brand-chip-name" style={{ color: brand.nameColor }}>
                      <span>{brand.name}</span>
                      {brand.badge && (
                        <span className="brand-chip-subbadge" style={{ color: brand.badgeColor }}>
                          {brand.badge}
                        </span>
                      )}
                    </div>
                    <div className="brand-chip-category">
                      {isGujarati ? brand.gujaratiSub : brand.sub}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
