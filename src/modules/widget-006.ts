export interface Widget6 {
  id: string
  weight: number
}

export function compute6x1(input: Widget6[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute6x2(input: Widget6[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute6x3(input: Widget6[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute6x4(input: Widget6[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute6x5(input: Widget6[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute6x6(input: Widget6[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
