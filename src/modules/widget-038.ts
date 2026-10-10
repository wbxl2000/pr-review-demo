export interface Widget38 {
  id: string
  weight: number
}

export function compute38x1(input: Widget38[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute38x2(input: Widget38[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute38x3(input: Widget38[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute38x4(input: Widget38[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute38x5(input: Widget38[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute38x6(input: Widget38[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
