export interface Widget83 {
  id: string
  weight: number
}

export function compute83x1(input: Widget83[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute83x2(input: Widget83[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute83x3(input: Widget83[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute83x4(input: Widget83[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute83x5(input: Widget83[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute83x6(input: Widget83[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
