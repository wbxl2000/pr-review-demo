export interface Widget82 {
  id: string
  weight: number
}

export function compute82x1(input: Widget82[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute82x2(input: Widget82[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute82x3(input: Widget82[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute82x4(input: Widget82[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute82x5(input: Widget82[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute82x6(input: Widget82[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
