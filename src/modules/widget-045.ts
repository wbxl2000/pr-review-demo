export interface Widget45 {
  id: string
  weight: number
}

export function compute45x1(input: Widget45[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute45x2(input: Widget45[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute45x3(input: Widget45[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute45x4(input: Widget45[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute45x5(input: Widget45[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute45x6(input: Widget45[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
