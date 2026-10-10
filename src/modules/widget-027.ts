export interface Widget27 {
  id: string
  weight: number
}

export function compute27x1(input: Widget27[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute27x2(input: Widget27[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute27x3(input: Widget27[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute27x4(input: Widget27[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute27x5(input: Widget27[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute27x6(input: Widget27[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
