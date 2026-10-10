export interface Widget31 {
  id: string
  weight: number
}

export function compute31x1(input: Widget31[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute31x2(input: Widget31[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute31x3(input: Widget31[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute31x4(input: Widget31[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute31x5(input: Widget31[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute31x6(input: Widget31[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
