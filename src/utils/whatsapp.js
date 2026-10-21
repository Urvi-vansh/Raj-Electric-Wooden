import { BUSINESS_INFO } from '../config/businessInfo';

/**
 * Creates a clean wa.me WhatsApp URL with URL-encoded message text
 */
export function buildWhatsAppUrl(message) {
  const cleanNumber = BUSINESS_INFO.contact.whatsappNumber.replace(/[^0-9]/g, '');
  const encodedText = encodeURIComponent(message.trim());
  return `https://wa.me/${cleanNumber}?text=${encodedText}`;
}

/**
 * Generates the standardized single-product enquiry message
 * Requirement:
 * "Hello Raj Electric & Wooden Works, I would like to enquire about [Product Name]. Please share the current price, available options, and availability."
 */
export function getProductEnquiryUrl(productName, quantity = null) {
  let message = `Hello ${BUSINESS_INFO.alternateName}, I would like to enquire about *${productName}*. Please share the current price, available options, and availability.`;
  if (quantity && quantity > 1) {
    message += ` (Estimated quantity required: ${quantity})`;
  }
  return buildWhatsAppUrl(message);
}

/**
 * Generates the standardized wholesale / bulk enquiry message
 */
export function getBulkEnquiryUrl({
  customerName = '',
  mobile = '',
  customerType = '',
  category = '',
  productName = '',
  quantity = '',
  notes = '',
  preferredContact = 'WhatsApp'
}) {
  const lines = [
    `*Wholesale & Bulk Order Enquiry*`,
    `To: ${BUSINESS_INFO.alternateName} (Amreli)`,
    ``,
    `*Customer Details:*`,
    `• Name: ${customerName.trim() || 'Not provided'}`,
    `• Mobile: ${mobile.trim() || 'Not provided'}`,
    `• Customer Type: ${customerType || 'Customer'}`,
    `• Preferred Contact: ${preferredContact}`,
    ``,
    `*Product Requirements:*`,
    `• Category: ${category || 'General Electrical'}`,
    `• Product / Spec: ${productName.trim() || 'Bulk electrical goods'}`,
    `• Required Quantity: ${quantity ? `${quantity} Units / Lots` : 'To be discussed'}`,
  ];

  if (notes && notes.trim()) {
    lines.push(``, `*Additional Notes:*`, notes.trim());
  }

  lines.push(
    ``,
    `Please share pricing, wholesale availability, and delivery/pickup details from your Batar Wadi shop.`
  );

  return buildWhatsAppUrl(lines.join('\n'));
}

/**
 * Quick General WhatsApp enquiry
 */
export function getGeneralEnquiryUrl() {
  const message = `Hello ${BUSINESS_INFO.alternateName}, I would like to enquire about electrical products at your shop in Batar Wadi, Amreli.`;
  return buildWhatsAppUrl(message);
}
