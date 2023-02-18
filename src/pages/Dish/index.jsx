import { Container } from "./styles";

import { Header } from '../../components/Header';
import { Tag } from '../../components/Tag';
import { Footer } from '../../components/Footer';

export function Dish() {
  return (
    <Container>
      <Header />

      <Tag title="alface" />
      <Tag title="cebola" />
      
      <Footer />
    </Container>
  );
}