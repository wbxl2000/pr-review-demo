export interface Widget46 {
  id: string
  weight: number
}

export function compute46x1(input: Widget46[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute46x2(input: Widget46[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute46x3(input: Widget46[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute46x4(input: Widget46[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute46x5(input: Widget46[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute46x6(input: Widget46[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
