'use client'

import React from 'react'
import { notFound } from 'next/navigation'
import type { Template } from '@/types'
import { TEMPLATES } from '@/data'
import { useInitTemplate } from '@/store'
import { TemplateView } from '@/components'
import TemplateForm from './TemplateForm'

interface EditPageProps {
  params: { templateId: Template['id'] }
}

const EditPage = ({ params: { templateId } }: EditPageProps) => {
  const initTemplate = useInitTemplate()

  React.useEffect(() => {
    const template = TEMPLATES.find(({ id }) => id === templateId)

    if (!template) {
      notFound()
    }

    initTemplate(template)
  }, [templateId, initTemplate])

  return (
    <div className="w-full flex-1">
      <div className="flex w-full items-center justify-center bg-gray-100 p-8">
        <div className="w-4/5">
          <TemplateView mode="modify" />
        </div>
      </div>
      <TemplateForm />
    </div>
  )
}

export default EditPage
