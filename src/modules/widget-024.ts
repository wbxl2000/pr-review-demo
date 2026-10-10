export interface Widget24 {
  id: string
  weight: number
}

export function compute24x1(input: Widget24[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute24x2(input: Widget24[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute24x3(input: Widget24[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute24x4(input: Widget24[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute24x5(input: Widget24[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute24x6(input: Widget24[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
