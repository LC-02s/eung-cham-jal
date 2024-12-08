import { formatNumber } from '@/utils'
import { getCount } from '@/utils'

const ViewCount = async () => {
  const count = await getCount()

  return (
    <p className="mt-12 break-keep text-center text-lg font-medium">
      {formatNumber(count)}번째 부적을 공유해주세요!
    </p>
  )
}

export default ViewCount
