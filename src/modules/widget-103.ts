export interface Widget103 {
  id: string
  weight: number
}

export function compute103x1(input: Widget103[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute103x2(input: Widget103[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute103x3(input: Widget103[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute103x4(input: Widget103[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute103x5(input: Widget103[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute103x6(input: Widget103[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
