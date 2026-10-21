// Central business information configuration for Raj Electric Wooden
// All verified shop details, contact channels, and operating hours

export const BUSINESS_INFO = {
  name: "Raj Electric Wooden",
  alternateName: "Raj Electric & Wooden Works",
  gujaratiName: "રાજ ઇલેક્ટ્રીક વુડન",
  ownerName: "Manojbhai",
  gujaratiOwnerName: "મનોજભાઈ",
  tagline: "Your Trusted Electrical Goods Partner in Amreli",
  businessType: "Electrical Goods Wholesaler and Retailer",
  serviceDescription: "Wholesale & retail supplier of electrical wires, cables, Havells appliances, C&S Electric switchgear, PARCOS & KOSCH modular switches, wooden switchboards, and installation accessories in Amreli, Gujarat.",
  
  address: {
    street: "Sheri No 4, Sardar Nagar, Chakkargadh Road",
    area: "Sardar Nagar / Batar Wadi Area",
    city: "Amreli",
    state: "Gujarat",
    pincode: "365601",
    country: "India",
    formatted: "Sheri No 4, Sardar Nagar, Chakkargadh Road (Batar Wadi), Amreli, Gujarat 365601, India",
    gujaratiFormatted: "સરદાર નગર, શેરી નં-૪, ચકરગઢ રોડ, અમરેલી 365601",
    directionsUrl: "https://www.google.com/maps/search/?api=1&query=Sardar+Nagar+Chakkargadh+Road+Amreli+Gujarat+365601"
  },
  
  contact: {
    phoneDisplay: "+91 98790 94290",
    phoneTel: "+919879094290",
    alternatePhoneDisplay: "+91 98250 94290",
    alternatePhoneTel: "+919825094290",
    whatsappDisplay: "+91 98790 94290",
    whatsappNumber: "919879094290",
    email: "enquiry@rajelectricwooden.com"
  },

  businessHours: [
    { days: "Monday – Saturday", hours: "9:00 AM to 8:00 PM" },
    { days: "Sunday", hours: "9:00 AM to 12:30 PM" }
  ],

  hoursSummary: "Mon-Sat: 9:00 AM - 8:00 PM | Sun: 9:00 AM - 12:30 PM",

  currency: "INR (₹)",
  currencySymbol: "₹",

  authorizedBrands: [
    { name: "ASTRAL", category: "Wire Guard Electrical Conduit PVC Pipes & Fittings" },
    { name: "HAVELLS", category: "Fans, Lighting & Home Appliances" },
    { name: "C&S Electric", category: "WiNtrip MCB, RCCB, Isolators & DB" },
    { name: "PARCOS", category: "Designer Modular Switches & Plates" },
    { name: "KOSCH", category: "Premium Modular Solutions" },
    { name: "AMRON", category: "Architectural Modular Switch Plates" },
    { name: "ANGEL", category: "Certified ELCB & MCB Electrical Safety Switchgear" },
    { name: "Hi-Fi Electric", category: "Concealed LED Junction & Panel Lights" },
    { name: "Raj Electric Wooden", category: "Handcrafted Wooden Switchboards" }
  ],

  targetCustomerTypes: [
    { value: "Retail Customer", label: "Retail Customer / Homeowner" },
    { value: "Electrician", label: "Licensed Electrician / Technician" },
    { value: "Contractor", label: "Electrical / Building Contractor" },
    { value: "Retailer", label: "Retail Shop / Sub-Dealer" },
    { value: "Other", label: "Commercial / Other" }
  ]
};

export default BUSINESS_INFO;
