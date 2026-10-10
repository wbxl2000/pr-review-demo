export interface Widget65 {
  id: string
  weight: number
}

export function compute65x1(input: Widget65[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute65x2(input: Widget65[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute65x3(input: Widget65[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute65x4(input: Widget65[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute65x5(input: Widget65[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute65x6(input: Widget65[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
