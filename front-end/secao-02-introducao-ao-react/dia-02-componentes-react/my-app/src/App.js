import './App.css';
import CardList from './components/CardList';
import Title from './components/Title';

// temos um array de objetos que é o videoGames
// pra cada game de videoGames nos voltamos um <Card />

function App() {
  return (
    <main className="container">
      <Title text="Os Meus Jogos Favoritos" />

      <CardList />
    </main>
  );
}

export default App;
