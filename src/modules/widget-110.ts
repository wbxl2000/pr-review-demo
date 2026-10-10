export interface Widget110 {
  id: string
  weight: number
}

export function compute110x1(input: Widget110[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute110x2(input: Widget110[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute110x3(input: Widget110[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute110x4(input: Widget110[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute110x5(input: Widget110[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute110x6(input: Widget110[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
