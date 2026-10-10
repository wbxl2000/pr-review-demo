export interface Widget53 {
  id: string
  weight: number
}

export function compute53x1(input: Widget53[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute53x2(input: Widget53[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute53x3(input: Widget53[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute53x4(input: Widget53[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute53x5(input: Widget53[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute53x6(input: Widget53[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
