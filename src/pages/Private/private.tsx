import { useContext } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";

export const Private = () => {
  const auth = useContext(AuthContext);

  return (
    <div>
      <h1>Página Provada</h1>
      Olá, {auth.user?.name}! Você acessou a área privada após login.
    </div>
  );
}