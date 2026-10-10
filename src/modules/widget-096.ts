export interface Widget96 {
  id: string
  weight: number
}

export function compute96x1(input: Widget96[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute96x2(input: Widget96[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute96x3(input: Widget96[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute96x4(input: Widget96[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute96x5(input: Widget96[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute96x6(input: Widget96[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
