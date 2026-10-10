export interface Widget100 {
  id: string
  weight: number
}

export function compute100x1(input: Widget100[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute100x2(input: Widget100[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute100x3(input: Widget100[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute100x4(input: Widget100[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute100x5(input: Widget100[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute100x6(input: Widget100[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
