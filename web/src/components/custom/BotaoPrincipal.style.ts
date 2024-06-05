import styled from "styled-components";
import { Center } from "../../core";

export const BotaoPrincipal = styled.button`
    ${Center};
    width: 19.5vw;
    height: 3vw;
    color: white;
    padding: .5em;
    border-radius: 1vh;
    background-color: ${props => props.theme.colors.Green};
    border: none;
    font-size: 1.2vw;
    color: white;
    cursor: pointer;

    &:hover {
        transition: .5s;
        background-color: ${props => props.theme.colors.GreenDark};
    }

    &:active {
        background-color: ${props => props.theme.colors.GreenLight};
    }
`;