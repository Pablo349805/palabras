
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Portada from './components/Portada';
import Juego from './components/Juego';
import Final from './components/Final';
import Ganado from './components/Ganado';
import Provider from './contexto/Provider';

function App() {
  return (
    <Provider>
      <Routes>
        <Route path='/' element={<Portada />} />
        <Route path='juego/' element={<Juego />} />
        <Route path='final/' element={<Final />} />
        <Route path='ganar/' element={<Ganado />} />
      </Routes>
    </Provider>
  );
}

export default App;
