export interface Widget40 {
  id: string
  weight: number
}

export function compute40x1(input: Widget40[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute40x2(input: Widget40[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute40x3(input: Widget40[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute40x4(input: Widget40[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute40x5(input: Widget40[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute40x6(input: Widget40[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
