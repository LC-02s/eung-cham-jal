import Navigation from '@/components/navigation'

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <Navigation />
      <div className="relative flex min-h-[calc(100dvh-3.25rem)] flex-col items-center justify-end overflow-hidden">
        {children}
      </div>
    </>
  )
}

export default Layout
