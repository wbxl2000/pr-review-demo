export interface Widget92 {
  id: string
  weight: number
}

export function compute92x1(input: Widget92[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute92x2(input: Widget92[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute92x3(input: Widget92[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute92x4(input: Widget92[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute92x5(input: Widget92[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute92x6(input: Widget92[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
