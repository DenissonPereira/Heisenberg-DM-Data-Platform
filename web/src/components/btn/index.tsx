import styled from 'styled-components';
import { useTheme } from '../../contexts/themeContext';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.bg};
  border: none;
  cursor: pointer;
`;

const HomeBTN = () => {
  const { toggleTheme } = useTheme();

  return (
    <Container>
      <h1>Welcome to the Themed App!</h1>
      <Button onClick={toggleTheme}>Toggle Theme</Button>
    </Container>
  );
};

export default HomeBTN;
