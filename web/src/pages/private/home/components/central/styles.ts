import styled from "styled-components";
import { Center, Marges } from "../../../../../core";

export const CentralContainer = styled.div`
    ${Center};
    flex-direction: column;
    height: 90%;
`;

export const DescrisaoCurta = styled.div`
    ${Center};
    ${Marges};
    gap: 2vw;
    
    p {
        ${Marges};
        color: #F8F9FA;
        font-size: 1vw;
    }

    span {
        color: ${props => props.theme.colors.orange};
        font-size: 1.3vw;
        font-weight: 500;
    }
`;

export const DescrisaoMaior = styled.div`
    ${Center};
    gap: 2vw;
    width: 60%;
    text-align: center;
    margin: 2vw;
    
    p {
        ${Marges};
        color: #F8F9FA;
        font-size: 1vw;
    }

    span {
        color: ${props => props.theme.colors.orange};
        font-size: 1.4vw;
        font-weight: 500;
    }
`;

export const Titulo = styled.p`
    font-size: 10vw;
    line-height: 1;
    width: 80%;
    text-align: center;
    color: ${props => props.theme.colors.pink};
    font-weight: 900;
`;

export const Botoes = styled.div`
    ${Center};
    gap: 1vw;
`;