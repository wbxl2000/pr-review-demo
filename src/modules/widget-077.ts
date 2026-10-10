export interface Widget77 {
  id: string
  weight: number
}

export function compute77x1(input: Widget77[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute77x2(input: Widget77[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute77x3(input: Widget77[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute77x4(input: Widget77[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute77x5(input: Widget77[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute77x6(input: Widget77[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
