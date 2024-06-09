import { IDados, IMagnetization, IUser } from "../../models";

export type HeisenbergDM = {
    usuario: IUser;
    token: string;
    setUsuario: (usuario: IUsuario) => void;
    setToken: (token: string) => void;
    dados: IDados[];
    setDados: (dados: IDados[]) => void
    PegarDados: (nomeTabela: string) => Promise<IDados[]>
};