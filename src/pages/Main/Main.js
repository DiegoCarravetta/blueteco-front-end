import { CardFull } from "../../components/CardFull";
import { CarouselFull } from  "../../components/CarouselFull";
import { carouselDados } from "../../constants/carouselDados";
import { Container, Row } from "react-bootstrap";
import { FormsFull } from "../../components/SearchFull";

export const Main = () => {
  return (
    <>
      <CarouselFull data={carouselDados} />
      <FormsFull />
      <Container >
        <Row>
          <CardFull />
          <CardFull />
        </Row>
      </Container >
    </>
  );
};