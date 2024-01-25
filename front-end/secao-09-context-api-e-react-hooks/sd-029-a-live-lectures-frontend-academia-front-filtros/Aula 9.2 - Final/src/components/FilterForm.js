import React, { useContext } from 'react';
import { FilterContext } from '../context/FilterProvider';

function FilterForm() {
  const {
    name,
    setName,
    languages,
    selectedLanguages,
    handleSelectedLanguages,
    handleDeleteLanguage,
  } = useContext(FilterContext);

  const filteredLanguages = languages.filter((language) => (
    !selectedLanguages.includes(language)
  ));

  return (
    <section>
      <h2>Filtros</h2>
      <div>
        <input
          type="text"
          value={ name }
          onChange={ (e) => setName(e.target.value) }
        />
      </div>
      <div>
        <select onChange={ handleSelectedLanguages }>
          <option value="">
            Todos
          </option>
          {filteredLanguages.map((language) => (
            <option key={ language } value={ language }>
              {language}
            </option>
          ))}
        </select>
      </div>

      <div>
        {selectedLanguages.map((language) => (
          <button
            key={ language }
            type="button"
            onClick={ () => handleDeleteLanguage(language) }
          >
            {language}
          </button>
        ))}
      </div>
    </section>
  );
}

export default FilterForm;
