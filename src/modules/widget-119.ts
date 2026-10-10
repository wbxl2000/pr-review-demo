export interface Widget119 {
  id: string
  weight: number
}

export function compute119x1(input: Widget119[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute119x2(input: Widget119[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute119x3(input: Widget119[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute119x4(input: Widget119[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute119x5(input: Widget119[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute119x6(input: Widget119[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
