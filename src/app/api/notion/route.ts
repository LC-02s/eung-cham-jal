import { NextResponse } from 'next/server'

import { Client, isFullPage } from '@notionhq/client'

const notionClient = new Client({
  auth: process.env.NEXT_PUBLIC_NOTION_API_KEY,
})

async function getCount() {
  const response = await notionClient.pages.retrieve({
    page_id: process.env.NEXT_PUBLIC_NOTION_PAGE_ID || '',
  })

  if (isFullPage(response)) {
    const titleProperty = response.properties.title
    if (titleProperty && titleProperty.type === 'title') {
      return Number(titleProperty.title[0].plain_text)
    } else {
      throw new Error('Title property not found or is of incorrect type')
    }
  } else {
    throw new Error('Page properties not found')
  }
}

async function increaseCount() {
  const viewCount = (await getCount()) || 0
  return await notionClient.pages.update({
    page_id: process.env.NEXT_PUBLIC_NOTION_PAGE_ID || '',
    properties: {
      title: {
        title: [
          {
            type: 'text',
            text: {
              content: String(viewCount + 1),
            },
          },
        ],
      },
    },
  })
}

export async function GET() {
  return NextResponse.json({ count: await getCount() })
}

export async function POST() {
  await increaseCount()
  return NextResponse.json({ message: 'success' })
}
