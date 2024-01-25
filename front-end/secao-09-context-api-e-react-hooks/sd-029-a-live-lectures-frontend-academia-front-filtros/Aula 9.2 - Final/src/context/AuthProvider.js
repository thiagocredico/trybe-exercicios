import { createContext, useCallback, useMemo, useState } from 'react';
import useFetch from '../hooks/useFetch';

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [gitData, setGitData] = useState(null);
  const [gitRepos, setGitRepos] = useState([]);

  const { error, isLoading, fetchData } = useFetch();

  const handleSignin = useCallback(async (user) => {
    const userData = await fetchData(`https://api.github.com/users/${user}`);
    const repos = await fetchData(userData.repos_url);
    setGitData(userData);
    setGitRepos(repos);
  }, [fetchData]);

  const values = useMemo(() => ({
    isLoading,
    error,
    gitRepos,
    gitData,
    handleSignin,
  }), [isLoading, error, gitData, gitRepos, handleSignin]);

  return (
    <AuthContext.Provider value={ values }>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
