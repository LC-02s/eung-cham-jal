export type FontWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900

export type FontName =
  | 'Chab'
  | 'Ddag'
  | 'EFJejudoldam'
  | 'HakgyoansimGureum'
  | 'HakgyoansimTtwimteul'
  | 'HakgyoansimPuzzle'
  | 'PyeongChangPeace'
  | 'YoonChildfundkoreaDaeHan'
  | 'YoonChildfundkoreaManSeh'
  | 'YoonChildfundkoreaMinGuk'

export interface Font {
  name: FontName
  weight: FontWeight[]
  className: string
}
