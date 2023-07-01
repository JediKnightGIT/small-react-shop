import './scss/app.scss';
import Home from './pages/Home';
import { NotFound } from './pages/NotFound';
import { Route, Routes } from 'react-router-dom';
import { Cart } from './pages/Cart';
import Game from './pages/Game';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="game/:id" element={<Game />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;