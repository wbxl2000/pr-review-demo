export interface Widget25 {
  id: string
  weight: number
}

export function compute25x1(input: Widget25[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute25x2(input: Widget25[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute25x3(input: Widget25[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute25x4(input: Widget25[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute25x5(input: Widget25[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute25x6(input: Widget25[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
