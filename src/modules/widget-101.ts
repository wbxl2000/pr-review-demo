export interface Widget101 {
  id: string
  weight: number
}

export function compute101x1(input: Widget101[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute101x2(input: Widget101[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute101x3(input: Widget101[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute101x4(input: Widget101[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute101x5(input: Widget101[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute101x6(input: Widget101[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
