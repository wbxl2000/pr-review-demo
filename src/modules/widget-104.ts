export interface Widget104 {
  id: string
  weight: number
}

export function compute104x1(input: Widget104[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute104x2(input: Widget104[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute104x3(input: Widget104[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute104x4(input: Widget104[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute104x5(input: Widget104[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute104x6(input: Widget104[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
