export interface Widget95 {
  id: string
  weight: number
}

export function compute95x1(input: Widget95[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute95x2(input: Widget95[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute95x3(input: Widget95[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute95x4(input: Widget95[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute95x5(input: Widget95[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute95x6(input: Widget95[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
