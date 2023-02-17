import { Container } from "./styles";

import { Header } from '../../components/Header';
import { Textarea } from '../../components/Textarea';

export function New() {
  return (
    <Container>
      <Header isAdmin />

      <Textarea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" />
    </Container>
  );
}