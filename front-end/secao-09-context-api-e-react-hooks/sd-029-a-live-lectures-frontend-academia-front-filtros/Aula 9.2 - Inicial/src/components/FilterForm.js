import React, { useContext } from 'react';
import { FilterContext } from '../context/FilterProvider';

function FilterForm() {
  const {
    name, setName, languages, selectedLanguage, handleSelectedLanguage,
  } = useContext(FilterContext);

  // essa linha remove do select as linguagens que eu selecionei
  const languagesFiltered = languages.filter((lang) => (
    !selectedLanguage.includes(lang)
  ));

  return (
    <section>
      <div>
        <input
          type="text"
          value={ name }
          onChange={ (event) => setName(event.target.value) }
        />
      </div>
      <div>
        <select onChange={ handleSelectedLanguage }>
          <option>All</option>
          {languagesFiltered.map((lang) => (
            <option key={ lang } value={ lang }>
              {lang}
            </option>
          ))}
        </select>
      </div>

      <div>
        {selectedLanguage.map((lang) => (
          <button key={ lang } type="button">
            {lang}
          </button>
        ))}
      </div>
    </section>
  );
}

export default FilterForm;
