export interface Widget32 {
  id: string
  weight: number
}

export function compute32x1(input: Widget32[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute32x2(input: Widget32[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute32x3(input: Widget32[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute32x4(input: Widget32[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute32x5(input: Widget32[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute32x6(input: Widget32[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
