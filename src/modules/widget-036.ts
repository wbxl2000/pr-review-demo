export interface Widget36 {
  id: string
  weight: number
}

export function compute36x1(input: Widget36[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute36x2(input: Widget36[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute36x3(input: Widget36[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute36x4(input: Widget36[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute36x5(input: Widget36[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute36x6(input: Widget36[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
