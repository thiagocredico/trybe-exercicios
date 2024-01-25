import { createContext, useCallback, useMemo, useState } from 'react';

export const FilterContext = createContext();

const languages = [
  'JavaScript',
  'HTML',
  'CSS',
  'TypeScript',
  'Java',
  'Python',
  'C#',
  'C++',
];

function FilterProvider({ children }) {
  const [name, setName] = useState('');
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  const handleSelectedLanguages = useCallback((e) => {
    setSelectedLanguages((previousLanguages) => [
      ...previousLanguages,
      e.target.value,
    ]);
  }, []);

  const handleDeleteLanguage = useCallback((language) => {
    setSelectedLanguages((previousLanguages) => previousLanguages.filter(
      (selectedLanguage) => selectedLanguage !== language,
    ));
  }, []);

  const values = useMemo(
    () => ({
      name,
      languages,
      selectedLanguages,
      handleSelectedLanguages,
      handleDeleteLanguage,
      setName,
    }),
    [
      name,
      setName,
      selectedLanguages,
      handleSelectedLanguages,
      handleDeleteLanguage,
    ],
  );

  return (
    <FilterContext.Provider value={ values }>{children}</FilterContext.Provider>
  );
}

export default FilterProvider;
