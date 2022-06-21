
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/index';
import { Private } from './pages/Private/index';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/private" element={<Private />} />
    </Routes>
  );
}
