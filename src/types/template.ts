import type { Font } from './font'

export interface Template {
  id: `type-${number}`
  contents: Content[]
  backgroundURL: string
}

export interface Content {
  id: string
  text: string
  fontConfig: FontConfig
}

export interface FontConfig {
  font: Font
  weight: number
  size: number
}
