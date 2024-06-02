import styled from "styled-components";
import { Center } from "../../core";

export const BotaoTerciario = styled.button`
    ${Center};
    width: 80px;
    height: 38px;
    color: white;
    padding: .5em;
    border-radius: 1vh;
    border: 1px solid ${props => props.theme.colors.pink};
    font-size: .9em;
    color: ${props => props.theme.colors.pink};
    cursor: pointer;

    &:hover {
        transition: .7s;
        background-color: ${props => props.theme.colors.pinkDark};
        color: white;
    }

    &:active {
        background-color: ${props => props.theme.colors.pinkLight};
    }
`;