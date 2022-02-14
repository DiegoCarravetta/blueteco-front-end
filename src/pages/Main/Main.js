import axios from "axios";

import { CardEdit, CardFull } from "../../components/CardFull";
import { CarouselFull } from  "../../components/CarouselFull";
import { carouselDados } from "../../constants/carouselDados";
import { Container } from "react-bootstrap";
import { FormsFull } from "../../components/SearchFull";
import { useState, useEffect } from "react";

export const Main = () => {
  const [menu, menuEdit] = useState([]);
//  const [ready, setReady] = useState(false);

  const getData = async () => {
    // aqui é o endereço de onde estão meus pratos do menu "/menu"
    await axios.get("/game").then((response) => {
      menuEdit(response.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);
  
  return (
    <>
      <CarouselFull data={carouselDados} />
      <FormsFull />
      <Container>
        <CardFull>
          {menu.map((item) => (
            <a href="!#" key={item.id}>
              <CardEdit>
                <CardEdit.Img variant="top" src={item.imageUrl} />
              </CardEdit>
            </a>
          ))}
        </CardFull>
      </Container>
    </>
  );
};