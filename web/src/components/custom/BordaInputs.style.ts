import styled, { keyframes } from "styled-components";
import { Center } from "../../core";

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

export const BordaInputs = styled.div`
  ${Center};
  background-color: #f3f5f8;
  color: ${props => props.theme.colors.text};
  width: 19vw;
  height: 2.5vw;
  gap: 0.5em;
  padding: 0.5em;
  border-radius: 1vh;
  position: relative;
  border: 1px solid ${props => props.theme.colors.cinza};
  
  input {
    border: none;
    outline: none;
    width: 100%;
  }

  svg {
    font-size: 2em;
  }

  &:before {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border-radius: 1vh;
    border: 3px solid transparent;
    background: linear-gradient(170deg, #ff6ec4, #7873f5, #4ade80);
    background-size: 600% 600%;
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
    transition: opacity 0.3s;
    opacity: 0;
    pointer-events: none; /* Certifique-se de que não bloqueie interações com o conteúdo */
  }

  &:focus-within:before {
    opacity: 1;
    animation: ${gradientAnimation} 3s ease infinite;
  }
`;
