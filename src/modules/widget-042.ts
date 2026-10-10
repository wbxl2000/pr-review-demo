export interface Widget42 {
  id: string
  weight: number
}

export function compute42x1(input: Widget42[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute42x2(input: Widget42[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute42x3(input: Widget42[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute42x4(input: Widget42[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute42x5(input: Widget42[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute42x6(input: Widget42[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
