import './App.css';
import Card from './components/Card';
import Hello from './components/Hello';

function App() {
  return (
    <main className="container">
      <Hello />
      <Card />
      <Card />
    </main>
  );
}

export default App;