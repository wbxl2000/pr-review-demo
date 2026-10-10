export interface Widget85 {
  id: string
  weight: number
}

export function compute85x1(input: Widget85[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute85x2(input: Widget85[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute85x3(input: Widget85[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute85x4(input: Widget85[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute85x5(input: Widget85[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute85x6(input: Widget85[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
