export interface Widget71 {
  id: string
  weight: number
}

export function compute71x1(input: Widget71[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute71x2(input: Widget71[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute71x3(input: Widget71[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute71x4(input: Widget71[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute71x5(input: Widget71[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute71x6(input: Widget71[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
