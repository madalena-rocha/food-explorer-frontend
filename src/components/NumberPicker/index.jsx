import { FiMinus, FiPlus } from "react-icons/fi";

import { Container } from "./styles";

export function NumberPicker({ number, setNumber }) {
  const incrementNumber = () => {
    setNumber(number + 1);
  };

  const decrementNumber = () => {
    if (number > 1) {
      setNumber(number - 1);
    }
  };

  return (
    <Container>
      <button onClick={decrementNumber}><FiMinus /></button>
      <span>{number < 10 ? `0${number}` : number}</span>
      <button onClick={incrementNumber}><FiPlus /></button>
    </Container>
  );
}
