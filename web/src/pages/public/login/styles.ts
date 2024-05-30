import styled from "styled-components";
import { Center } from "../../../core";
import BgLogin from '../../../assets/images/bg_login.png'

export const LoginContainer = styled.div`
    ${Center}
    width: 100%;
    height: 100vh;
`;

export const Left = styled.div`
    width: 70%;
    height: 100vh;
    background-image: url(${BgLogin});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`;

export const Right = styled.div`
    ${Center};
    width: 30%;
    height: 100vh;
`;