'use client'

import { useState } from 'react'

import { Button, Input } from '@/components/ui'
import { getRandomName } from '@/utils'
import { useNameStore } from '@/store'
import { useRouter } from 'next/navigation'

const Name = () => {
  const router = useRouter()
  const { setName: setStoreName } = useNameStore()
  const [stateName, setStateName] = useState(getRandomName())
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStateName(e.target.value)
  }

  const handleClick = () => {
    setStoreName(stateName)
    router.push('/template')
  }
  return (
    <>
      <div className="flex w-full flex-1 flex-col items-center justify-center px-16 text-center">
        <div className="flex flex-col gap-2 text-3xl font-bold">
          <span>이름(닉네임)이</span>
          <span>무엇인가요?</span>
        </div>
        <div className="mt-12 w-full">
          <Input
            type="text"
            className="text-center"
            value={stateName}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="w-full px-6 py-20">
        <Button variant="custom" onClick={handleClick}>
          다음으로
        </Button>
      </div>
    </>
  )
}

export default Name
