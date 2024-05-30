import styled from "styled-components";

export const InputFormulario = styled.input`

    width: 90%;
    border: 0;
    font-size: 1em;
    letter-spacing: .11em;
    background-color: ${props => props.theme.colors.bg};

    &:focus {
        outline: 0;
        transition: 0.6 all ease;
    };
`