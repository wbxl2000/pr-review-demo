export interface Widget60 {
  id: string
  weight: number
}

export function compute60x1(input: Widget60[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute60x2(input: Widget60[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute60x3(input: Widget60[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute60x4(input: Widget60[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute60x5(input: Widget60[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute60x6(input: Widget60[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
