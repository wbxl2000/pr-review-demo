export interface Widget79 {
  id: string
  weight: number
}

export function compute79x1(input: Widget79[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute79x2(input: Widget79[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute79x3(input: Widget79[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute79x4(input: Widget79[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute79x5(input: Widget79[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute79x6(input: Widget79[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
