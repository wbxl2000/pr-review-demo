export interface Widget74 {
  id: string
  weight: number
}

export function compute74x1(input: Widget74[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute74x2(input: Widget74[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute74x3(input: Widget74[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute74x4(input: Widget74[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute74x5(input: Widget74[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute74x6(input: Widget74[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
