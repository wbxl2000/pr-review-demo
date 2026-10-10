export interface Widget113 {
  id: string
  weight: number
}

export function compute113x1(input: Widget113[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute113x2(input: Widget113[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute113x3(input: Widget113[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute113x4(input: Widget113[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute113x5(input: Widget113[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute113x6(input: Widget113[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
