import { NextResponse } from 'next/server'

import { Client, isFullPage } from '@notionhq/client'

async function getCount() {
  const notionClient = new Client({
    auth: process.env.NEXT_PUBLIC_NOTION_API_KEY,
  })

  const response = await notionClient.pages.retrieve({
    page_id: process.env.NEXT_PUBLIC_NOTION_PAGE_ID || '',
  })

  if (isFullPage(response)) {
    const titleProperty = response.properties.title
    if (titleProperty && titleProperty.type === 'title') {
      return { count: Number(titleProperty.title[0].plain_text), notionClient }
    } else {
      throw new Error('Title property not found or is of incorrect type')
    }
  } else {
    throw new Error('Page properties not found')
  }
}

async function increaseCount() {
  const { count, notionClient } = (await getCount()) || 0
  return await notionClient.pages.update({
    page_id: process.env.NEXT_PUBLIC_NOTION_PAGE_ID || '',
    properties: {
      title: {
        title: [
          {
            type: 'text',
            text: {
              content: String(count + 1),
            },
          },
        ],
      },
    },
  })
}

export async function GET() {
  try {
    const { count } = await getCount()

    return NextResponse.json({ count })
  } catch {
    return NextResponse.json({ count: 0 }, { status: 500 })
  }
}

export async function POST() {
  try {
    await increaseCount()

    return NextResponse.json({ message: 'success' })
  } catch {
    return NextResponse.json({ message: 'failed' }, { status: 500 })
  }
}
