import React, { useEffect, useState } from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';

function Home({ gitData, setGitData }) {
  const [gitRepos, setGitRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // componentDidMount
  useEffect(() => {
    console.log('Fui chamado no componentDidMount, sem Return');
  }, []);

  // componentDidUpdate
  useEffect(() => {
    console.log('Fui chamado no componentDidUpdate');
  });

  // componentWillUnmount
  useEffect(() => {
    console.log('Fui chamado no componentDidMount, com Return');
    return () => {
      console.log('Fui chamado no componentWillUnmount');
      // Vai quebrar pois ao fazer o rerender o gitData é null
      // setGitData(null);
    };
  }, [setGitData]);

  const fetchRepos = async (url) => {
    setIsLoading(true);

    try {
      const response = await fetch(url);
      if (!response.ok) {
        const newError = await data.json();
        throw newError.message;
      }

      const results = await response.json();

      setGitRepos(results);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRepos(gitData.repos_url);
  }, [gitData]);

  return (

    <div className="Home">
      <div className="App__Menu">
        <div className="App__ContentMenuItems">
          <img
            className="App__UserPhoto"
            src={ gitData.avatar_url }
            alt={ `Imagem do usuário ${gitData.name}` }
          />
          <h3>{gitData.name}</h3>
          {' '}
          <Link to="/">
            (
            {' '}
            Logout
            {' '}
            )
          </Link>

        </div>
      </div>
      {isLoading && <h2>Carregando ...</h2>}

      <h1>Repositórios</h1>
      {
        gitRepos.map((repo) => (
          <div key={ repo.id } className="repo">
            <p>{repo.name}</p>
            <p>{repo.html_url}</p>
          </div>
        ))
      }
    </div>
  );
}

export default Home;
