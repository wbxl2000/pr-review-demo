export interface Widget29 {
  id: string
  weight: number
}

export function compute29x1(input: Widget29[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute29x2(input: Widget29[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute29x3(input: Widget29[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute29x4(input: Widget29[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute29x5(input: Widget29[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute29x6(input: Widget29[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
