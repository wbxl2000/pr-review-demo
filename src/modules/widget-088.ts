export interface Widget88 {
  id: string
  weight: number
}

export function compute88x1(input: Widget88[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute88x2(input: Widget88[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute88x3(input: Widget88[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute88x4(input: Widget88[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute88x5(input: Widget88[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute88x6(input: Widget88[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
