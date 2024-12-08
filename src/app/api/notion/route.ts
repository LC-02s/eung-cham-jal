import { increaseCount } from '@/utils'
import { NextResponse } from 'next/server'

export async function POST() {
  await increaseCount()
  return NextResponse.json({ message: 'success' })
}
