'use client'

import { Client, isFullPage } from '@notionhq/client'

export async function getCount() {
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

export async function increaseCount() {
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
