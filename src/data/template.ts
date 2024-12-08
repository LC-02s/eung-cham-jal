import type { Template } from '@/types'

const TEMPLATES: Template[] = [
  {
    id: 'type-1',
    ratio: 1.4,
    contents: [
      {
        id: 'content-1',
        text: '원하는 게 뭐든 \n다 이루어지는 부적!',
        fontId: 'YoonChildfundkoreaDaeHan',
        fontWeight: 400,
        fontSize: 86,
        props: {
          className:
            'left-[54%] top-[32%] max-w-[60%] text-[#633200] w-full -translate-y-1/2 -translate-x-1/2 break-keep',
        },
      },
    ],
    imageURL: '/img/template-1.png',
    backgroundURL: '/img/template-1-cover.png',
  },
  {
    id: 'type-2',
    ratio: 1.4,
    contents: [
      {
        id: 'content-1',
        text: '가지고 있으면',
        fontId: 'PyeongChangPeace',
        fontWeight: 700,
        fontSize: 60,
        props: {
          className:
            'left-1/2 -translate-x-1/2 w-fit whitespace-nowrap text-[#7F0E0E] top-[24%] rotate-180',
          style: { letterSpacing: '0.42em' },
        },
      },
      {
        id: 'content-2',
        text: '합격\n기원',
        fontId: 'HakgyoansimGureum',
        fontWeight: 400,
        fontSize: 160,
        props: {
          className:
            'top-1/2 left-1/2 -translate-x-1/2 text-[#7F0E0E] w-fit whitespace-nowrap leading-tight -translate-y-1/2',
        },
      },
      {
        id: 'content-3',
        text: '무적권 합격함',
        fontId: 'PyeongChangPeace',
        fontWeight: 700,
        fontSize: 60,
        props: {
          className:
            'left-1/2 -translate-x-1/2 bottom-[24%] w-fit whitespace-nowrap text-[#7F0E0E]',
          style: { letterSpacing: '0.42em' },
        },
      },
    ],
    imageURL: '/img/template-2.png',
    backgroundURL: '/img/template-2-cover.png',
  },
  {
    id: 'type-3',
    ratio: 1.4,
    contents: [
      {
        id: 'content-1',
        text: '행 운 만 땅',
        fontId: 'PyeongChangPeace',
        fontWeight: 700,
        fontSize: 120,
        props: {
          className: 'left-1/2 -translate-x-1/2 top-[6%] w-fit whitespace-nowrap text-[#023802]',
          style: { letterSpacing: '0.3em' },
        },
      },
      {
        id: 'content-2',
        text: '만 능 부 적',
        fontId: 'PyeongChangPeace',
        fontWeight: 700,
        fontSize: 120,
        props: {
          className: 'right-1/2 bottom-[6%] translate-x-1/2 w-fit whitespace-nowrap text-[#023802]',
          style: { letterSpacing: '0.3em' },
        },
      },
    ],
    imageURL: '/img/template-3.png',
    backgroundURL: '/img/template-3-cover.png',
  },
]

export default TEMPLATES
