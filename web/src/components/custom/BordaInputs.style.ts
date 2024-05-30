import styled from "styled-components";
import { Center } from "../../core";

export const BordaInputs = styled.div`
    ${Center};
    background-color: ${props => props.theme.colors.bg};
    color: ${props => props.theme.colors.text};
    width: 19vw;
    height: 1.5vw;
    gap: .5em;
    padding: 1em;
    border-radius: 1vh;
    border: 1px solid ${props => props.theme.colors.cinza};

    svg {
        font-size: 2em;
    }
`;