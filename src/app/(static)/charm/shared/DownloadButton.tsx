'use client'

import { Button } from '@/components/ui'
import { toast } from 'sonner'
import { downloadImage } from '@/utils'

interface DownloadButtonProps {
  image: string
}

const DownloadButton = ({ image }: DownloadButtonProps) => {
  const handleDownload = async () => {
    try {
      await downloadImage(decodeURIComponent(image), 'shared-charm.png')
      toast.success('이미지가 다운로드되었습니다.')
    } catch (error) {
      console.error(error)
      toast.error('이미지 다운로드 중 오류가 발생했습니다.')
    }
  }

  return (
    <Button variant="custom" title="소장하기" onClick={handleDownload}>
      소장하기
    </Button>
  )
}

export default DownloadButton
