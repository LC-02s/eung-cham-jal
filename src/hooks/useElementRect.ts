import React from 'react'
import { useIsomorphicLayoutEffect } from 'motion/react'

type ElementRect = Readonly<Omit<DOMRect, 'x' | 'y' | 'toJSON'>>

const defaultRect: ElementRect = Object.freeze({
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  width: 0,
  height: 0,
})

function getElementRect<T extends HTMLElement>(element?: T | null): ElementRect {
  return element?.getBoundingClientRect() ?? defaultRect
}

export default function useElementRect<T extends HTMLElement>(
  ref: React.MutableRefObject<T | null>,
  deps?: React.DependencyList,
): ElementRect {
  const [rect, setRect] = React.useState(getElementRect(ref.current))
  const handleResize = React.useCallback(() => {
    setRect(getElementRect(ref.current))
  }, [ref])

  useIsomorphicLayoutEffect(() => handleResize(), deps ?? [])

  React.useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [handleResize])

  return rect
}
