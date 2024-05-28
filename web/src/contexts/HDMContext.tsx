import React, { useContext, createContext, useState, useEffect } from 'react';
import { HeisenbergDM } from '../core/types';
import { IUser } from '../models';
import { SGBDSTORE_TOKEN, SGBDSTORE_USER } from '../core';

const HDMContext = createContext<HeisenbergDM>({} as HeisenbergDM);

type Props = {
  children?: React.ReactNode;
};
export const HDMProvider: React.FC<Props> = ({ children }) => {
  const [usuario, setUsuario] = useState<IUser>({} as IUser);
  const [token, setToken] = useState<string>('');

  useEffect(() => {
    async function loadUsuario() {
      const userData = await localStorage.getItem(SGBDSTORE_USER);
      const user: IUser = userData ? JSON.parse(userData) : undefined;

      const storedToken = await localStorage.getItem(SGBDSTORE_TOKEN);

      if (user?.id && storedToken) {
        setUsuario(user);
        setToken(storedToken);
      }
    }
    loadUsuario();
  }, []);

  return (
    <HDMContext.Provider
      value={{
        usuario,
        token,
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
