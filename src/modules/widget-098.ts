export interface Widget98 {
  id: string
  weight: number
}

export function compute98x1(input: Widget98[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute98x2(input: Widget98[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute98x3(input: Widget98[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute98x4(input: Widget98[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute98x5(input: Widget98[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute98x6(input: Widget98[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
