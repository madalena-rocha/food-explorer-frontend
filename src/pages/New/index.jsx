import { RxCaretLeft } from "react-icons/rx";
import { FiUpload } from "react-icons/fi";
import { RiArrowDownSLine } from "react-icons/ri";

import { Container, Form, Image, Category } from "./styles";

import { Header } from '../../components/Header';
import { ButtonText } from "../../components/ButtonText";
import { Section } from '../../components/Section';
import { Input } from '../../components/Input';
import { FoodItem } from '../../components/FoodItem';
import { Textarea } from '../../components/Textarea';
import { Button } from "../../components/Button";
import { Footer } from '../../components/Footer';

export function New({ isNew }) {
  return (
    <Container>
      <Header isAdmin />

      <main>
        <Form>
          <header>
            <ButtonText>
              <RxCaretLeft />
              voltar
            </ButtonText>

            {isNew ? 
              <h1>Adicionar prato</h1> : 
              <h1>Editar prato</h1>
            }
          </header>

          <div>
            <Section title="Imagem do prato">
              <Image className="image">
                <label htmlFor="image">
                  <FiUpload />
                  <span>Selecione imagem</span>

                  <input 
                    id="image" 
                    type="file"
                  />
                </label>
              </Image>
            </Section>

            <Section title="Nome">
              <Input className="name"
                placeholder="Ex.: Salada Ceasar" 
                type="text"
              />
            </Section>

            <Section title="Categoria">
              <Category className="category">
                <label htmlFor="category">
                  <select id="category">
                    <option value="meal">Refeição</option>
                    <option value="dessert">Sobremesa</option>
                    <option value="beverage">Bebida</option>
                  </select>

                  <RiArrowDownSLine />
                </label>
              </Category>
            </Section>
          </div>

          <div>
            <Section title="Ingredientes">
              <div className="tags">
                <FoodItem value="Pão Naan" />
                <FoodItem isNew placeholder="Adicionar" />
              </div>
            </Section>

            <Section title="Preço">
              <Input className="price"
                placeholder="R$ 00,00" 
                type="number"
              />
            </Section>
          </div>

          <Section title="Descrição">
            {isNew ? 
              <Textarea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" /> : 
              <Textarea placeholder="A Salada César é uma opção refrescante para o verão." />
            }
          </Section>

          <div className="buttons">
            {isNew ? 
              <Button title="Salvar alterações" className="save" disabled /> : 
              <>
                <Button title="Excluir prato" className="delete" />
                <Button title="Salvar alterações" className="save" disabled />
              </>
            }
          </div>
        </Form>
      </main>
      
      <Footer />
    </Container>
  );
}