export interface CartItem {
  sku: string
  price: number
  quantity: number
}

export function subtotal(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0)
}
