import { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [error, setError] = useState(null);
  const [gitData, setGitData] = useState(null);
  const [gitRepos, setGitRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

  const fetchData = useCallback(async (username) => {
    try {
      setIsLoading(true);
      const data = await fetch(`https://api.github.com/users/${username}`);
      if (!data.ok) {
        const newError = await data.json();
        throw new Error(newError.message);
      }

      const success = await data.json();
      setGitData(success);
      history.push('/home');
    } catch (e) {
      setError(e);
      throw new Error(e);
    } finally {
      setIsLoading(false);
    }
  }, [history]);

  const fetchRepos = async (url) => {
    try {
      setIsLoading(true);

      const response = await fetch(url);

      if (!response.ok) {
        const newError = await data.json();
        throw new Error(newError.message);
      }

      const success = await response.json();

      setGitRepos(success);
    } catch (e) {
      setError(e);
      throw new Error(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (gitData) {
      fetchRepos(gitData.repos_url);
    }
  }, [gitData]);

  const values = useMemo(() => ({
    isLoading,
    error,
    gitRepos,
    gitData,
    fetchData,
  }), [isLoading, error, gitData, gitRepos, fetchData]);

  return (
    <AuthContext.Provider value={ values }>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
