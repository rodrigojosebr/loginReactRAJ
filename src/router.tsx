
import { Route, Routes } from 'react-router-dom';
import { RequireAuth } from './contexts/Auth/RequireAuth';
import { Home } from './pages/Home/index';
import { Private } from './pages/Private/private';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/private" element={<RequireAuth><Private /></RequireAuth>} />
    </Routes>
  );
}
