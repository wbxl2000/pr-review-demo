export interface Widget89 {
  id: string
  weight: number
}

export function compute89x1(input: Widget89[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute89x2(input: Widget89[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute89x3(input: Widget89[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute89x4(input: Widget89[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute89x5(input: Widget89[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute89x6(input: Widget89[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
