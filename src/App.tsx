import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './App.css';
import { AuthContext } from './contexts/Auth/AuthContext';
import { Router } from './router';

function App() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignout = () => {
    auth.signout();
    window.location.href = window.location.href;
  }

  return (
    <div className="App">
      <header>
        <h1>Header</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/private">Página Privada</Link>
          {auth.user && <button onClick={handleSignout}>Sair</button>}
        </nav>
      </header>
      <hr />
      <Router />
    </div>
  );
}

export default App;
