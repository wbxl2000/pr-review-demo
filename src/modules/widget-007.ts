export interface Widget7 {
  id: string
  weight: number
}

export function compute7x1(input: Widget7[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute7x2(input: Widget7[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute7x3(input: Widget7[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute7x4(input: Widget7[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute7x5(input: Widget7[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute7x6(input: Widget7[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
