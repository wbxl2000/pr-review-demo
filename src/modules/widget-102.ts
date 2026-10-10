export interface Widget102 {
  id: string
  weight: number
}

export function compute102x1(input: Widget102[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute102x2(input: Widget102[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute102x3(input: Widget102[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute102x4(input: Widget102[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute102x5(input: Widget102[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute102x6(input: Widget102[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
