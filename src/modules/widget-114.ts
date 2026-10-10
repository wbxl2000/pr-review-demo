export interface Widget114 {
  id: string
  weight: number
}

export function compute114x1(input: Widget114[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute114x2(input: Widget114[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute114x3(input: Widget114[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute114x4(input: Widget114[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute114x5(input: Widget114[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute114x6(input: Widget114[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
