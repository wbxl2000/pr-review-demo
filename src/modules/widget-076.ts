export interface Widget76 {
  id: string
  weight: number
}

export function compute76x1(input: Widget76[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute76x2(input: Widget76[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute76x3(input: Widget76[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute76x4(input: Widget76[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute76x5(input: Widget76[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute76x6(input: Widget76[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
