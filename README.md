# Raj Electric Wooden - Amreli, Gujarat

A fast, responsive, and modern product catalogue and wholesale enquiry website for **Raj Electric Wooden** (Raj Electric & Wooden Works), located in Batar Wadi, Amreli, Gujarat 365601.

Built strictly with the bright, clean, light-colored theme (`#FFFFFF`, `#EAF5FF`, `#D6EBFF`, `#1976D2`, `#17365D`, `#F5F8FC`), focused on product discovery, direct customer enquiries, and wholesale lead generation without unnecessary carts or online checkouts.

---

## Business Information

- **Business Name:** Raj Electric Wooden
- **Alternate / Full Name:** Raj Electric & Wooden Works
- **Business Type:** Electrical Goods Wholesaler and Retailer
- **Address:** Batar Wadi, Amreli, Gujarat 365601, India
- **Phone:** +91 98250 94290
- **WhatsApp:** +91 98250 94290
- **Business Hours:**
  - Monday – Saturday: 9:00 AM to 8:00 PM
  - Sunday: 9:00 AM to 12:30 PM
- **Currency:** INR (₹)

---

## Features

1. **Light & Bright Theme:**
   - 100% adherence to light-colored aesthetic with clean white and light-blue sections.
   - Zero dark-mode elements, black banners, or dark cards.
   - High-contrast, readable blue typography and modern icons.

2. **Product Catalogue & Search:**
   - 6 Key Electrical Categories:
     1. Wires and Cables
     2. LED Lights and Bulbs
     3. Switches and Sockets
     4. Electrical Boards
     5. Fans and Electrical Accessories
     6. Other Electrical Goods
   - Real-time search across product titles, descriptions, and categories.
   - Technical specifications breakdown for electrical installations.
   - Honest pricing policy: "Contact for Price" (no fabricated discounts or stock counts).

3. **Wholesale & Bulk Order Enquiry System:**
   - Dedicated `/wholesale-enquiry` page with customer type segmentation (Retail Customer, Electrician, Contractor, Retailer, Other).
   - Instant WhatsApp message builder prefilled with customer details, product specifications, and quantity requirements.
   - Modular in-page modal quote triggers on all product cards.

4. **Shop Showcase & Photo Gallery:**
   - Filterable gallery showing Amreli shop counter, electrical supplies, wooden boards, and fixtures.
   - Interactive modal lightbox for full-screen photo previews with direct enquiry triggers.

5. **Contact & Location:**
   - Click-to-call direct links.
   - Pre-configured WhatsApp links to `+919825094290`.
   - Google Maps embed and directions link for Batar Wadi, Amreli.

6. **Local SEO Optimization:**
   - Target keywords: *Electrical shop in Amreli*, *Electrical goods wholesaler in Amreli*, *Electrical wires and cables in Amreli*, *Electrical accessories in Amreli*, *Bulk electrical supplies in Amreli*.
   - Schema.org `LocalBusiness` / `WholesaleStore` JSON-LD structured data.
   - `sitemap.xml` and `robots.txt`.

---

## Tech Stack

- **Framework:** React 19 + Vite
- **Routing:** React Router v7
- **Icons:** Lucide React
- **Styling:** Modern Vanilla CSS Design System with CSS Custom Properties
- **Typography:** Google Fonts (Outfit & Plus Jakarta Sans)

---

## Project Structure

```
├── public/
│   ├── favicon.svg          # Electrical bolt brand favicon
│   ├── robots.txt           # Search engine directives
│   ├── sitemap.xml          # XML sitemap for SEO
│   └── images/              # High-res electrical product and shop images
├── src/
│   ├── config/
│   │   └── businessInfo.js  # Central shop info, contact details, hours
│   ├── data/
│   │   ├── categories.js    # 6 catalogue category definitions
│   │   ├── products.js      # Complete product catalogue data
│   │   └── gallery.js       # Gallery items and display tags
│   ├── utils/
│   │   └── whatsapp.js      # WhatsApp URL builders & encoders
│   ├── components/
│   │   ├── Header.jsx       # Topbar, brand logo, navigation, mobile drawer
│   │   ├── Footer.jsx       # Quick links, opening hours, contact details
│   │   ├── ProductCard.jsx  # Reusable card with specs, price, enquiry buttons
│   │   ├── CategoryCard.jsx # Visual category display card
│   │   ├── BulkQuoteModal.jsx # Quick quote popup modal
│   │   ├── FloatingContact.jsx # Bottom-right WhatsApp & Call buttons
│   │   └── ScrollToTop.jsx  # Automatic scroll on route change
│   ├── pages/
│   │   ├── HomePage.jsx     # Hero, categories, features, featured products, shop card
│   │   ├── ProductsPage.jsx # Full catalogue with search, filters & reset
│   │   ├── ProductDetailPage.jsx # Specifications & related products
│   │   ├── BulkEnquiryPage.jsx # Wholesale enquiry form & preset bundles
│   │   ├── GalleryPage.jsx  # Filterable image gallery with lightbox
│   │   └── ContactPage.jsx  # Location, hours, direct contact form & Google Map
│   ├── index.css            # Light theme design tokens & styles
│   ├── App.jsx              # Main routing structure
│   └── main.jsx             # React entry point
├── index.html               # SEO metadata, fonts & Schema.org JSON-LD
└── package.json             # Project dependencies and scripts
```

---

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

---

## Customizing Product or Shop Data

- **Shop Information & Contact Details:** Edit `src/config/businessInfo.js`.
- **Catalogue Products:** Edit or append to `src/data/products.js`.
- **Categories:** Edit `src/data/categories.js`.
>>>>>>> 83515c6 (Initial commit - Raj Electric Wooden Website and Mobile App)
