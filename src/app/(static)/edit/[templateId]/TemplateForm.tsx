'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  Input,
  Textarea,
  Button,
} from '@/components/ui'
import { useCurrentContent, useModifyContent } from '@/store'
import { FONTS, fontDB, fontWeightNames } from '@/data'
import type { FontId, FontWeight } from '@/types'

const TemplateFontSizeInput = () => {
  const fontSize = useCurrentContent('fontSize')
  const modifyContent = useModifyContent()

  return (
    <Input
      type="number"
      className="h-10 w-full rounded-xl text-base sm:w-[calc(40%-0.5rem)] md:h-12 md:rounded-2xl md:text-lg"
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
      <legend className="block px-1 text-base font-bold md:text-lg">텍스트 수정</legend>
      <Textarea
        className="min-h-20 rounded-xl pb-5 text-base md:rounded-2xl md:text-lg"
        value={text}
        onChange={(e) => modifyContent({ text: e.currentTarget.value })}
      />
    </fieldset>
  )
}

const TemplateFontTypeInput = ({ children }: React.PropsWithChildren) => {
  const fontId = useCurrentContent('fontId')
  const fontWeight = useCurrentContent('fontWeight')
  const modifyContent = useModifyContent()

  const targetFont = React.useMemo(() => fontDB.get(fontId), [fontId])

  if (!targetFont) {
    return null
  }

  return (
    <fieldset className="block space-y-3">
      <legend className="block px-1 text-base font-bold md:text-lg">폰트 변경</legend>
      <Select
        key={fontId}
        defaultValue={fontId}
        onValueChange={(value: FontId) => modifyContent({ fontId: value })}
      >
        <SelectTrigger className="">{targetFont.name}</SelectTrigger>
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
          key={`${fontId}${fontWeight}`}
          defaultValue={fontWeight.toString()}
          onValueChange={(value) => modifyContent({ fontWeight: Number(value) as FontWeight })}
        >
          <SelectTrigger className="w-3/5">{fontWeightNames.get(fontWeight)}</SelectTrigger>
          <SelectContent>
            {targetFont.weight.map((weight) => (
              <SelectItem key={`${targetFont.id}${weight}`} value={weight.toString()}>
                {fontWeightNames.get(weight)}
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
  const { push } = useRouter()

  const handleIncreaseCount = async () => {
    try {
      await fetch('/api/notion', {
        method: 'POST',
      })
    } catch (error) {
      console.error('Failed to increase count:', error)
    }
  }

  const submit = React.useCallback(async () => {
    await handleIncreaseCount()
    push('/charm/result')
  }, [push])

  return (
    <form className="block w-full p-4 pb-12">
      <div className="space-y-8 p-2">
        <TemplateFontTypeInput>
          <TemplateFontSizeInput />
        </TemplateFontTypeInput>
        <TemplateTextInput />
      </div>
      <Button variant="custom" className="!mt-8 sm:!mt-10 md:!mt-12" onClick={submit}>
        저장하기
      </Button>
    </form>
  )
}

export default TemplateForm
