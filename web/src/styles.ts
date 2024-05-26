import styled from "styled-components";

export const Container = styled.div`
    color: ${props => props.theme.fontColor};
    background-color: ${props => props.theme.div};
    transition: color 0.3s ease;
`;