export interface Widget54 {
  id: string
  weight: number
}

export function compute54x1(input: Widget54[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute54x2(input: Widget54[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute54x3(input: Widget54[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute54x4(input: Widget54[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute54x5(input: Widget54[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute54x6(input: Widget54[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
