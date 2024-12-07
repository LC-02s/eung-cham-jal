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
import type { Font } from '@/types'

export const FONTS: Font[] = [
  {
    name: 'Chab',
    weight: [400],
    className: Chab.className,
  },
  {
    name: 'Ddag',
    weight: [400],
    className: Ddag.className,
  },
  {
    name: 'EFJejudoldam',
    weight: [400],
    className: EFJejudoldam.className,
  },
  {
    name: 'HakgyoansimGureum',
    weight: [400],
    className: HakgyoansimGureum.className,
  },
  {
    name: 'HakgyoansimTtwimteul',
    weight: [400],
    className: HakgyoansimTtwimteul.className,
  },
  {
    name: 'HakgyoansimPuzzle',
    weight: [900],
    className: HakgyoansimPuzzle.className,
  },
  {
    name: 'PyeongChangPeace',
    weight: [300, 700],
    className: PyeongChangPeace.className,
  },
  {
    name: 'YoonChildfundkoreaDaeHan',
    weight: [400],
    className: YoonChildfundkoreaDaeHan.className,
  },
  {
    name: 'YoonChildfundkoreaManSeh',
    weight: [400],
    className: YoonChildfundkoreaManSeh.className,
  },

  {
    name: 'YoonChildfundkoreaMinGuk',
    weight: [400],
    className: YoonChildfundkoreaMinGuk.className,
  },
]

export const fontDB = new Map(FONTS.map((font) => [font.name, font]))
