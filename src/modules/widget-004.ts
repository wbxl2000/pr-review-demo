export interface Widget4 {
  id: string
  weight: number
}

export function compute4x1(input: Widget4[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute4x2(input: Widget4[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute4x3(input: Widget4[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute4x4(input: Widget4[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute4x5(input: Widget4[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute4x6(input: Widget4[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
