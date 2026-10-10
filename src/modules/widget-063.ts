export interface Widget63 {
  id: string
  weight: number
}

export function compute63x1(input: Widget63[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute63x2(input: Widget63[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute63x3(input: Widget63[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute63x4(input: Widget63[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute63x5(input: Widget63[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute63x6(input: Widget63[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
