import { create } from 'zustand'

interface Template {
  id: number
  contents: Content[]
  backgroundURL: string
}

interface Content {
  id: string
  text: string
  fontConfig: FontConfig
}

interface FontConfig {
  font: Font
  weight: number[]
}
