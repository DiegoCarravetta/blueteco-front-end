import {
  FaGithub,
  FaInstagramSquare,
  FaLinkedinIn }
from "react-icons/fa";
import { Navbar } from "react-bootstrap";

import styled from "styled-components";

const NavbarEdit = styled(Navbar)`
  background-color: #000000;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  span{
    margin: 0;
    padding: 0.4rem;
  }
`;

const SocialEdit = styled.div`
  font-size: 1.5rem;
  margin: 0.4;
  padding: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    color: #fff;
    margin: 0.4rem;
    display: flex;
    tex-decoration: none;
  }
`;

export const FooterFull = () => {
  return (
    <NavbarEdit>
      <SocialEdit>
        <a href= "https://github.com/DiegoCarravetta"><FaGithub /></a>
        <a href= "https://www.instagram.com/diego_carravetta/"><FaInstagramSquare /></a>
        <a href= "https://www.linkedin.com/in/diego-carravetta-4aa0a5215/"><FaLinkedinIn /></a>
      </SocialEdit>
      <span>2022 - Diego Carravetta - Projeto Blue Edtech </span>
    </NavbarEdit>
  );
};