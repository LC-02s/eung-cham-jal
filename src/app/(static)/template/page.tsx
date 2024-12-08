'use client'

import React from 'react'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCards } from 'swiper/modules'
import { Button } from '@/components/ui'

import 'swiper/css'
import 'swiper/css/effect-cards'

import { TEMPLATES } from '@/data'

const SelectTemplatePage = () => {
  const [activeId, setActiveId] = React.useState(TEMPLATES[0].id)

  return (
    <>
      <div className="flex w-full flex-1 flex-col items-center justify-center pt-[5vh]">
        <p className="mb-[8vh] w-full break-keep px-6 text-center text-xl font-bold !leading-normal sm:text-2xl md:text-3xl">
          부적 템플릿을 <br />
          선택해주세요
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
            {TEMPLATES.map(({ id, imageURL, ratio }) => (
              <SwiperSlide
                key={id}
                className="w-full overflow-hidden rounded-2xl"
                style={{ paddingBottom: `${ratio * 100}%` }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${imageURL})` }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="w-full px-6 py-[8vh]">
        <Button variant="custom" asChild>
          <Link href={`/edit/${activeId}`} title="선택하기">
            선택하기
          </Link>
        </Button>
      </div>
    </>
  )
}

export default SelectTemplatePage
