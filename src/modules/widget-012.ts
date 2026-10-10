export interface Widget12 {
  id: string
  weight: number
}

export function compute12x1(input: Widget12[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute12x2(input: Widget12[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute12x3(input: Widget12[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute12x4(input: Widget12[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute12x5(input: Widget12[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute12x6(input: Widget12[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
