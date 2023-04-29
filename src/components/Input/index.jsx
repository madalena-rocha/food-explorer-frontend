import { Container } from "./styles";

export function Input({ icon: Icon, ...rest }) {
  return (
    <Container>
      {Icon && <Icon size={"2.4rem"} />}
      <input {...rest} />
    </Container>
  );
}