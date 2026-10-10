export interface Widget66 {
  id: string
  weight: number
}

export function compute66x1(input: Widget66[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute66x2(input: Widget66[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute66x3(input: Widget66[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute66x4(input: Widget66[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute66x5(input: Widget66[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute66x6(input: Widget66[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
