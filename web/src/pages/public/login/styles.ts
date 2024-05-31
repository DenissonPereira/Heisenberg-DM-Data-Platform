import styled from "styled-components";
import { Center, Marges } from "../../../core";

export const LoginContainer = styled.div`
  ${Center};
  width: 100%;
  height: 100vh;
`;

export const Left = styled.div`
  width: 70%;
  height: 100vh;
  background-image: url(${props => props.theme.images.bg_login});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Right = styled.div`
  ${Center};
  width: 30%;
  height: 100vh;
  flex-direction: column;
`;

export const Suporte = styled.div`
  margin-right: 18vw;
  margin-bottom: 2vw;
  p {
    ${Marges};
    color: ${(props) => props.theme.colors.cinza};
    font-size: 0.9em;
  }
`;

export const SuporteContainer = styled.div`
  display: flex;
  gap: 0.5vw;
  margin-bottom: 0.4vw;
`;

export const Direitos = styled.p`
  color: ${props => props.theme.colors.cinza};
  font-size: 0.9em;
`;
