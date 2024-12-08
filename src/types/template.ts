import type { FontId, FontWeight } from './font'

export interface Template {
  id: `type-${number}`
  contents: Content[]
  ratio: number
  imageURL: string
  backgroundURL: string
}

export interface Content {
  id: string
  text: string
  fontId: FontId
  fontWeight: FontWeight
  fontSize: number
  props: { className?: string; style?: React.CSSProperties }
}
