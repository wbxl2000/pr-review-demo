export interface Widget99 {
  id: string
  weight: number
}

export function compute99x1(input: Widget99[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute99x2(input: Widget99[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute99x3(input: Widget99[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute99x4(input: Widget99[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute99x5(input: Widget99[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute99x6(input: Widget99[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
