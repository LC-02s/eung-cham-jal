import { increaseCount } from '@/lib/notion'
import { NextResponse } from 'next/server'

export async function POST() {
  await increaseCount()
  return NextResponse.json({ message: 'success' })
}
