import React, { useContext, createContext, useState, useEffect } from 'react';
import { HeisenbergDM } from '../core/types';
import { IDados, IUser } from '../models';
import { DMBDSTORE_TOKEN, DMBDSTORE_USER } from '../core';
import { DadosService } from '../services/others';

const HDMContext = createContext<HeisenbergDM>({} as HeisenbergDM);

type Props = {
  children?: React.ReactNode;
};
export const HDMProvider: React.FC<Props> = ({ children }) => {
  const [usuario, setUsuario] = useState<IUser>({} as IUser);
  const [token, setToken] = useState<string>('');
  const [dados, setDados] = useState<IDados[]>([])

  useEffect(() => {
    async function loadUsuario() {
      const userData = await localStorage.getItem(DMBDSTORE_USER);
      const user: IUser = userData ? JSON.parse(userData) : undefined;

      const storedToken = await localStorage.getItem(DMBDSTORE_TOKEN);

      if (user?.id && storedToken) {
        setUsuario(user);
        setToken(storedToken);
      }
    }
    loadUsuario();
  }, []);

  const PegarDados = async (nomeTabela: string): Promise<IDados[]> => {
    const result = await DadosService(nomeTabela)
    setDados(result)
    return result
  }

  return (
    <HDMContext.Provider
      value={{
        usuario,
        token,
        dados,
        setDados,
        PegarDados,
        setUsuario,
        setToken,
      }}
    >
      {children}
    </HDMContext.Provider>
  );
};

export const useGlobalHDMContext = () => {
  const hDMContext = useContext(HDMContext);
  return hDMContext;
};
