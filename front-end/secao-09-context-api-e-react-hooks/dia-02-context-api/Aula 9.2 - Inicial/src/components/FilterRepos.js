import React from 'react';

function FilterRepos({ gitRepos }) {
  return (
    <>
      <h3>{`Mostrando ${gitRepos.length} repositórios` }</h3>
      <ul className="repos">
        {
          gitRepos.map((repo) => (
            <div key={ repo.id } className="repo">
              <p>{repo.name}</p>
              <p>{repo.html_url}</p>
            </div>
          ))
        }
      </ul>
    </>
  );
}

export default FilterRepos;
