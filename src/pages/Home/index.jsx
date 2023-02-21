import { Container, Dishes } from "./styles";

import { Header } from '../../components/Header';
import { Food } from "../../components/Food";
import { Footer } from '../../components/Footer';

import spaguettiGambe from "../../assets/spaguetti-gambe.png";

export function Home() {
  return (
    <Container>
      <Header />

      <Dishes>
        <Food isChecked 
          data={{
            src: spaguettiGambe,
            title: "Spaguetti Gambe",
            description: "Massa fresca com camarões e pesto.",
            price: "79,97",
          }}
        />

        <Food isAdmin 
          data={{
            src: spaguettiGambe,
            title: "Spaguetti Gambe",
            description: "Massa fresca com camarões e pesto.",
            price: "79,97",
          }}
        />
      </Dishes>

      <Footer />
    </Container>
  );
}