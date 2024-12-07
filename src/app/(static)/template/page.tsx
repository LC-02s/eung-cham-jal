'use client'

import React from 'react'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCards } from 'swiper/modules'
import { Button, Input } from '@/components/ui'

import 'swiper/css'
import 'swiper/css/effect-cards'

import { TEMPLATES } from '@/data'

const Template = () => {
  const [activeId, setActiveId] = React.useState(TEMPLATES[0].id)

  return (
    <>
      <div className="flex h-[calc(100dvh-3.25rem-14rem)] w-full flex-col items-center justify-center">
        <p className="w-full break-keep px-6 pb-20 text-center text-xl font-bold">
          부적 템플릿을 선택해주세요
        </p>
        <div className="relative flex min-h-[calc(100%-20rem)] w-full items-center justify-center">
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper relative w-[min(64vw,32vh)]"
            onSlideChange={(swiper) => {
              setActiveId(TEMPLATES[swiper.activeIndex].id)
            }}
          >
            {TEMPLATES.map((v) => (
              <SwiperSlide key={v.id} className="w-full overflow-hidden rounded-2xl pb-[140%]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${v.src})` }}
                >
                  {v.title}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="w-full px-6 py-20">
        <Button variant="custom" asChild>
          <Link href={`/edit/${activeId}`} title="선택하기">
            선택하기
          </Link>
        </Button>
      </div>
    </>
  )
}

export default Template
