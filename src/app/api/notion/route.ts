import { getCount, increaseCount } from '@/utils'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const count = await getCount()

    return NextResponse.json({ count })
  } catch {
    return NextResponse.json({ count: -1 }, { status: 500 })
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
