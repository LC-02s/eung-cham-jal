import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface NameState {
  name: string
  setName: (name: string) => void
}

export const useNameStore = create(
  persist<NameState>(
    (set) => ({
      name: '',
      setName: (name) => set({ name }),
    }),
    {
      name: 'name',
    },
  ),
)
export * from './templateStore'
