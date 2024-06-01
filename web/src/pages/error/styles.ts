import styled from "styled-components";

export const ErrorContainer = styled.div`
    background-image: url(${props => props.theme.images.bg_error});
    height: 100vh;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`;