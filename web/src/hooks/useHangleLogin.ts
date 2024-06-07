import { useNavigate } from "react-router";
import { loginService } from "../services";
import { useGlobalHDMContext } from "../contexts/HDMContext";
import { useState } from "react";

export const useHandleLogin = () => {
  const navigate = useNavigate();
  const { setUsuario } = useGlobalHDMContext();
  const [login, setLogin] = useState<string>('');
  const [senha, setSenha] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  async function handleLogin(event?: React.FormEvent<HTMLFormElement>) {
    event?.preventDefault();
    setLoading(true);
    const data = await loginService(login, senha, setUsuario);
    setLoading(false);

    if (data.usuario) navigate('/');
    else alert(data);
  }

  return { login, setLogin, senha, setSenha, handleLogin, navigate, loading };
};
