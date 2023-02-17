import { Container } from "./styles";

import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { FoodItem } from '../../components/FoodItem';
import { Textarea } from '../../components/Textarea';
import { Footer } from '../../components/Footer';

export function New() {
  return (
    <Container>
      <Header isAdmin />

      <Section title="Ingredientes">
        <FoodItem value="Pão Naan" />
        <FoodItem isNew placeholder="Adicionar" />
      </Section>

      <Section title="Descrição">
        <Textarea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" />
      </Section>

      <Footer />
    </Container>
  );
}