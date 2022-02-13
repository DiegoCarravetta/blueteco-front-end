import styled from "styled-components";

import { Form, FormControl } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

const ContainerEdit = styled.div`
  background-color: #DCDCDC;
  padding: 2rem 4rem;

  button {
    background-color: #DCDCDC;
    border: none;
    font-size: 2rem;
    color: #4682B4;
    display: flex;
  }
`;

export const FormsFull = () => {
  return (
    <ContainerEdit>
      <Form className="d-flex">
        <FormControl type="search" placeholder="Digite o número da mesa" className="me-2" aria-label="Search" />
        <button>
          <FaSearch />
        </button>
      </Form>
    </ContainerEdit>
  );
}