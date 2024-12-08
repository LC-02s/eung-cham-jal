'use client'

import { useRef } from 'react'

import Link from 'next/link'
import html2canvas from 'html2canvas'
import { useNameStore } from '@/store'
import { toast } from 'sonner'

import { Button } from '@/components/ui'
import { TemplateView } from '@/components'
import { downloadImage, increaseCount } from '@/utils'

const Result = () => {
  const charmRef = useRef<HTMLDivElement>(null)

  const { name: storeName } = useNameStore()

  const getCharmImage = async (): Promise<string> => {
    if (!charmRef.current) {
      throw new Error('부적 이미지를 가져오는 중 오류가 발생했습니다')
    }
    const canvas = await html2canvas(charmRef.current)
    return canvas.toDataURL('image/png')
  }

  const handleSave = async () => {
    try {
      const image = await getCharmImage()
      await downloadImage(image)
      toast.success('이미지 저장 완료')
    } catch (error) {
      console.error(error)
      toast.error('이미지 저장 중 오류가 발생했습니다')
    }
  }

  const handleCopyLink = async () => {
    try {
      const image = await getCharmImage()
      if (image) {
        const encodedImage = encodeURIComponent(image)
        const sharedURL = `${process.env.NEXT_PUBLIC_DOMAIN}/charm/shared?image=${encodedImage}&name=${storeName}`
        await navigator.clipboard.writeText(sharedURL)
        toast.success('링크가 복사되었습니다.')
        await increaseCount()
      }
    } catch (error) {
      console.error(error)
      toast.error('링크 복사에 실패했습니다. 다시 시도해주세요.')
    }
  }

  return (
    <>
      <div className="flex h-[calc(100dvh-3.25rem-30rem)] w-[min(80vw,45vh)] flex-col items-center justify-center px-16 text-center">
        <div className="flex flex-col gap-2 break-keep text-3xl font-bold">
          {storeName}님의 부적이 완성되었어요!
        </div>

        <div ref={charmRef} className="mt-8 w-full">
          <TemplateView mode="view" />
        </div>
      </div>
      <div className="w-full space-y-4 px-6 py-20">
        <Button variant="custom" onClick={handleSave}>
          소장하기
        </Button>
        <Button variant="custom" onClick={handleCopyLink}>
          부적 링크 공유하기
        </Button>
        <Button variant="custom">
          <Link href="/template" title="하나 더 만들기">
            하나 더 만들기
          </Link>
        </Button>
      </div>
    </>
  )
}

export default Result
