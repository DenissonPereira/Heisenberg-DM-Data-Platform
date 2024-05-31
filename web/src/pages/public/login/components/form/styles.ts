import styled from "styled-components";
import { Center, Marges } from "../../../../../core";

export const FormStyle = styled.form`
    ${Center};
    flex-direction: column;
    gap: .2vw;
    margin-bottom: 8vw;
`;

export const Senha = styled.div`
    ${Marges};
    cursor: pointer;
`;

export const InputContainer = styled.div`

`;

export const TituloInput = styled.p`
    color: #A3AEB3;
    margin: .2vw 0 .2vw 0;
`;

export const RememberContainer = styled.div`
    display: flex;
    width: 25vw;
    justify-content: space-around;
`;

export const CheckBox = styled.div`
    display: flex;
    gap: .5vw;
    color: #A3AEB3;
`;

export const EsqueceuSenha = styled.p`
    color: ${props => props.theme.colors.blueBackground};
    cursor: pointer;
`;