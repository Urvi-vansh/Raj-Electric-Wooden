import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../config/businessInfo';
import { getGeneralEnquiryUrl } from '../utils/whatsapp';

export default function FloatingContact() {
  return (
    <aside className="floating-actions" aria-label="Quick contact buttons">
      <a
        href={getGeneralEnquiryUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="fab-btn fab-whatsapp"
        title="Chat on WhatsApp"
        aria-label="Enquire on WhatsApp"
      >
        <MessageCircle size={22} />
        <span>WhatsApp</span>
      </a>

      <a
        href={`tel:${BUSINESS_INFO.contact.phoneTel}`}
        className="fab-btn fab-call"
        title="Call Raj Electric Wooden"
        aria-label="Call Raj Electric Wooden"
      >
        <Phone size={20} />
        <span>Call Shop</span>
      </a>
    </aside>
  );
}
