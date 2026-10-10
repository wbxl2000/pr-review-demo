export interface Widget61 {
  id: string
  weight: number
}

export function compute61x1(input: Widget61[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute61x2(input: Widget61[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute61x3(input: Widget61[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute61x4(input: Widget61[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute61x5(input: Widget61[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute61x6(input: Widget61[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
