import CardList from './components/CardList';
import Title from './components/Title';

function App() {
  return (
    <main className="container">
      <Title text="🎮 Os meus jogos favoritos" />
      <CardList />
    </main>
  );
}

export default App;
