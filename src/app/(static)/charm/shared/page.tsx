import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import SharedTemplateView from './SharedTemplateView'

import { Button } from '@/components/ui'
import DownloadButton from './DownloadButton'

interface SharedProps {
  searchParams: { image?: string; name?: string }
}

export async function generateMetadata({ searchParams }: SharedProps): Promise<Metadata> {
  const { name } = searchParams

  if (!name) {
    return {}
  }

  const decodedName = decodeURIComponent(name)

  return {
    title: `${decodedName}님의 부적 - 응원 참 잘하는 집`,
    description: `${decodedName}님이 만든 특별한 부적이 도착했습니다!`,
    openGraph: {
      title: `${decodedName}님의 부적 - 응원 참 잘하는 집`,
      description: `${decodedName}님이 만든 특별한 부적이 도착했습니다!`,
    },
  }
}

const SharedPage = ({ searchParams }: SharedProps) => {
  const { image, name } = searchParams

  if (!image || !name) {
    notFound()
  }

  return (
    <>
      <div className="flex h-[calc(100dvh-3.25rem-20rem)] w-[min(80vw,45vh)] flex-col items-center justify-center px-16 text-center">
        <div className="flex flex-col gap-2 break-keep text-3xl font-bold">
          {name}님의 부적이 완성되었어요!
        </div>

        <SharedTemplateView image={image} />
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
