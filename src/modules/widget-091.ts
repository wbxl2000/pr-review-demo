export interface Widget91 {
  id: string
  weight: number
}

export function compute91x1(input: Widget91[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute91x2(input: Widget91[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute91x3(input: Widget91[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute91x4(input: Widget91[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute91x5(input: Widget91[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute91x6(input: Widget91[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
