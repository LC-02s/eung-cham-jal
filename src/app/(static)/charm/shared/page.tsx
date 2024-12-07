'use client'

import Link from 'next/link'
import Image from 'next/image'

import { Button } from '@/components/ui'
import { useSearchParams } from 'next/navigation'
import { toast } from 'sonner'
import { downloadImage } from '@/utils'

const Shared = () => {
  const searchParams = useSearchParams()
  const image = searchParams.get('image')
  const name = searchParams.get('name')

  const handleDownload = async () => {
    if (!image) {
      toast.error('이미지가 없습니다.')
      return
    }
    try {
      await downloadImage(decodeURIComponent(image), 'shared-charm.png')
      toast.success('이미지가 다운로드되었습니다.')
    } catch (error) {
      console.error(error)
      toast.error('이미지 다운로드 중 오류가 발생했습니다.')
    }
  }
  return (
    <>
      <div className="flex w-full flex-1 flex-col items-center justify-center px-16 text-center">
        <div className="flex flex-col gap-2 text-3xl font-bold">{name}님이 공유하신 부적이에요</div>
        <div className="mt-8">
          {image && <Image src={decodeURIComponent(image)} alt="부적" width={350} height={450} />}
        </div>
      </div>
      <div className="w-full space-y-4 px-6 py-20">
        <Button variant="custom">
          <Link href="/name" title="나도 만들어보기">
            나도 만들어보기
          </Link>
        </Button>
        <Button variant="custom" title="소장하기" onClick={handleDownload}>
          소장하기
        </Button>
      </div>
    </>
  )
}

export default Shared
