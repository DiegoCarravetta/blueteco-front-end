import styled from "styled-components";

import { Carousel } from "react-bootstrap";

const CarouselImgEdit = styled.img`
  heigth: auto;
  width: 100vw;
`;

const TituloEdit = styled.h3`
  background-color: #00000080;
  color: #fff;
`;

const SubtituloEdit = styled.p`
  background-color: #00000080;
  color: #fff;
`;

export const CarouselFull = (props) => {
  return (
    <Carousel>
      {props.data.map((item) => (
        <Carousel.Item key={item.src}>
          <CarouselImgEdit src={item.src} />
          <Carousel.Caption>
            <TituloEdit>{item.titulo}</TituloEdit>
            <SubtituloEdit>{item.subtitulo}</SubtituloEdit>
          </Carousel.Caption>
        </Carousel.Item>
        ))}
    </Carousel>
  );
};