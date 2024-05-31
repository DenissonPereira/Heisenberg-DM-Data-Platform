import styled from "styled-components";
import { Center } from "../../core";

export const BotaoSecundario = styled.button`
    ${Center};
    width: 20vw;
    height: 3vw;
    color: white;
    padding: .5em;
    border-radius: 1vh;
    background-color: ${props => props.theme.colors.pink};
    border: none;
    font-size: 1.2vw;
    color: white;
    cursor: pointer;

    &:hover {
        transition: .5s;
        background-color: ${props => props.theme.colors.pinkDark};
    }

    &:active {
        background-color: ${props => props.theme.colors.pinkLight};
    }
`;