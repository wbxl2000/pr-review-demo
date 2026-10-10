export interface Widget33 {
  id: string
  weight: number
}

export function compute33x1(input: Widget33[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute33x2(input: Widget33[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute33x3(input: Widget33[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute33x4(input: Widget33[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute33x5(input: Widget33[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute33x6(input: Widget33[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
