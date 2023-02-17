import { Container } from "./styles";

import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Textarea } from '../../components/Textarea';

export function New() {
  return (
    <Container>
      <Header isAdmin />

      <Section title="Descrição">
        <Textarea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" />
      </Section>
    </Container>
  );
}