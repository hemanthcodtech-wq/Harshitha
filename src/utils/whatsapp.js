const WA_NUMBER = '919900020960'

export function openWhatsApp(message) {
  const encoded = encodeURIComponent(message.trim())
  window.open(`https://wa.me/${WA_NUMBER}?text=${encoded}`, '_blank', 'noopener,noreferrer')
}
