import type { Metadata } from 'next'
import './globals.css'

import { Toaster } from '@/components/ui/sonner'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_DOMAIN || ''),
  title: '응원 참 잘하는 집 - 나만의 부적 메이커',
  description: '응원 참 잘하는 집과 함께 나만의 부적을 만들어 보세요!',
  openGraph: {
    type: 'website',
    siteName: '응원 참 잘하는 집',
    locale: 'ko_KR',
    images: '/img/og-image.png',
  },
  publisher: 'team. 오응완',
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-700 antialiased">
        <div className="mx-auto h-auto w-full min-w-[280px] max-w-[33.75rem] bg-white">
          {children}
        </div>
        <Toaster position="top-center" />
      </body>
    </html>
  )
}
