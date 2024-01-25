/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FilterRepos from '../components/FilterRepos';
import '../styles/Home.css';

function Home({ gitData }) {
  const [isLoading, setIsLoading] = useState(false);
  const [gitRepos, setGitRepos] = useState([]);

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

  return (
    <div className="Home">
      {isLoading ? <h2>Carregando ...</h2> : (
        <>
          <div className="App__Menu">
            <div className="App__ContentMenuItems">
              <img
                className="App__UserPhoto"
                src={ gitData.avatar_url }
                alt={ `Imagem do usuário ${gitData.name}` }
              />
              <h3>{gitData.name}</h3>
              <Link to="/"> ( Logout ) </Link>
            </div>
          </div>
          <FilterRepos gitRepos={ gitRepos } />
        </>
      )}

    </div>
  );
}

export default Home;
