export interface Widget20 {
  id: string
  weight: number
}

export function compute20x1(input: Widget20[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute20x2(input: Widget20[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute20x3(input: Widget20[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute20x4(input: Widget20[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute20x5(input: Widget20[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute20x6(input: Widget20[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
