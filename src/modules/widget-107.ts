export interface Widget107 {
  id: string
  weight: number
}

export function compute107x1(input: Widget107[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute107x2(input: Widget107[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute107x3(input: Widget107[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute107x4(input: Widget107[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute107x5(input: Widget107[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute107x6(input: Widget107[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
