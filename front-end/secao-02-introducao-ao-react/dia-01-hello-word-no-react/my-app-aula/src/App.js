import './App.css'; // como importamos css no React
import Card from './components/Card';
import Hello from './components/Hello';

function App() {

  // Aqui é JS
  
  // console.log(names.map((person) => (
  //   <li>Hello {person}</li>
  // )))

  // Aqui é o JSX
  return (
    <main className="container">
      <Hello />

      <Card />
      <Card />
      <Card />

    </main>
  );
}

// React é uma biblioteca
// serve para criar interfaces
// ele cria componentes com JSX para criar a interface

// todo componente no React é letra maiúscula

// dentro do componente React temos o JSX (que parece com html)
// .js e .jsx é a mesma coisa
// para colocar codigo JS no JSX usamos o { aquiVariavel }
// 2 formas de criar os componentes: função e outra com classes

export default App;
