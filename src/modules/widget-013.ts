export interface Widget13 {
  id: string
  weight: number
}

export function compute13x1(input: Widget13[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute13x2(input: Widget13[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute13x3(input: Widget13[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute13x4(input: Widget13[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute13x5(input: Widget13[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute13x6(input: Widget13[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
