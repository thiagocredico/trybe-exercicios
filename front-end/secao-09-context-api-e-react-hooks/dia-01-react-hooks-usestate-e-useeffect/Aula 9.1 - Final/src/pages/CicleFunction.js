import React, { useEffect, useState } from 'react';

function LifeCicleFunction({ history }) {
  const [counter, setCounter] = useState(0);

  function handleClick() {
    setCounter(counter + 1);
  }

  // ComponentDidMount
  useEffect(() => {
    // É chamado sempre que o componente é montado
    console.log('Fui chamado no componentDidMount, sem Return');
  }, []);

  // ComponentDidUpdate
  useEffect(() => {
    // É chamado sempre que o componente é atualizado
    console.log('Fui chamado no componentDidUpdate');
  });

  // ComponenteWillUnmount
  useEffect(() => {
    console.log('Fui chamado no componentDidMount, com Return');
    return () => {
      // É chamado sempre que o componente é desmontado
      console.log('Fui chamado no componentWillUnmount');
    };
  }, []);

  return (
    <div>
      {console.log('render')}
      <button className="App__Button" type="button" onClick={ handleClick }>
        {`Clicou ${counter} vezes`}
      </button>
      <button className="App__Button" type="button" onClick={ () => history.push('/') }>
        Voltar
      </button>
    </div>
  );
}

export default LifeCicleFunction;
