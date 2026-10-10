export interface Widget67 {
  id: string
  weight: number
}

export function compute67x1(input: Widget67[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute67x2(input: Widget67[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute67x3(input: Widget67[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute67x4(input: Widget67[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute67x5(input: Widget67[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute67x6(input: Widget67[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
