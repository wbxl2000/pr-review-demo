export interface Widget55 {
  id: string
  weight: number
}

export function compute55x1(input: Widget55[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute55x2(input: Widget55[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute55x3(input: Widget55[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute55x4(input: Widget55[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute55x5(input: Widget55[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute55x6(input: Widget55[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
