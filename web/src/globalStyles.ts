import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${props => props.theme.body};
        transition: background-color 0.3s ease;
    }
`;