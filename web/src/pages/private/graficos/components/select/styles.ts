import styled from "styled-components";
import { Center } from "../../../../../core";

export const SelectContainer = styled.div`
    ${Center};
    flex-direction: column;
`;

export const DadosStyle = styled.div`

`;

export const GraficoStyle = styled.div`
    ${Center};
    width: 50vw;
    display: flex;
`;

export const SelectStyle = styled.select`

`;

export const CoresStyle = styled.div`
    ${Center};
    gap: 1vw;
`;

export const BotoesStyle = styled.div`
    ${Center};
    flex-direction: column;
    gap: .5vw;
    div {
        background-color: #F3F2F7;
        border-radius: 50%;
        padding: .5vw;
        cursor: pointer;

        &:hover {
            background-color: #DDDDDD;
            transition: .5s;
        }

        &:active {
            background-color: white;
        }
    }
    svg {
        font-size: 2vw;
        color: ${props => props.theme.colors.texto}
    }
`;

export const GraficoStyleSozinho = styled.div`
    ${Center};
    width: 50vw;
`;

export const ContainerBotoes = styled.div`
    ${Center};
    gap: .5vw;

    button {
        width: 9vw;
        height: 3vh;
        font-size: 1em;
    }
`;