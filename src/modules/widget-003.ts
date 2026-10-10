export interface Widget3 {
  id: string
  weight: number
}

export function compute3x1(input: Widget3[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute3x2(input: Widget3[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute3x3(input: Widget3[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute3x4(input: Widget3[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute3x5(input: Widget3[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute3x6(input: Widget3[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
