export interface Widget1 {
  id: string
  weight: number
}

export function compute1x1(input: Widget1[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute1x2(input: Widget1[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute1x3(input: Widget1[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute1x4(input: Widget1[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute1x5(input: Widget1[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute1x6(input: Widget1[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
