export interface Widget5 {
  id: string
  weight: number
}

export function compute5x1(input: Widget5[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute5x2(input: Widget5[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute5x3(input: Widget5[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute5x4(input: Widget5[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute5x5(input: Widget5[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute5x6(input: Widget5[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
