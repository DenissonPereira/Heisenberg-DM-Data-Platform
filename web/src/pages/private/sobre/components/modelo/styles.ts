import styled from "styled-components";
import { Center } from "../../../../../core";

export const ContainerModelo = styled.div`
  ${Center}
  flex-direction: column;
  margin-top: 10vw;
`;

export const Texto = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
  font-size: 1vw;

  h2 {
    color: #333;
    margin-bottom: 10px;
  }

  p {
    color: #555;
    margin-bottom: 15px;
    text-align: justify;
  }
`;
