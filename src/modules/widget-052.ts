export interface Widget52 {
  id: string
  weight: number
}

export function compute52x1(input: Widget52[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute52x2(input: Widget52[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute52x3(input: Widget52[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute52x4(input: Widget52[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute52x5(input: Widget52[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute52x6(input: Widget52[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
