import type { CartItem } from './cart'

export interface DiscountCode {
  code: string
  percentOff: number
}

export function applyDiscount(items: CartItem[], discount: DiscountCode | null): number {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  if (discount === null) return total
  return total * (1 - discount.percentOff / 100)
}
