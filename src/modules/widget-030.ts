export interface Widget30 {
  id: string
  weight: number
}

export function compute30x1(input: Widget30[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute30x2(input: Widget30[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute30x3(input: Widget30[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute30x4(input: Widget30[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute30x5(input: Widget30[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute30x6(input: Widget30[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
