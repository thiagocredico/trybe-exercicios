/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import FilterRepos from '../components/FilterRepos';
import '../styles/Home.css';
import { AuthContext } from '../context/AuthProvider';

function Home() {
  const { gitData, isLoading } = useContext(AuthContext);

  const history = useHistory();

  if (!isLoading && !gitData) {
    history.push('/');
    return null;
  }

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
          <FilterRepos />
        </>
      )}

    </div>
  );
}

export default Home;
