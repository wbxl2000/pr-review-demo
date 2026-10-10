export interface Widget23 {
  id: string
  weight: number
}

export function compute23x1(input: Widget23[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute23x2(input: Widget23[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute23x3(input: Widget23[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute23x4(input: Widget23[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute23x5(input: Widget23[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute23x6(input: Widget23[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
