import { FiMinus, FiPlus } from "react-icons/fi";

import { Container } from "./styles";

export function NumberPicker() {
  return (
    <Container>
      <FiMinus />
      <span>01</span>
      <FiPlus />
    </Container>
  );
}
