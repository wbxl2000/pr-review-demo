export interface Widget118 {
  id: string
  weight: number
}

export function compute118x1(input: Widget118[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute118x2(input: Widget118[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute118x3(input: Widget118[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute118x4(input: Widget118[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute118x5(input: Widget118[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute118x6(input: Widget118[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
