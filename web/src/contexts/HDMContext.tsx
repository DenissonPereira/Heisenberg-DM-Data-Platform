import React, { useContext, createContext, useState, useEffect } from 'react';
import { HeisenbergDM } from '../core/types';
import { IMagnetization, IUser } from '../models';
import { DMBDSTORE_TOKEN, DMBDSTORE_USER } from '../core';
import { magnetizationLoadService } from '../services/others';

const HDMContext = createContext<HeisenbergDM>({} as HeisenbergDM);

type Props = {
  children?: React.ReactNode;
};
export const HDMProvider: React.FC<Props> = ({ children }) => {
  const [usuario, setUsuario] = useState<IUser>({} as IUser);
  const [token, setToken] = useState<string>('');
  const [magnetizacao, setMagnetizacao] = useState<IMagnetization[]>([]);

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
    magnetizationLoadService(setMagnetizacao)
  }, []);

  return (
    <HDMContext.Provider
      value={{
        usuario,
        token,
        magnetizacao,
        setMagnetizacao,
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
