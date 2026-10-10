export interface Widget84 {
  id: string
  weight: number
}

export function compute84x1(input: Widget84[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute84x2(input: Widget84[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute84x3(input: Widget84[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute84x4(input: Widget84[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute84x5(input: Widget84[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute84x6(input: Widget84[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
