export interface Widget105 {
  id: string
  weight: number
}

export function compute105x1(input: Widget105[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute105x2(input: Widget105[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute105x3(input: Widget105[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute105x4(input: Widget105[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute105x5(input: Widget105[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute105x6(input: Widget105[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
