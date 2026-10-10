export interface Widget37 {
  id: string
  weight: number
}

export function compute37x1(input: Widget37[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute37x2(input: Widget37[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute37x3(input: Widget37[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute37x4(input: Widget37[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute37x5(input: Widget37[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute37x6(input: Widget37[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
