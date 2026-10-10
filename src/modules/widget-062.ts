export interface Widget62 {
  id: string
  weight: number
}

export function compute62x1(input: Widget62[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute62x2(input: Widget62[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute62x3(input: Widget62[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute62x4(input: Widget62[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute62x5(input: Widget62[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute62x6(input: Widget62[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
