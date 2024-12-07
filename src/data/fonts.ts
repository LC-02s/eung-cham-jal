'use client'

import {
  Chab,
  Ddag,
  EFJejudoldam,
  HakgyoansimGureum,
  HakgyoansimTtwimteul,
  HakgyoansimPuzzle,
  PyeongChangPeace,
  YoonChildfundkoreaDaeHan,
  YoonChildfundkoreaManSeh,
  YoonChildfundkoreaMinGuk,
} from '@/app/fonts'
import type { Font, FontWeight } from '@/types'

export const FONTS: Font[] = [
  {
    id: 'Chab',
    name: '롯데리아 촵땡겨체',
    weight: [400],
    className: Chab.className,
  },
  {
    id: 'Ddag',
    name: '롯데리아 딱붙어체',
    weight: [400],
    className: Ddag.className,
  },
  {
    id: 'EFJejudoldam',
    name: '제주돌담체',
    weight: [400],
    className: EFJejudoldam.className,
  },
  {
    id: 'HakgyoansimGureum',
    name: '학교안심 구름',
    weight: [400],
    className: HakgyoansimGureum.className,
  },
  {
    id: 'HakgyoansimTtwimteul',
    name: '학교안심 뜀틀',
    weight: [400],
    className: HakgyoansimTtwimteul.className,
  },
  {
    id: 'HakgyoansimPuzzle',
    name: '학교안심 퍼즐',
    weight: [900],
    className: HakgyoansimPuzzle.className,
  },
  {
    id: 'PyeongChangPeace',
    name: '평창평화체',
    weight: [300, 700],
    className: PyeongChangPeace.className,
  },
  {
    id: 'YoonChildfundkoreaDaeHan',
    name: '윤초록우산어린이 대한',
    weight: [400],
    className: YoonChildfundkoreaDaeHan.className,
  },
  {
    id: 'YoonChildfundkoreaManSeh',
    name: '윤초록우산어린이 만세',
    weight: [400],
    className: YoonChildfundkoreaManSeh.className,
  },

  {
    id: 'YoonChildfundkoreaMinGuk',
    name: '윤초록우산어린이 민국',
    weight: [400],
    className: YoonChildfundkoreaMinGuk.className,
  },
]

export const fontDB: Map<Font['id'], Font> = FONTS.reduce((db, font) => {
  return db.set(font.id, font)
}, new Map())

export const fontWeightNames: Map<FontWeight, string> = new Map()
  .set(100, 'Thin')
  .set(200, 'ExtraLight')
  .set(300, 'light')
  .set(400, 'Regular')
  .set(500, 'Medium')
  .set(600, 'SemiBold')
  .set(700, 'Bold')
  .set(800, 'ExtraBold')
  .set(900, 'Black')
