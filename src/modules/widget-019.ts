export interface Widget19 {
  id: string
  weight: number
}

export function compute19x1(input: Widget19[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute19x2(input: Widget19[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute19x3(input: Widget19[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute19x4(input: Widget19[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute19x5(input: Widget19[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute19x6(input: Widget19[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
