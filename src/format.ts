export function formatPrice(value: number, currency = 'USD'): string {
  if (!Number.isFinite(value)) return '—'
  return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(value)
}
