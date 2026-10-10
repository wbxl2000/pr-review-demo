export interface Widget49 {
  id: string
  weight: number
}

export function compute49x1(input: Widget49[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute49x2(input: Widget49[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute49x3(input: Widget49[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute49x4(input: Widget49[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute49x5(input: Widget49[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute49x6(input: Widget49[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
