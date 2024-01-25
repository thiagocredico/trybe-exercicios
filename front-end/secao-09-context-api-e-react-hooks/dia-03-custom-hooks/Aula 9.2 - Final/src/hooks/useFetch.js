import { useState } from 'react';

function useFetch() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (url) => {
    try {
      setIsLoading(true);
      const data = await fetch(url);
      if (!data.ok) {
        const newError = await data.json();
        throw new Error(newError.message);
      }
      const sucess = await data.json();
      return sucess;
    } catch (e) {
      setError(e);
      throw new Error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return { fetchData, error, isLoading };
}

export default useFetch;
