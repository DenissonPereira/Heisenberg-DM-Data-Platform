import styled from "styled-components";

export const DocsContainer = styled.div`
  background-image: url(${props => props.theme.images.bg_limpa});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
`;

export const DocsContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;

  h1, h2 {
    color: #333;
    margin-bottom: 10px;
  }

  p, ul, ol {
    color: #555;
    margin-bottom: 15px;
  }

  ul, ol {
    padding-left: 20px;
  }
`;

export const Funcionalidades = styled.div`
  margin-bottom: 30px;
`;

export const Uso = styled.div`
  margin-bottom: 30px;
`;

export const Exemplos = styled.div`
  margin-bottom: 30px;
`;
