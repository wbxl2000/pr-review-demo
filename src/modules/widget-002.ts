export interface Widget2 {
  id: string
  weight: number
}

export function compute2x1(input: Widget2[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute2x2(input: Widget2[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute2x3(input: Widget2[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute2x4(input: Widget2[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute2x5(input: Widget2[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute2x6(input: Widget2[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
