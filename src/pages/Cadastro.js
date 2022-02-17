import axios from "axios";
import styled from "styled-components";

import { Button, Col, Container, Form, Row } from "react-bootstrap";
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
    margin-top: 2rem;
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

export const Cadastro = () => {

  const [email, emailEdit] = useState("");
  const [nome, nomeEdit] = useState("");
  const [lastname, lastnameEdit] = useState("");
  const [nascimento, nascimentoEdit] = useState("");
  const [senha, senhaEdit] = useState("");
  const [confirmasenha, confirmasenhalEdit] = useState("");

  const handleSubmit = event => {
    event.preventDefault();

    const data = new Date(nascimento);

    const inputUser = {
      email,
      nome,
      lastname,
      nascimento: data.toJSON(),
      senha,
      confirmasenha,
    };
    
    // aqui eu coloco minha rota
    axios
      .post('/user', inputUser)
      .then((response) => {
        console.log(response.message);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <ContainerEdit>
      <TituloEdit>Faça o seu cadastro</TituloEdit>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Col}>
          <Form.Label>Digite o seu e-mail</Form.Label>
          <Form.Control type="email" placeholder="Digite aqui"
          onChange={(event) => emailEdit(event.target.value)} />
        </Form.Group>

        <Row>
          <Form.Group as={Col}>
            <Form.Label>Digite o seu primeiro nome</Form.Label>
            <Form.Control type="text" placeholder="Digite aqui"
            onChange={(event) => nomeEdit(event.target.value)} />
          </Form.Group>

          <Form.Group as={Col}>
          <Form.Label>Digite o seu último nome</Form.Label>
            <Form.Control type="text" placeholder="Digite aqui"
            onChange={(event) => lastnameEdit(event.target.value)} />
          </Form.Group>

          <Form.Group as={Col}>
          <Form.Label>Digite sua data de nascimento</Form.Label>
            <Form.Control type="date" placeholder="Digite aqui"
            onChange={(event) => nascimentoEdit(event.target.value)} />
          </Form.Group>
         </Row>

         <Row>
          <Form.Group as={Col}>
            <Form.Label>Crie uma senha</Form.Label>
            <Form.Control type="password" placeholder="Digite aqui"
            onChange={(event) => senhaEdit(event.target.value)} />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Confirme sua senha</Form.Label>
            <Form.Control type="password" placeholder="Digite aqui"
            onChange={(event) => confirmasenhalEdit(event.target.value)} />
          </Form.Group>
         </Row>
      </Form>

      <Button variant="primary" type="submit">
          Cadastrar
      </Button>

    </ContainerEdit>
  );
};