import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { FilterContext } from '../context/FilterProvider';
import FilterForm from './FilterForm';

/**
1 - criar o input
2 - controlar o input
3 - apliquei o filtro antes do return (boa pratica nao usar useEffect)
4 - mover as coisas para o Context
5 - leio do context o name do input
6 - crio o filtro de languagens
7 - preciso filtrar o repos pelas linguagens selecionadas
 */

function filteringByLang(selectedLanguage, gitReposFilteredByLanguage) {
  if (selectedLanguage.length > 0) {
    return gitReposFilteredByLanguage
      .filter((repo) => selectedLanguage.includes(repo.language));
  }
  return gitReposFilteredByLanguage;
}

function FilterRepos() {
  const { gitRepos } = useContext(AuthContext);
  const { name, selectedLanguage } = useContext(FilterContext);

  // filtrando por nomes
  const gitReposFilteredByName = gitRepos
    .filter((repo) => repo.name.toLowerCase().includes(name.toLowerCase()));

  // filtrando por linguagens
  // let gitReposFilteredByLanguage = gitReposFilteredByName;
  // if (selectedLanguage.length > 0) {
  //   gitReposFilteredByLanguage = gitReposFilteredByLanguage
  //     .filter((repo) => selectedLanguage.includes(repo.language));
  // }

  const gitReposFiltered = filteringByLang(selectedLanguage, gitReposFilteredByName);

  return (
    <>
      <FilterForm />
      <h3>{`Mostrando ${gitReposFiltered.length} repositórios` }</h3>
      <ul className="repos">
        {
          gitReposFiltered.map((repo) => (
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
