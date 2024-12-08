import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

import { Button } from '@/components/ui'
import DownloadButton from './DownloadButton'

interface SharedProps {
  searchParams: { image?: string; name?: string }
}

const SharedPage = ({ searchParams }: SharedProps) => {
  const { image, name } = searchParams

  if (!image || !name) {
    notFound()
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
        <Button variant="custom" asChild>
          <Link href="/name" title="나도 만들어보기">
            나도 만들어보기
          </Link>
        </Button>
        <DownloadButton image={image} />
      </div>
    </>
  )
}

export default SharedPage
