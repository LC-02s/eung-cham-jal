import { Button } from '@/components/ui'
import Image from 'next/image'
import Link from 'next/link'
import { ViewCount } from '@/components'

const Main = () => (
  <div className="flex min-h-[100vh] flex-col items-center justify-end">
    <div className="flex w-full flex-1 flex-col items-center justify-start bg-[url(/img/main-cover.png)] bg-cover bg-bottom bg-no-repeat pb-12 pt-[12vh]">
      <div className="mx-auto mb-[7vh] flex size-20 items-center justify-center rounded-3xl border-[3px] border-gray-700 bg-white sm:size-24 md:size-28">
        <Image
          src="/img/main-icon.png"
          alt="메인 아이콘"
          className="m-auto block w-4/5"
          width={80}
          height={80}
        />
      </div>
      <Image
        src="/img/main-title.png"
        className="mx-auto h-fit w-full max-w-[86%]"
        alt="응원 참 잘하는 집"
        width={412}
        height={68}
        priority
      />
    </div>
    <div className="w-full px-6 py-[8vh]">
      <Button variant="custom" asChild>
        <Link href="/name" title="시작하기">
          시작하기
        </Link>
      </Button>
      {/* @ts-expect-error Async Server Component */}
      <ViewCount />
    </div>
  </div>
)

export default Main
