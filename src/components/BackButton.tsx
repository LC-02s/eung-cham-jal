'use client'

import { useRouter } from 'next/navigation'
import React from 'react'
import { Button } from './ui'

const BackButton = () => {
  const { back } = useRouter()

  return (
    <Button variant="custom" title="이전으로 돌아가기" className="mt-6" onClick={back}>
      이전으로 돌아가기
    </Button>
  )
}

export default BackButton
