export interface Widget116 {
  id: string
  weight: number
}

export function compute116x1(input: Widget116[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute116x2(input: Widget116[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute116x3(input: Widget116[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute116x4(input: Widget116[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute116x5(input: Widget116[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute116x6(input: Widget116[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
