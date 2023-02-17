import { Container, Brand, Copyright } from "./styles";

import brand from "../../assets/footer-brand.svg";

export function Footer() {
  return (
    <Container>
      <Brand>
        <img src={brand} alt="Logo" />
      </Brand>

      <Copyright>
        © 2023 - Todos os direitos reservados.
      </Copyright>
    </Container>
  );
}