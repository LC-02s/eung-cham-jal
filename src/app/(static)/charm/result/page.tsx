'use client'

import Link from 'next/link'
import html2canvas from 'html2canvas'
import { useNameStore, useSaveTemplateSnapshot } from '@/store'
import { toast } from 'sonner'

import { Button } from '@/components/ui'
import { TemplateView } from '@/components'
import { downloadImage } from '@/utils'

const Result = () => {
  const { name: userName } = useNameStore()
  const saveTemplateSnapshot = useSaveTemplateSnapshot()

  const getCharmImage = async (): Promise<string> => {
    const templateEl = document.getElementById('template')

    if (!templateEl) {
      throw new Error('부적 이미지를 가져오는 중 오류가 발생했습니다')
    }
    const canvas = await html2canvas(templateEl)
    return canvas.toDataURL('image/png')
  }

  const handleSave = async () => {
    try {
      const image = await getCharmImage()
      await downloadImage(image)
      toast.success('이미지 저장에 성공했어요!')
    } catch (error) {
      console.error(error)
      toast.error('이미지 저장 중 오류가 발생했어요 ㅠ')
    }
  }

  const handleCopyLink = async () => {
    try {
      const snapshot = saveTemplateSnapshot()
      const sharedURL = `${process.env.NEXT_PUBLIC_DOMAIN}/charm/shared?image=${snapshot}&name=${encodeURI(userName)}`
      await navigator.clipboard.writeText(sharedURL)
      toast.success('링크가 복사되었어요!')
    } catch (error) {
      console.error(error)
      toast.error('링크 복사에 실패했어요 ㅠ')
    }
  }

  return (
    <>
      <div className="flex w-full flex-1 flex-col items-center justify-center pt-[5vh]">
        <p className="mb-[3vh] w-full break-keep px-6 text-center text-lg font-bold !leading-normal sm:text-xl md:text-2xl">
          {userName}님의 <br />
          부적이 완성되었어요!
        </p>
        <div className="w-4/5">
          <TemplateView mode="view" />
        </div>
      </div>
      <div className="w-full space-y-4 px-6 pb-[8vh] pt-[8vh]">
        <Button variant="custom" onClick={handleSave}>
          소장하기
        </Button>
        <Button variant="custom" onClick={handleCopyLink}>
          부적 링크 공유하기
        </Button>
        <Button variant="custom" asChild>
          <Link href="/template" title="하나 더 만들기">
            하나 더 만들기
          </Link>
        </Button>
      </div>
    </>
  )
}

export default Result
