import styled from "styled-components";
import { Center, Marges } from "../../../../../core";

export const FormStyle = styled.form`
  ${Center};
  flex-direction: column;
  gap: 0.2vw;
`;

export const InputContainer = styled.div``;

export const Senha = styled.div`
  ${Marges};
  cursor: pointer;
`;

export const ForcaSenha = styled.div`
  height: 1.2vh;
  width: 19vw;
  background-color: #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
`;

export const Forte = styled.div`
  height: 100%;
  transition: width 0.3s;
  width: 100%;
  background-color: green;
`;

export const Media = styled.div`
  height: 100%;
  transition: width 0.3s;
  width: 66%;
  background-color: orange;
`;

export const Fraca = styled.div`
  height: 100%;
  transition: width 0.3s;
  width: 33%;
  background-color: red;
`;

export const Vazia = styled.div`
  height: 100%;
  transition: width 0.3s;
  width: 0%;
`;

export const CheckContainer = styled.div`
  display: flex;
  width: 18vw;
  justify-content: space-around;

  p {
    font-size: 0.8em;
    text-align: justify;
  }

  span {
    color: ${(props) => props.theme.colors.blueBackground};
    cursor: pointer;
  }
`;

export const CheckBox = styled.div`
  color: #a3aeb3;
  display: flex;
  gap: .5vw;
`;