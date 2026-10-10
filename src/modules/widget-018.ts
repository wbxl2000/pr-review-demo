export interface Widget18 {
  id: string
  weight: number
}

export function compute18x1(input: Widget18[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute18x2(input: Widget18[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute18x3(input: Widget18[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute18x4(input: Widget18[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute18x5(input: Widget18[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute18x6(input: Widget18[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
