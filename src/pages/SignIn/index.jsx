import { useState } from 'react';
import { Link } from "react-router-dom";

import { useAuth } from '../../hooks/auth';

import { Container, Form, Brand } from "./styles";

import { Section } from '../../components/Section';
import { Input } from '../../components/Input';
import { Button } from "../../components/Button";

import brand from "../../assets/brand.svg";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { signIn } = useAuth();

  function handleSignIn() {
    setLoading(true);

    signIn({ email, password }).finally(() => setLoading(false));
  }

  return (
    <Container>
      <Brand>
        <img src={brand} alt="Logo" />
      </Brand>

      <Form>
        <h2>Faça seu login</h2>

        <Section title="Email">
          <Input 
            placeholder="Exemplo: exemplo@exemplo.com.br" 
            type="text"
            onChange={e => setEmail(e.target.value)}
          />
        </Section>

        <Section title="Senha">
          <Input 
            placeholder="No mínimo 6 caracteres" 
            type="password"
            onChange={e => setPassword(e.target.value)}
          />
        </Section>

        <Button title="Entrar" onClick={handleSignIn} loading={loading} />

        <Link to="/register">
          Criar uma conta
        </Link>
      </Form>
    </Container>
  );
}