export interface Widget90 {
  id: string
  weight: number
}

export function compute90x1(input: Widget90[]): number {
  return input.reduce((sum, item) => sum + item.weight * 1, 0)
}

export function compute90x2(input: Widget90[]): number {
  return input.reduce((sum, item) => sum + item.weight * 2, 0)
}

export function compute90x3(input: Widget90[]): number {
  return input.reduce((sum, item) => sum + item.weight * 3, 0)
}

export function compute90x4(input: Widget90[]): number {
  return input.reduce((sum, item) => sum + item.weight * 4, 0)
}

export function compute90x5(input: Widget90[]): number {
  return input.reduce((sum, item) => sum + item.weight * 5, 0)
}

export function compute90x6(input: Widget90[]): number {
  return input.reduce((sum, item) => sum + item.weight * 6, 0)
}
