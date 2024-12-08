'use client'

const IncreaseCountButton = () => {
  const handleIncreaseCount = async () => {
    try {
      await fetch('/api/notion', {
        method: 'POST',
      })
    } catch (error) {
      console.error('Failed to increase count:', error)
    }
  }

  return <button onClick={handleIncreaseCount}>조회수 증가</button>
}

export default IncreaseCountButton
