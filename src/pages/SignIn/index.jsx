import { Container } from "./styles";

import { Input } from '../../components/Input';
import { Button } from "../../components/Button";

export function SignIn() {
  return (
    <Container>
      <Input placeholder="Exemplo: exemplo@exemplo.com.br" />
      <Input placeholder="No mínimo 6 caracteres" />
      
      <Button title="Entrar" />
    </Container>
  );
}