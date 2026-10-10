export interface Widget43 {
  id: string
  weight: number
}

export function compute43x1(input: Widget43[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute43x2(input: Widget43[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute43x3(input: Widget43[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute43x4(input: Widget43[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute43x5(input: Widget43[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute43x6(input: Widget43[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
