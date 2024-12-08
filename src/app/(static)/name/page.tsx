'use client'

import { useRef, useState, useEffect } from 'react'

import { Button, Input } from '@/components/ui'
import { getRandomName } from '@/utils'
import { useNameStore } from '@/store'
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'

const Name = () => {
  const router = useRouter()
  const { setName: setStoreName } = useNameStore()
  const [stateName, setStateName] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStateName(e.target.value)
  }

  const handleClick = () => {
    if (stateName.trim() === '') {
      inputRef.current?.focus()
    } else {
      setStoreName(stateName)
      router.push('/template')
    }
  }

  useEffect(() => {
    setStateName(getRandomName())
    inputRef.current?.focus()
  }, [])

  return (
    <>
      <div className="flex w-full flex-1 flex-col items-center justify-center px-16 text-center">
        <div className="flex flex-col gap-2 text-3xl font-bold">
          <span>이름(닉네임)이</span>
          <span>무엇인가요?</span>
        </div>
        <div className="mt-12 w-full">
          <Input
            ref={inputRef}
            type="text"
            className={cn(
              'text-center',
              !stateName ? 'border-red-500 shadow-red-500 focus:shadow-red-500' : '',
            )}
            value={stateName}
            onChange={handleInputChange}
          />
          {!stateName ? (
            <p className="weight-semibold mt-4 text-red-500">이름을 입력해주세요</p>
          ) : (
            <p className="weight-semibold mt-4 text-gray-500">
              이름을 입력하지 않으면 랜덤네임으로 시작해요 :)
            </p>
          )}
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
