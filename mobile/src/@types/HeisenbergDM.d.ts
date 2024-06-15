import { IDados, IMagnetization, IUser } from "../../models";

export type HeisenbergDM = {
    usuario: IUser;
    token: string;
    setUsuario: (usuario: IUsuario) => void;
    setToken: (token: string) => void;
    dados: IDados[];
    id: IDados | null;
    setId: (id: IDados) => void;
    setDados: (dados: IDados[]) => void;
    PegarDados: (nomeTabela: string) => Promise<IDados[]>;
    PegarDadosPorId: (nomeTabela: string, id: number) => Promise<IDados>;
};