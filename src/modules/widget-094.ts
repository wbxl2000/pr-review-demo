export interface Widget94 {
  id: string
  weight: number
}

export function compute94x1(input: Widget94[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute94x2(input: Widget94[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute94x3(input: Widget94[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute94x4(input: Widget94[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute94x5(input: Widget94[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute94x6(input: Widget94[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
