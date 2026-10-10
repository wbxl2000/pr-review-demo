export interface Widget41 {
  id: string
  weight: number
}

export function compute41x1(input: Widget41[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute41x2(input: Widget41[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute41x3(input: Widget41[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute41x4(input: Widget41[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute41x5(input: Widget41[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute41x6(input: Widget41[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
