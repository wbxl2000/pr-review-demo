export interface Widget48 {
  id: string
  weight: number
}

export function compute48x1(input: Widget48[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute48x2(input: Widget48[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute48x3(input: Widget48[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute48x4(input: Widget48[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute48x5(input: Widget48[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute48x6(input: Widget48[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
