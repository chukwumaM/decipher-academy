export default function WhatsAppButton() {
  const text = encodeURIComponent("Hello, I’m interested in your products on Wendy Luxury.");
  return (
    <a
      href={`https://wa.me/9016861334?text=${text}`}
      className="whatsapp"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
    >
      WhatsApp
    </a>
  );
}
