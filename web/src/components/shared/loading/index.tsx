import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-size: 24px;
`;

const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border-left-color: #09f;
  animation: ${spin} 1s ease infinite;
`;

const LoadingText = styled.p`
  margin-bottom: 16px;
`;

const Loading = () => (
  <LoadingContainer>
    <LoadingText>Carregando...</LoadingText>
    <Spinner />
  </LoadingContainer>
);

export default Loading;
