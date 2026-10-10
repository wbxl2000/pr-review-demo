export interface Widget108 {
  id: string
  weight: number
}

export function compute108x1(input: Widget108[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute108x2(input: Widget108[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute108x3(input: Widget108[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute108x4(input: Widget108[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute108x5(input: Widget108[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute108x6(input: Widget108[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
