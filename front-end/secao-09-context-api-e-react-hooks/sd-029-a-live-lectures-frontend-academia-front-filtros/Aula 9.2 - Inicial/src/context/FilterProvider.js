import React, { createContext, useCallback, useMemo, useState } from 'react';

export const FilterContext = createContext();

const languages = [
  'Javascript',
  'Java',
  'C#',
  'Flutter',
  'NodeJs',
  'HTML',
  'CSS',
  'Dart',
  'Elixir',
  'React',
  'TypeScript',
];

function FilterProvider({ children }) {
  const [name, setName] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState([]);

  const handleSelectedLanguage = useCallback((e) => {
    setSelectedLanguage((prevState) => ([...prevState, e.target.value]));
  }, []);

  const values = useMemo(() => ({
    name,
    setName,
    languages,
    handleSelectedLanguage,
    selectedLanguage,
  }), [name, handleSelectedLanguage, selectedLanguage]);

  return (
    <FilterContext.Provider value={ values }>
      {children}
    </FilterContext.Provider>
  );
}

export default FilterProvider;
