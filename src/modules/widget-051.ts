export interface Widget51 {
  id: string
  weight: number
}

export function compute51x1(input: Widget51[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute51x2(input: Widget51[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute51x3(input: Widget51[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute51x4(input: Widget51[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute51x5(input: Widget51[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute51x6(input: Widget51[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
