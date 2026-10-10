export interface Widget97 {
  id: string
  weight: number
}

export function compute97x1(input: Widget97[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute97x2(input: Widget97[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute97x3(input: Widget97[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute97x4(input: Widget97[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute97x5(input: Widget97[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute97x6(input: Widget97[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
