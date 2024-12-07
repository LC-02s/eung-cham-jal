import { Icon } from '@/components'
import { Button } from '@/components/ui/button'

const Navigation = () => {
  return (
    <nav className="">
      <Button variant="ghost" type="button" title="뒤로가기" size="icon" className="">
        <Icon.ArrowLeft className="size-10" />
      </Button>
    </nav>
  )
}

export default Navigation
