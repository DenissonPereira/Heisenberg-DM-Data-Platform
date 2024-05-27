import { IUser } from "../../models";

export type HeisenbergDM = {
    usuario: IUser;
    token: string;
    setUsuario: (usuario: IUsuario) => void;
    setToken: (token: string) => void;
};