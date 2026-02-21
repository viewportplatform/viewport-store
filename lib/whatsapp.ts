// WhatsApp helper functions

export function formatWhatsAppMessage(order: any): string {
  return `
🛒 *New Order*
━━━━━━━━━━━━━━
${order.items.map((item: any) => `• ${item.name} x${item.quantity} - $${item.price}`).join('\n')}
━━━━━━━━━━━━━━
*Total: $${order.total}*
  `.trim();
}

export function parseWhatsAppOrder(message: string): any {
  // Basic order parsing from WhatsApp message
  const lines = message.split('\n').filter((l) => l.trim());
  const items = [];
  
  for (const line of lines) {
    const match = line.match(/(.+?)\s*x(\d+)/);
    if (match) {
      items.push({
        name: match[1].trim(),
        quantity: parseInt(match[2]),
      });
    }
  }
  
  return { items };
}
