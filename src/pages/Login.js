import styled from "styled-components";
import axios from "axios";

import { Button, Container, Form } from "react-bootstrap";
import { TituloEdit } from "../components/TituloFull";
import { useState } from "react";

const ContainerEdit = styled(Container)`
  padding: 4rem;

  a {
    display: flex;
    margin-top: 2rem;
    font-size: 1.1rem;
  }

  button {
    background-color: #6A5ACD !important;
    color: #fff !important;
    border: none;

    &:hover {
      background-color: #00BFFF !important;
      color: #000000 !important;
      border: none;
    }
  }
`;

export const Login = () => {
  const [email, emailEdit] = useState("");
  const [password, passwordEdit] = useState("");

  const handleSubmit = event => {
    event.preventDefault();

    const inputLogin = {
      email,
      password,
    };

    axios.post('/auth', inputLogin).then((response) => {
        const token = response.data.token;
        localStorage.setItem('token', token);
    }).catch(error => {
      console.log(error.message);
    })
  };

  return (
    <ContainerEdit>
      <TituloEdit>Faça o seu login</TituloEdit>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
           type="email"
           placeholder="Digite o e-mail de acesso"
           onChange={event => emailEdit(event.target.value)}
           required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
           type="password"
           placeholder="Entre com a sua senha"
           onChange={event => passwordEdit(event.target.value)}
           required
          />
        </Form.Group>
  
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>

      <a href="/cadastro">Ou crie sau conta</a>
      
    </ContainerEdit>
  );
};