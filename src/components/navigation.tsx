'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Icon } from '@/components'
import { Button } from '@/components/ui/button'

const Navigation = () => {
  const { back } = useRouter()

  return (
    <div className="relative pt-[3.25rem]">
      <nav className="absolute inset-x-0 top-0 z-50 flex items-center justify-center border-b border-gray-100 px-12 py-2">
        <Button
          variant="ghost"
          type="button"
          title="뒤로가기"
          size="icon"
          className="absolute inset-y-2 left-2 h-auto w-9 [&_svg]:size-6"
          onClick={back}
        >
          <Icon.ArrowLeft />
        </Button>
        <Image src="/img/main-logo.png" alt="응참잘 로고" width={102} height={36} priority />
      </nav>
    </div>
  )
}

export default Navigation
