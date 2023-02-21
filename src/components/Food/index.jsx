import { BiPencil } from "react-icons/bi";
import { FiHeart, FiMinus, FiPlus } from "react-icons/fi";
import { RxCaretRight } from "react-icons/rx";

import theme from "../../styles/theme";

import { Container, Title, Order } from "./styles";
import { NumberPicker } from '../../components/NumberPicker';
import { Button } from "../../components/Button";

export function Food({ data, isAdmin, isChecked, ...rest }) {
  const fillFiHeart = <FiHeart fill={theme.COLORS.GRAY_200} />;

  return (
    <Container {...rest}>
      {isAdmin ? 
        <BiPencil /> : 
        isChecked ? fillFiHeart : <FiHeart />
      }

      <img src={data.src} alt="Imagem do prato." />
      
      <Title>
        <h2>{data.title}</h2>
        <RxCaretRight />
      </Title>
      
      <p>{data.description}</p>
      <span>R$ {data.price}</span>

      {isAdmin && 
        <Order>
          <NumberPicker />
          <Button title="incluir" />
        </Order>
      }
    </Container>
  );
}