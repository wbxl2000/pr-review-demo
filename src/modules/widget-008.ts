export interface Widget8 {
  id: string
  weight: number
}

export function compute8x1(input: Widget8[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute8x2(input: Widget8[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute8x3(input: Widget8[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute8x4(input: Widget8[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute8x5(input: Widget8[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute8x6(input: Widget8[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
