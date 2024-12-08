'use client'

import React from 'react'
import { useActiveContentIndex, useFocusContent, useTemplate, useTemplateContent } from '@/store'
import { fontDB } from '@/data'
import { useElementRect } from '@/hooks'
import { cn } from '@/lib/utils'
import { Break } from '@/components'

interface TemplateViewProps {
  mode?: 'view' | 'modify'
}

interface TemplateViewContentProps extends TemplateViewProps {
  containerRatio: number
  index: number
}

const withTemplateViewModifiableContent = ({ index }: Pick<TemplateViewContentProps, 'index'>) => {
  return function ModifiableContent({
    className,
    children,
    ...props
  }: JSX.IntrinsicElements['button']) {
    const activeIndex = useActiveContentIndex()
    const focusContent = useFocusContent()

    return (
      <button
        type="button"
        {...props}
        className={cn('pointer-events-auto relative', className)}
        onClick={() => focusContent(index)}
      >
        {children}
        {activeIndex === index && (
          <span className="absolute -inset-x-2 inset-y-0 border-2 border-gray-700">
            <span className="absolute left-0 top-0 size-3 -translate-x-1/2 -translate-y-1/2 border-2 border-gray-700 bg-gray-200" />
            <span className="absolute right-0 top-0 size-3 -translate-y-1/2 translate-x-1/2 border-2 border-gray-700 bg-gray-200" />
            <span className="absolute bottom-0 left-0 size-3 -translate-x-1/2 translate-y-1/2 border-2 border-gray-700 bg-gray-200" />
            <span className="absolute bottom-0 right-0 size-3 translate-x-1/2 translate-y-1/2 border-2 border-gray-700 bg-gray-200" />
          </span>
        )}
      </button>
    )
  }
}

const TemplateViewContent = ({
  containerRatio,
  mode = 'view',
  index,
}: TemplateViewContentProps) => {
  const content = useTemplateContent(index)
  const targetFont = React.useMemo(() => fontDB.get(content.fontId), [content.fontId])
  const Component = mode === 'view' ? 'p' : withTemplateViewModifiableContent({ index })

  return (
    <div
      className={cn('pointer-events-none absolute z-10', content.props.className)}
      style={content.props.style}
    >
      <Component
        id={content.id}
        className={targetFont?.className}
        style={{
          fontWeight: content.fontWeight,
          fontSize: content.fontSize / containerRatio,
        }}
      >
        <Break value={content.text} />
      </Component>
    </div>
  )
}

const TemplateView = ({ mode }: TemplateViewProps) => {
  const { backgroundURL, ratio, contentsLength } = useTemplate()
  const targetRef = React.useRef<HTMLDivElement | null>(null)
  const { height } = useElementRect(targetRef)

  return (
    <div className="shadow-2xl">
      <div
        id="template"
        ref={targetRef}
        className="relative w-full overflow-hidden bg-cover bg-center"
        style={{ paddingBottom: `${ratio * 100}%` }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={backgroundURL}
          className="absolute inset-0 z-0 inline-block"
          alt="템플릿 배경 이미지"
        />
        {Array.from({ length: contentsLength }, (_, idx) => (
          <TemplateViewContent
            containerRatio={(ratio * 1000) / height}
            key={idx}
            mode={mode}
            index={idx}
          />
        ))}
      </div>
    </div>
  )
}

export default TemplateView
