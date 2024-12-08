import Image from 'next/image'
import Link from 'next/link'
import { EFJejudoldam } from './fonts'
import { BackButton, Button } from '@/components'
import { cn } from '@/lib/utils'

const NotFound = () => {
  return (
    <div className="relative flex min-h-[100vh] w-full flex-col items-center justify-end">
      <div className="flex w-full flex-1 flex-col items-center justify-center px-6 pb-12 pt-20">
        <Image src="/img/not-found.png" alt="우는 이미지" width={240} height={240} priority />
        <p
          className={cn(
            'break-keep text-center text-5xl font-black leading-normal',
            EFJejudoldam.className,
          )}
        >
          페이지를 <span className="whitespace-nowrap">찾을 수</span> <br />
          없어요 ㅠ
        </p>
      </div>
      <div className="w-full px-6 py-20">
        <Button variant="custom" asChild>
          <Link href="/" title="메인으로 돌아가기">
            메인으로 돌아가기
          </Link>
        </Button>
        <BackButton />
      </div>
    </div>
  )
}

export default NotFound
