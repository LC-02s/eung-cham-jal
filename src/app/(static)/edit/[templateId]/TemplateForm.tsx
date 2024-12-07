'use client'

import React from 'react'
import Link from 'next/link'
import {
  Select,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
  Input,
  Textarea,
  Button,
} from '@/components/ui'
import { useCurrentContent, useModifyContent } from '@/store'
import { FONTS, fontDB } from '@/data'
import type { FontId, FontWeight } from '@/types'

const TemplateFontSizeInput = () => {
  const fontSize = useCurrentContent('fontSize')
  const modifyContent = useModifyContent()

  return (
    <Input
      className="w-40"
      value={fontSize}
      onChange={(e) => {
        const value = Number(e.currentTarget.value)

        if (!Number.isNaN(value)) {
          modifyContent({ fontSize: value })
        }
      }}
    />
  )
}

const TemplateTextInput = () => {
  const text = useCurrentContent('text')
  const modifyContent = useModifyContent()

  return (
    <fieldset className="block space-y-2">
      <legend className="block text-lg font-bold">텍스트 수정</legend>
      <Textarea value={text} onChange={(e) => modifyContent({ text: e.currentTarget.value })} />
    </fieldset>
  )
}

const TemplateFontTypeInput = ({ children }: React.PropsWithChildren) => {
  const fontId = useCurrentContent('fontId')
  const fontWeight = useCurrentContent('fontWeight')
  const modifyContent = useModifyContent()

  const targetFont = React.useMemo(() => fontDB.get(fontId), [fontId])

  return (
    <fieldset className="block space-y-3">
      <legend className="block text-lg font-bold">폰트 변경</legend>
      <Select
        onValueChange={(value: FontId) => {
          const font = fontDB.get(value)

          if (font) {
            modifyContent({ fontId: value, fontWeight: font.weight[0] })
          }
        }}
      >
        <SelectTrigger>
          <SelectValue placeholder={targetFont?.name} />
        </SelectTrigger>
        <SelectContent>
          {FONTS.map(({ id, name }) => (
            <SelectItem key={id} value={id}>
              {name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <div className="flex items-center justify-center space-x-2">
        <Select
          onValueChange={(value) => modifyContent({ fontWeight: Number(value) as FontWeight })}
        >
          <SelectTrigger>
            <SelectValue placeholder={fontWeight.toString()} />
          </SelectTrigger>
          <SelectContent>
            {targetFont?.weight.map((weight) => (
              <SelectItem key={`${targetFont.id}${weight}`} value={weight.toString()}>
                {weight}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {children}
      </div>
    </fieldset>
  )
}

const TemplateForm = () => {
  React.useEffect(() => {
    const unloadHandler = (e: BeforeUnloadEvent) => {
      e.preventDefault()
      e.returnValue = ''
    }

    window.addEventListener('beforeunload', unloadHandler)

    return () => {
      window.removeEventListener('beforeunload', unloadHandler)
    }
  }, [])

  return (
    <form className="block w-full p-6 pb-12">
      <div className="space-y-8 p-2">
        <TemplateFontTypeInput>
          <TemplateFontSizeInput />
        </TemplateFontTypeInput>
        <TemplateTextInput />
      </div>
      <Button variant="custom" className="!mt-12" asChild>
        <Link href="/charm/result">저장하기</Link>
      </Button>
    </form>
  )
}

export default TemplateForm
