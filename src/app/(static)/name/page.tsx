'use client'

import { useRef, useState, useEffect } from 'react'

import { Button, Input } from '@/components/ui'
import { getRandomName } from '@/utils'
import { useNameStore } from '@/store'
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'

const TypingNamePage = () => {
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
      <div className="flex w-full flex-1 flex-col items-center justify-center text-center">
        <p className="block w-full px-9 text-center text-2xl font-bold !leading-relaxed md:text-3xl">
          이름(닉네임)이 <br />
          무엇인가요?
        </p>
        <div className="mt-12 flex w-full flex-col items-center justify-center px-9">
          <Input
            ref={inputRef}
            type="text"
            className={cn(
              'w-4/5 min-w-60 text-center',
              !stateName && 'border-red-500 shadow-red-500 focus:shadow-red-500',
            )}
            value={stateName}
            onChange={handleInputChange}
          />
          {!stateName ? (
            <p className="weight-semibold mt-8 break-keep text-center text-base text-red-500 md:text-lg">
              이름을 입력해주세요
            </p>
          ) : (
            <p className="weight-semibold mt-8 break-keep text-center text-base text-gray-600 md:text-lg">
              이름을 입력하지 않으면 랜덤네임으로{' '}
              <span className="whitespace-nowrap">시작해요 :)</span>
            </p>
          )}
        </div>
      </div>
      <div className="w-full px-6 py-[8dvh]">
        <Button variant="custom" onClick={handleClick}>
          다음으로
        </Button>
      </div>
    </>
  )
}

export default TypingNamePage
