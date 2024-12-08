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
    title: `${decodedName}님이 공유하신 부적이에요 - 응원 참 잘하는 집`,
    description: `${decodedName}님이 만든 특별한 부적이 도착했어요!`,
    openGraph: {
      type: 'website',
      title: `${decodedName}님의 부적 - 응원 참 잘하는 집`,
      description: `${decodedName}님이 만든 특별한 부적이 도착했어요!`,
      siteName: '응원 참 잘하는 집',
      locale: 'ko_KR',
      images: '/img/og-image.png',
    },
  }
}

const SharedPage = ({ searchParams }: SharedProps) => {
  const { image, name: userName } = searchParams

  if (!image || !userName) {
    notFound()
  }

  return (
    <>
      <div className="flex w-full flex-1 flex-col items-center justify-center pt-[5vh]">
        <p className="mb-[3vh] w-full break-keep px-6 text-center text-lg font-bold !leading-normal sm:text-xl md:text-2xl">
          {userName}님이 <br />
          공유하신 부적이에요!
        </p>
        <div className="w-4/5">
          <SharedTemplateView image={image} />
        </div>
      </div>
      <div className="w-full space-y-4 px-6 pb-[8vh] pt-[8vh]">
        <Button variant="custom" asChild>
          <Link href="/name" title="나도 만들어보기">
            나도 만들어보기
          </Link>
        </Button>
        <DownloadButton />
      </div>
    </>
  )
}

export default SharedPage
