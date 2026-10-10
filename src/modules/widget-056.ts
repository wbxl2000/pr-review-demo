export interface Widget56 {
  id: string
  weight: number
}

export function compute56x1(input: Widget56[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute56x2(input: Widget56[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute56x3(input: Widget56[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute56x4(input: Widget56[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute56x5(input: Widget56[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute56x6(input: Widget56[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
