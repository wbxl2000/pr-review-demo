export interface Widget86 {
  id: string
  weight: number
}

export function compute86x1(input: Widget86[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute86x2(input: Widget86[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute86x3(input: Widget86[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute86x4(input: Widget86[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute86x5(input: Widget86[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute86x6(input: Widget86[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
