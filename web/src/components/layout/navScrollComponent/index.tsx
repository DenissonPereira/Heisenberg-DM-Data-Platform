import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { useGlobalHDMContext } from '../../../contexts/HDMContext';
import { BotaoTerciario, BotaoTrocarTema } from '../..';
import { logoutService } from '../../../services/logoutService';
import Logo from '../../../assets/images/logo_nome_incompleto.png'
import { Center } from '../../../core';

// Estilize o Navbar usando styled-components
const StyledNavbar = styled(Navbar)`
  background-color: ${props => props.theme.colors.bg};
  .navbar-brand, .nav-link, .nav-dropdown-item {
    color: ${props => props.theme.colors.texto};
  }
`;

const Usuario = styled.div`
  ${Center};
  color: ${props => props.theme.colors.texto};
`;

export function NavScrollComponent() {
  const { usuario } = useGlobalHDMContext()

  const handleLogout = () => {
    logoutService()
    window.location.reload()
    console.log('User logged out');
  };

  return (
    <StyledNavbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img style={{ width: 90 }} src={Logo} alt="Logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex flex-grow-1 mx-1 my-2 my-lg-0 me-lg-5">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2 w-70"
              aria-label="Search"
              name="search"
            />
            <BotaoTerciario type='submit'>Search</BotaoTerciario>
          </Form>
          <Nav>
            <Usuario>Olá, {usuario.nome}!</Usuario>
            <Nav.Link>
              <BotaoTrocarTema />
            </Nav.Link>
          </Nav>
          <Nav className="align-items-center">
            <BotaoTerciario onClick={handleLogout}>Logout</BotaoTerciario>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  );
}
