export interface Widget87 {
  id: string
  weight: number
}

export function compute87x1(input: Widget87[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute87x2(input: Widget87[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute87x3(input: Widget87[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute87x4(input: Widget87[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute87x5(input: Widget87[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute87x6(input: Widget87[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
