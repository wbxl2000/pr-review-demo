export interface Widget39 {
  id: string
  weight: number
}

export function compute39x1(input: Widget39[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute39x2(input: Widget39[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute39x3(input: Widget39[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute39x4(input: Widget39[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute39x5(input: Widget39[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute39x6(input: Widget39[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
