export interface Widget28 {
  id: string
  weight: number
}

export function compute28x1(input: Widget28[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute28x2(input: Widget28[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute28x3(input: Widget28[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute28x4(input: Widget28[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute28x5(input: Widget28[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute28x6(input: Widget28[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
