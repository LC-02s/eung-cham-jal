export type FontWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900

export type FontId =
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
  id: FontId
  name: string
  weight: FontWeight[]
  className: string
}
