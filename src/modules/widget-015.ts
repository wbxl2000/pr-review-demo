export interface Widget15 {
  id: string
  weight: number
}

export function compute15x1(input: Widget15[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute15x2(input: Widget15[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute15x3(input: Widget15[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute15x4(input: Widget15[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute15x5(input: Widget15[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute15x6(input: Widget15[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
