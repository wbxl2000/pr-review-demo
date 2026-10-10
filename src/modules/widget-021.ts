export interface Widget21 {
  id: string
  weight: number
}

export function compute21x1(input: Widget21[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute21x2(input: Widget21[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute21x3(input: Widget21[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute21x4(input: Widget21[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute21x5(input: Widget21[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute21x6(input: Widget21[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
