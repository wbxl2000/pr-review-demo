export interface Widget68 {
  id: string
  weight: number
}

export function compute68x1(input: Widget68[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute68x2(input: Widget68[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute68x3(input: Widget68[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute68x4(input: Widget68[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute68x5(input: Widget68[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute68x6(input: Widget68[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
