export interface Widget120 {
  id: string
  weight: number
}

export function compute120x1(input: Widget120[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute120x2(input: Widget120[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute120x3(input: Widget120[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute120x4(input: Widget120[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute120x5(input: Widget120[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute120x6(input: Widget120[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
