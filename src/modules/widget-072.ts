export interface Widget72 {
  id: string
  weight: number
}

export function compute72x1(input: Widget72[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute72x2(input: Widget72[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute72x3(input: Widget72[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute72x4(input: Widget72[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute72x5(input: Widget72[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute72x6(input: Widget72[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
