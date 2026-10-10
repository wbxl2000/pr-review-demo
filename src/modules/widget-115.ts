export interface Widget115 {
  id: string
  weight: number
}

export function compute115x1(input: Widget115[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute115x2(input: Widget115[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute115x3(input: Widget115[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute115x4(input: Widget115[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute115x5(input: Widget115[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute115x6(input: Widget115[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
