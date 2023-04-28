import { RxCaretLeft } from "react-icons/rx";
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';

import { Container, Content } from "./styles";

import { Header } from '../../components/Header';
import { Menu } from "../../components/Menu";
import { ButtonText } from "../../components/ButtonText";
import { Tag } from '../../components/Tag';
import { NumberPicker } from "../../components/NumberPicker";
import { Button } from "../../components/Button";
import { Footer } from '../../components/Footer';

export function Dish({ isAdmin }) {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Container>
      {!isDesktop && 
        <Menu isAdmin={isAdmin} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      }

      <Header isAdmin={isAdmin} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      <main>
        <div>
          <header>
            <ButtonText>
              <RxCaretLeft />
              voltar
            </ButtonText>
          </header>

          <Content>
            <img src="../../src/assets/salada-ravanello.png" alt="Salada Ravanello" />

            <div>
              <h1>Salada Ravanello</h1>
              <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.</p>
            
              <section>
                <Tag title="alface" />
                <Tag title="cebola" />
                <Tag title="pão naan" />
                <Tag title="pepino" />
                <Tag title="rabanete" />
                <Tag title="tomate" />
              </section>

              <div className="buttons">
                {isAdmin ? 
                  <Button title="Editar prato" className="edit" /> : 
                  <>
                    <NumberPicker />
                    <Button 
                      title={isDesktop ? "incluir ∙ R$ 25,00" : "pedir ∙ R$ 25,00"} 
                      className="include" 
                      isCustomer={!isDesktop}
                    />
                  </>
                }
              </div>
            </div>
          </Content>
        </div>
      </main>

      <Footer />
    </Container>
  );
}