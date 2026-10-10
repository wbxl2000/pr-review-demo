export interface Widget80 {
  id: string
  weight: number
}

export function compute80x1(input: Widget80[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute80x2(input: Widget80[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute80x3(input: Widget80[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute80x4(input: Widget80[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute80x5(input: Widget80[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute80x6(input: Widget80[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
