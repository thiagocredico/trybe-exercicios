import { useMemo, useState } from 'react';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const handleChangeTheme = () => {
    setIsDarkTheme((prevState) => !prevState);
  };

  const values = useMemo(() => ({
    isDarkTheme,
    handleChangeTheme,
  }), [isDarkTheme]);

  return (
    <AppContext.Provider value={ values }>
      { children }
    </AppContext.Provider>
  );
}

export default AppProvider;
