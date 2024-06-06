import styled from "styled-components";
import { Center } from "../../../../../core";

export const TituloContainer = styled.div`
    ${Center};
    flex-direction: column;
    margin-bottom: 3vw;
    margin-top: 3vw;
    gap: 1vw;

    img {
        width: 15vw;
        -webkit-user-drag: none;
    }
`;

export const TituloText = styled.p`
    font-size: 2vw;
    color: ${props => props.theme.colors.blueBackground};
    font-weight: 800;

    span {
        color: ${props => props.theme.colors.Green};
        font-size: 4vw;
    }
`;

export const Botoes = styled.div`
    ${Center};
    gap: .5vw;
`;