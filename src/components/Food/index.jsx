import { BiPencil } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { RxCaretRight } from "react-icons/rx";

import { useMediaQuery } from "react-responsive";
import theme from "../../styles/theme";

import { api } from '../../services/api';

import { Container, Title, Order } from "./styles";
import { NumberPicker } from '../../components/NumberPicker';
import { Button } from "../../components/Button";

export function Food({ data, isAdmin, isFavorite, updateFavorite, handleDetails, ...rest }) {
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const handleFavorite = async () => {
    try {
      if (isFavorite) {
        updateFavorite(true, data.id);
      } else {
        updateFavorite(false, data.id);
      }
    } catch (error) {
      console.log('Erro ao atualizar favoritos:', error);
    }
  };

  return (
    <Container {...rest} isAdmin={isAdmin}>
      {isAdmin ? (
        <BiPencil size={"2.4rem"} />
      ) : (
        <FiHeart
          size={"2.4rem"}
          fill={isFavorite ? theme.COLORS.GRAY_200 : undefined}
          onClick={handleFavorite}
        />
      )}

      <img 
        src={`${api.defaults.baseURL}/files/${data.image}`} 
        alt="Imagem do prato." 
        onClick={() => handleDetails(data.id)} 
      />
      
      <Title>
        <h2>{data.name}</h2>
        <RxCaretRight 
          size={isDesktop ? "2.4rem" : "1.4rem"} 
          onClick={() => handleDetails(data.id)} 
        />
      </Title>
      
      {isDesktop && <p>{data.description}</p>}
      <span>R$ {data.price}</span>

      {!isAdmin && 
        <Order>
          <NumberPicker />
          <Button title="incluir" />
        </Order>
      }
    </Container>
  );
}