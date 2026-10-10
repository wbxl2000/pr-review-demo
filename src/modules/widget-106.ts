export interface Widget106 {
  id: string
  weight: number
}

export function compute106x1(input: Widget106[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute106x2(input: Widget106[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute106x3(input: Widget106[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute106x4(input: Widget106[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute106x5(input: Widget106[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute106x6(input: Widget106[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
