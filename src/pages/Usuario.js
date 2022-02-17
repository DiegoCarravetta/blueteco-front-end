import axios from "axios";
import styled from "styled-components";

import { Alert, Container } from "react-bootstrap";
import { useEffect, useState } from "react";

const setUser = styled.div`
  display: flex;
  justify-content: center;
  align-itens: center;
  flex-direction: column;
  padding: 4rem;

  img {
    widht: 10rem;
    border-radius: 50%;
  }
`;

export const Usuario = () => {

  const [usuario, usuarioEdit] = useState({});
  const [login, loginEdit] = useState(false);
  const [erro, definirErro] = useState(false);

  useEffect(() => {
    const token = localStorage.token;

    if (!token) {
      loginEdit (false);
      definirErro (true);
    }

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
  

    axios.get('/auth/', config).then(response => {
      definirErro (false);
      loginEdit(true);
      usuarioEdit(response.data);
    });
  }, []);

  return (
    <Container>
      {login ? (
        <setUser>
          <img src={usuario.imageUrl} />
          <h2>{`${usuario.firstName} ${usuario.lastName}`}</h2>
          <h3>{`${usuario.birthdate}`}</h3>
        </ setUser>) : 
        <Alert variant = "danger" onClose = {() => definirErro (false)} dismissible>
          <Alert.Heading>
            Encontramos um erro!
          </Alert.Heading>
          
          <p>
            Por favor, antes de continuar, faça o login no botão acima.
          </p>
        </Alert>}
    </ Container>
  )
}