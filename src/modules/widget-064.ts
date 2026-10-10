export interface Widget64 {
  id: string
  weight: number
}

export function compute64x1(input: Widget64[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute64x2(input: Widget64[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute64x3(input: Widget64[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute64x4(input: Widget64[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute64x5(input: Widget64[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute64x6(input: Widget64[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
