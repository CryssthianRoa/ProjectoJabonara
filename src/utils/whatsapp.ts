import { CartItem } from '../types';

export const generateWhatsAppMessage = (items: CartItem[], total: number): string => {
  const productList = items.map(item => 
    `- ${item.product.name} x ${item.quantity} = $${(item.product.price * item.quantity).toLocaleString()}`
  ).join('\n');

  const message = `🧼 *Pedido de Jabonara* 🧼\n\n${productList}\n\n💰 *Total: $${total.toLocaleString()}*\n\n¡Gracias por elegir nuestros productos naturales!`;
  
  return encodeURIComponent(message);
};

export const sendWhatsAppOrder = (items: CartItem[], total: number) => {
  const message = generateWhatsAppMessage(items, total);
  const phoneNumber = '573112749302';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(whatsappUrl, '_blank');
};