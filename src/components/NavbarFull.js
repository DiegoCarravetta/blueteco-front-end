import styled from "styled-components";
import { Container, Button, Navbar, Nav } from "react-bootstrap";

const NavbarEdit = styled(Navbar)`
  background-color: #000000;
`;

const BrandEdit = styled(Navbar.Brand)`
  color: #fff !important;
  font-weight: 600;
  font-size: 1.8rem;
`;

const NavLinkEdit = styled(Nav.Link)`
color: #fff !important;
`;

const ButtonEdit = styled(Button)`
  background-color: #6A5ACD !important;
  color: #fff !important;
  border: none;

  &:hover {
    background-color: #00BFFF !important;
    color: #000000 !important;
    border: none;
  }
`;

export const NavbarFull = () => {
  return (
    <NavbarEdit>
      <Container>
        <BrandEdit href="/">Blueteco</BrandEdit>
        <Nav>
          <NavLinkEdit href="/cardapio">Cardápio</NavLinkEdit>
          <NavLinkEdit href="/reservas">Reservas</NavLinkEdit>
          <NavLinkEdit href="/usuario">Usuário</NavLinkEdit>
          <ButtonEdit href="/login">Login</ButtonEdit>
        </Nav>
      </Container>
    </NavbarEdit>
  )
}