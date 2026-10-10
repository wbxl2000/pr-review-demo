export interface Widget10 {
  id: string
  weight: number
}

export function compute10x1(input: Widget10[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute10x2(input: Widget10[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute10x3(input: Widget10[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute10x4(input: Widget10[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute10x5(input: Widget10[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute10x6(input: Widget10[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
