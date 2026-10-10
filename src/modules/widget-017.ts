export interface Widget17 {
  id: string
  weight: number
}

export function compute17x1(input: Widget17[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute17x2(input: Widget17[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute17x3(input: Widget17[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute17x4(input: Widget17[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute17x5(input: Widget17[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute17x6(input: Widget17[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
