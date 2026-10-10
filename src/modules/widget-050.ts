export interface Widget50 {
  id: string
  weight: number
}

export function compute50x1(input: Widget50[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute50x2(input: Widget50[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute50x3(input: Widget50[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute50x4(input: Widget50[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute50x5(input: Widget50[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute50x6(input: Widget50[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
