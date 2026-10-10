export interface Widget9 {
  id: string
  weight: number
}

export function compute9x1(input: Widget9[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute9x2(input: Widget9[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute9x3(input: Widget9[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute9x4(input: Widget9[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute9x5(input: Widget9[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute9x6(input: Widget9[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
