import { useContext } from 'react'

import { LocalizationContext, type LocalizationProps } from '@/contexts/localizationProvider'

const useLocalizationContext = (): LocalizationProps => {
  return useContext(LocalizationContext)
}

export default useLocalizationContext
