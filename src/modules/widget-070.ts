export interface Widget70 {
  id: string
  weight: number
}

export function compute70x1(input: Widget70[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute70x2(input: Widget70[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute70x3(input: Widget70[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute70x4(input: Widget70[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute70x5(input: Widget70[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute70x6(input: Widget70[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
