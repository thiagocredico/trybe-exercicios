import { type ReactNode, createContext, useMemo } from 'react'

import useLocalizations from '@/hooks/useGetLocalizations'

export interface LocalizationProps {
  cities: string[]
  states: string[]
  selectedCity: string
  selectedState: string
  isFetching: boolean
  handleSelectState: (state: string) => void
  handleSelectCity: (city: string) => void
}

export const LocalizationContext = createContext({} as LocalizationProps)

const LocalizationProvider = ({ children }: { children: ReactNode }) => {
  const {
    cities, states,
    selectedCity, selectedState,
    handleSelectState, handleSelectCity, isFetching
  } = useLocalizations()

  const values = useMemo(() => ({
    cities,
    states,
    isFetching,
    selectedCity,
    selectedState,
    handleSelectState,
    handleSelectCity
  }), [cities, states, selectedCity, isFetching, selectedState, handleSelectState, handleSelectCity])

  return (
    <LocalizationContext.Provider value={values}>
      {children}
    </LocalizationContext.Provider>
  )
}

export default LocalizationProvider
