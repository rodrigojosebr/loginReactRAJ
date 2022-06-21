import { Link } from 'react-router-dom';
import './App.css';
import { Router } from './router';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Header</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/private">Página Privada</Link>
        </nav>
      </header>
      <hr />
      <Router />
    </div>
  );
}

export default App;
