'use client'

import React from 'react'
import { create } from 'zustand'
import type { Template, Content } from '@/types'
import { fontDB, TEMPLATES } from '@/data'

interface TemplateStore {
  currentId: Template['id']
  backgroundURL: Template['backgroundURL']
  ratio: Template['ratio']

  contents: Template['contents']
  contentsLength: number
  activeContentIndex: number

  initTemplate: (template: Template) => void

  focusContent: (index: number) => void

  modifyContent: (payload: Partial<Content>) => void
}

const useTemplateStore = create<TemplateStore>((set) => ({
  currentId: TEMPLATES[0].id,
  backgroundURL: TEMPLATES[0].backgroundURL,
  ratio: TEMPLATES[0].ratio,

  contents: TEMPLATES[0].contents,
  contentsLength: TEMPLATES[0].contents.length,
  activeContentIndex: 0,

  initTemplate: (template) =>
    set((prev) => {
      if (template.id === prev.currentId) {
        return prev
      }

      return {
        currentId: template.id,
        ratio: template.ratio,
        backgroundURL: template.backgroundURL,
        contents: template.contents,
        contentsLength: template.contents.length,
        activeContentIndex: 0,
      }
    }),

  focusContent: (index) => set({ activeContentIndex: index }),

  modifyContent: (payload) =>
    set(({ contents, activeContentIndex }) => {
      return {
        contents: contents.map((content, idx) => {
          if (idx !== activeContentIndex) return content

          if (!payload.fontId || content.fontId === payload.fontId) {
            return { ...content, ...payload }
          }

          const targetFont = fontDB.get(payload.fontId)

          if (!targetFont) {
            return content
          }

          return { ...content, fontId: targetFont.id, fontWeight: targetFont.weight[0] }
        }),
      }
    }),
}))

export const useActiveContentIndex = () => useTemplateStore((store) => store.activeContentIndex)

export const useTemplate = () => {
  const currentId = useTemplateStore((store) => store.currentId)
  const ratio = useTemplateStore((store) => store.ratio)
  const backgroundURL = useTemplateStore((store) => store.backgroundURL)
  const contentsLength = useTemplateStore((store) => store.contentsLength)

  return React.useMemo(() => {
    return { currentId, backgroundURL, ratio, contentsLength }
  }, [currentId, backgroundURL, ratio, contentsLength])
}

export const useTemplateContent = (index: number) => {
  return useTemplateStore(({ contents }) => contents[index])
}

export const useCurrentContent: <K extends keyof TemplateStore['contents'][number]>(
  key: K,
) => TemplateStore['contents'][number][K] = (key) => {
  const activeContentIndex = useActiveContentIndex()

  return useTemplateStore((store) => store.contents[activeContentIndex][key])
}

export const useInitTemplate = () => useTemplateStore((store) => store.initTemplate)

export const useFocusContent = () => useTemplateStore((store) => store.focusContent)

export const useModifyContent = () => useTemplateStore((store) => store.modifyContent)