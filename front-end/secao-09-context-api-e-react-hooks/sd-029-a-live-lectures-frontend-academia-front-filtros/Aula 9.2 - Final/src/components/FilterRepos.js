import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { FilterContext } from '../context/FilterProvider';
import FilterForm from './FilterForm';

function FilterRepos() {
  const { gitRepos } = useContext(AuthContext);
  const { name, selectedLanguages } = useContext(FilterContext);

  const filteredReposName = gitRepos
    .filter((repo) => repo.name.includes(name));

  let filteredRepos = filteredReposName;

  if (selectedLanguages.length > 0) {
    filteredRepos = filteredRepos.filter((repo) => (
      selectedLanguages.includes(repo.language)
    ));
  }

  return (
    <>
      <FilterForm />

      <h3>{`Mostrando ${filteredRepos.length} repositórios` }</h3>
      <ul className="repos">
        {
          filteredRepos.map((repo) => (
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
