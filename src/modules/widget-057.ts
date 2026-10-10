export interface Widget57 {
  id: string
  weight: number
}

export function compute57x1(input: Widget57[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute57x2(input: Widget57[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute57x3(input: Widget57[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute57x4(input: Widget57[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute57x5(input: Widget57[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute57x6(input: Widget57[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
