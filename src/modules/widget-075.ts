export interface Widget75 {
  id: string
  weight: number
}

export function compute75x1(input: Widget75[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute75x2(input: Widget75[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute75x3(input: Widget75[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute75x4(input: Widget75[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute75x5(input: Widget75[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute75x6(input: Widget75[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
