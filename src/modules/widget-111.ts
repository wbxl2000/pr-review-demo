export interface Widget111 {
  id: string
  weight: number
}

export function compute111x1(input: Widget111[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute111x2(input: Widget111[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute111x3(input: Widget111[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute111x4(input: Widget111[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute111x5(input: Widget111[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute111x6(input: Widget111[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
