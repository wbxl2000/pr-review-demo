export interface Widget58 {
  id: string
  weight: number
}

export function compute58x1(input: Widget58[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute58x2(input: Widget58[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute58x3(input: Widget58[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute58x4(input: Widget58[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute58x5(input: Widget58[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute58x6(input: Widget58[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
