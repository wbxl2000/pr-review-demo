export interface Widget93 {
  id: string
  weight: number
}

export function compute93x1(input: Widget93[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute93x2(input: Widget93[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute93x3(input: Widget93[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute93x4(input: Widget93[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute93x5(input: Widget93[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute93x6(input: Widget93[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
