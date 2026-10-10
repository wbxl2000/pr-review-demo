export interface Widget109 {
  id: string
  weight: number
}

export function compute109x1(input: Widget109[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute109x2(input: Widget109[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute109x3(input: Widget109[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute109x4(input: Widget109[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute109x5(input: Widget109[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute109x6(input: Widget109[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
