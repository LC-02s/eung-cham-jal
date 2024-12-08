'use client'

import html2canvas from 'html2canvas'
import { toast } from 'sonner'
import { Button } from '@/components/ui'
import { downloadImage } from '@/utils'

interface DownloadButtonProps {
  image: string
}

const DownloadButton = ({ image }: DownloadButtonProps) => {
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

  return (
    <Button variant="custom" title="소장하기" onClick={handleSave}>
      소장하기
    </Button>
  )
}

export default DownloadButton
