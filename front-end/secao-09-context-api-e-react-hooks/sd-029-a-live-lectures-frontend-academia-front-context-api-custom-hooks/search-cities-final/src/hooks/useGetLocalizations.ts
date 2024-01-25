import { useEffect, useState } from 'react'

const EndPointsUrls = {
  ALL_STATES: 'https://servicodados.ibge.gov.br/api/v1/localidades/estados',
  ALL_CITIES: 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/<@>/distritos'
}

interface StateProps {
  id: number
  sigla: string
  nome: string
  regiao: {
    id: number
    sigla: string
    nome: string
  }
}

interface CitiesProps {
  id: 350010505
  nome: string
}

const useLocalizations = () => {
  const [states, setStates] = useState<string[]>([])
  const [cities, setCities] = useState<string[]>([])
  const [selectedCity, setSelectedCity] = useState<string>('')
  const [selectedState, setSelectedState] = useState<string>('')
  const [isFetching, setIsFetching] = useState<boolean>(false)

  const handleSelectState = (state: string) => {
    setSelectedState(state)
  }

  const handleSelectCity = (city: string) => {
    setSelectedCity(city)
  }

  const fetchCitiesByState = async (state: string) => {
    setIsFetching(true)
    const responseData = await fetch(EndPointsUrls.ALL_CITIES.replace('<@>', state))
    const citiesList: CitiesProps[] = await responseData.json()
    const namesCities = citiesList.map((city) => city.nome)
    const citiesListOrdened = namesCities.sort((a, b) => a.localeCompare(b, 'pt', { sensitivity: 'accent' }))
    setCities(citiesListOrdened)
    handleSelectCity(citiesListOrdened[0])
    setIsFetching(false)
  }

  useEffect(() => {
    async function getStates () {
      setIsFetching(true)
      const responseData = await fetch(EndPointsUrls.ALL_STATES)
      const stateList: StateProps[] = await responseData.json()
      const namesStates = stateList.map((state) => state.sigla)
      const statesListOrdened = namesStates.sort((a, b) => a.localeCompare(b, 'pt', { sensitivity: 'accent' }))
      setStates(statesListOrdened)
      setSelectedState(statesListOrdened[0])
      setIsFetching(false)
    }
    getStates()
  }, [])

  useEffect(() => {
    if (selectedState) {
      fetchCitiesByState(selectedState)
    }
  }, [selectedState])

  return { states, selectedState, isFetching, cities, selectedCity, handleSelectState, handleSelectCity }
}

export default useLocalizations
