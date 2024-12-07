import Navigation from '@/components/navigation'

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <Navigation />
      {children}
    </>
  )
}

export default Layout
