export interface Widget16 {
  id: string
  weight: number
}

export function compute16x1(input: Widget16[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute16x2(input: Widget16[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute16x3(input: Widget16[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute16x4(input: Widget16[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute16x5(input: Widget16[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute16x6(input: Widget16[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
