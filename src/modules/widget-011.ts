export interface Widget11 {
  id: string
  weight: number
}

export function compute11x1(input: Widget11[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute11x2(input: Widget11[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute11x3(input: Widget11[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute11x4(input: Widget11[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute11x5(input: Widget11[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute11x6(input: Widget11[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
