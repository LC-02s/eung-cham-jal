import { ADJECTIVES, ANIMALS, ADJECTIVES_COUNT, ANIMALS_COUNT } from '@/constants'

export const formatNumber = (number: number) => {
  return new Intl.NumberFormat('ko-KR').format(number)
}

const getRandomNumberInRange = (max: number) => {
  return Math.floor(Math.random() * max)
}

export const getRandomName = () => {
  const adjective = ADJECTIVES[getRandomNumberInRange(ADJECTIVES_COUNT)]
  const animal = ANIMALS[getRandomNumberInRange(ANIMALS_COUNT)]

  return [adjective, animal].join(' ')
}

export const downloadImage = async (imageData: string, fileName: string = 'charm.png') => {
  try {
    const link = document.createElement('a')
    link.href = imageData
    link.download = fileName
    link.click()
  } catch (error) {
    console.error(error)
  }
}
