export interface Widget81 {
  id: string
  weight: number
}

export function compute81x1(input: Widget81[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute81x2(input: Widget81[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute81x3(input: Widget81[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute81x4(input: Widget81[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute81x5(input: Widget81[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute81x6(input: Widget81[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
