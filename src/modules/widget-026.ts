export interface Widget26 {
  id: string
  weight: number
}

export function compute26x1(input: Widget26[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute26x2(input: Widget26[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute26x3(input: Widget26[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute26x4(input: Widget26[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute26x5(input: Widget26[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute26x6(input: Widget26[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
