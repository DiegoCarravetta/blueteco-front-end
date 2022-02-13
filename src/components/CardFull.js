import { Card } from "react-bootstrap";
import styled from "styled-components";

const CardEdit = styled(Card)`
  width: 18rem;
  margin: 0.8rem;
  border: none;
  padding: 0.1rem;
  background-color: #D3D3D3;
`;

const CardBodyEdit = styled(Card.Body)`
  padding: 0.3rem;
`;

const LinkEdit = styled.a`
  color: #4682B4;

  &:hover {
    color: #4682B4;
    font-size: 1.2rem;
    cursor: pointer;
  }
`;

export const CardFull = () => {
  return (
    <CardEdit>
      <Card.Img variant="top" src="https://soubh.uai.com.br/media/uploaded_images/galeria/fotos/simples_Assim_sqn_Julia_Filogonio.jpg" />
      <CardBodyEdit>
        <LinkEdit>Quero este prato</LinkEdit>
      </CardBodyEdit>
    </CardEdit>
  );
};




