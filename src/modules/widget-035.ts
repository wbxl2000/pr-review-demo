export interface Widget35 {
  id: string
  weight: number
}

export function compute35x1(input: Widget35[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute35x2(input: Widget35[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute35x3(input: Widget35[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute35x4(input: Widget35[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute35x5(input: Widget35[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute35x6(input: Widget35[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
