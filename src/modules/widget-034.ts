export interface Widget34 {
  id: string
  weight: number
}

export function compute34x1(input: Widget34[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute34x2(input: Widget34[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute34x3(input: Widget34[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute34x4(input: Widget34[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute34x5(input: Widget34[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute34x6(input: Widget34[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
