import Navigation from '@/components/navigation'

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="flex min-h-dvh w-full flex-col items-stretch justify-start">
      <Navigation />
      <div className="relative flex flex-1 flex-col items-center justify-end overflow-hidden">
        {children}
      </div>
    </div>
  )
}

export default Layout
