'use client'

import React from 'react'
import { useInitTemplateSnapshot } from '@/store'
import { TemplateView } from '@/components'

interface SharedTemplateViewProps {
  image: string
}

const SharedTemplateView = ({ image }: SharedTemplateViewProps) => {
  const initTemplate = useInitTemplateSnapshot()

  React.useEffect(() => initTemplate(image), [image, initTemplate])

  return (
    <div className="mt-8 w-full">
      <TemplateView mode="view" />
    </div>
  )
}

export default SharedTemplateView
