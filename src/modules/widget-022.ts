export interface Widget22 {
  id: string
  weight: number
}

export function compute22x1(input: Widget22[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute22x2(input: Widget22[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute22x3(input: Widget22[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute22x4(input: Widget22[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute22x5(input: Widget22[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute22x6(input: Widget22[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
