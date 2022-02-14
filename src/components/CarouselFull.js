import styled from "styled-components";

import { Carousel } from "react-bootstrap";

const CarouselImgEdit = styled.img`
  heigth: auto;
  width: 100vw;
`;

const CaptionEdit = styled(Carousel.Caption)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  h3 {
    background-color: #000000d3;
    color: #fff;
    padding: 0.5rem;
  }

  p{
    background-color: #000000d3;
    color: #fff;
    padding: 0.5rem;
  }
`;

export const CarouselFull = (props) => {
  return (
    <Carousel>
      {props.data.map((item) => (
        <Carousel.Item key={item.src}>
          <CarouselImgEdit src={item.src} />
          <CaptionEdit>
            <h3>{item.titulo}</h3>
            <p>{item.subtitulo}</p>
          </CaptionEdit>
        </Carousel.Item>
        ))}
    </Carousel>
  );
};