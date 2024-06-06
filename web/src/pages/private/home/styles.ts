import styled from "styled-components";

export const HomeBackground = styled.div`
    background-image: url(${props => props.theme.images.bg_home});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100vh;
`;