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
    padding: .5vw;
    display: flex;
    width: 25vw;
    justify-content: space-around;

    p {
        ${Marges};
    }
`;

export const CheckBox = styled.div`
    display: flex;
    gap: .5vw;
    color: #A3AEB3;
`;

export const EsqueceuSenha = styled.p`
    color: ${props => props.theme.colors.orange};
    cursor: pointer;
    ${Marges};
`;

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Loader = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border-left-color: #09f;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;