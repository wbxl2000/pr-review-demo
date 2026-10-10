export interface Widget112 {
  id: string
  weight: number
}

export function compute112x1(input: Widget112[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute112x2(input: Widget112[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute112x3(input: Widget112[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute112x4(input: Widget112[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute112x5(input: Widget112[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute112x6(input: Widget112[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
