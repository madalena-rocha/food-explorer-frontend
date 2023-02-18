import { RxCaretLeft } from "react-icons/rx";

import { Container } from "./styles";

import { Header } from '../../components/Header';
import { ButtonText } from "../../components/ButtonText";
import { Tag } from '../../components/Tag';
import { Footer } from '../../components/Footer';

export function Dish() {
  return (
    <Container>
      <Header />

      <ButtonText>
        <RxCaretLeft />
        voltar
      </ButtonText>

      <Tag title="alface" />
      <Tag title="cebola" />
      
      <Footer />
    </Container>
  );
}