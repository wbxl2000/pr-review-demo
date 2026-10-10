export interface Widget59 {
  id: string
  weight: number
}

export function compute59x1(input: Widget59[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute59x2(input: Widget59[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute59x3(input: Widget59[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute59x4(input: Widget59[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute59x5(input: Widget59[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute59x6(input: Widget59[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
