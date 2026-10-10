export interface Widget14 {
  id: string
  weight: number
}

export function compute14x1(input: Widget14[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute14x2(input: Widget14[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute14x3(input: Widget14[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute14x4(input: Widget14[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute14x5(input: Widget14[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute14x6(input: Widget14[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
