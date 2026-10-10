export interface Widget78 {
  id: string
  weight: number
}

export function compute78x1(input: Widget78[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute78x2(input: Widget78[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute78x3(input: Widget78[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute78x4(input: Widget78[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute78x5(input: Widget78[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute78x6(input: Widget78[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
