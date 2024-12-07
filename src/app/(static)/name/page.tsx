import { Button, Input } from '@/components/ui'
import Link from 'next/link'
import { getRandomId } from '@/utils'

const Name = () => {
  return (
    <>
      <div className="flex w-full flex-1 flex-col items-center justify-center px-16 text-center">
        <div className="flex flex-col gap-2 text-3xl font-bold">
          <span>이름(닉네임)이</span>
          <span>무엇인가요?</span>
        </div>
        <div className="mt-12 w-full">
          <Input type="text" className="text-center" value={getRandomId()} />
        </div>
      </div>

      <div className="w-full px-6 py-20">
        <Button variant="custom" asChild>
          <Link href="/template" title="다음으로">
            다음으로
          </Link>
        </Button>
      </div>
    </>
  )
}

export default Name
