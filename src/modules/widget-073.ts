export interface Widget73 {
  id: string
  weight: number
}

export function compute73x1(input: Widget73[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute73x2(input: Widget73[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute73x3(input: Widget73[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute73x4(input: Widget73[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute73x5(input: Widget73[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute73x6(input: Widget73[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
