import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from "react-responsive";
import { Container, Content } from "./styles";

import { api } from '../../services/api';

import { Menu } from "../../components/Menu";
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Food } from "../../components/Food";
import { Footer } from '../../components/Footer';

import { register } from 'swiper/element/bundle';

register();

export function Home({ isAdmin }) {
  const swiperElRef1 = useRef(null);
  const swiperElRef2 = useRef(null);
  const swiperElRef3 = useRef(null);

  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // the value in percentage indicates at what visibility the callback should be called
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // If the element is visible, start the Swiper autoplay if the ref is not null
          entry.target.swiper && entry.target.swiper.autoplay.start();
        } else {
          // If the element is not visible, stop the Swiper autoplay if the ref is not null
          entry.target.swiper && entry.target.swiper.autoplay.stop();
        }        
      });
    }, options);

    // Observe the visibility changes of elements containing Swiper
    observer.observe(swiperElRef1.current);
    observer.observe(swiperElRef2.current);
    observer.observe(swiperElRef3.current);

    return () => {
      observer.disconnect();
    }
  }, []);

  const [dishes, setDishes] = useState({ meals: [], desserts: [], beverages: [] });
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  function handleDetails(id) {
    navigate(`/dish/${id}`);
  }

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/dishes?search=${search}`);
      const meals = response.data.filter(dish => dish.category === "meal");
      const desserts = response.data.filter(dish => dish.category === "dessert");
      const beverages = response.data.filter(dish => dish.category === "beverage");

      setDishes({ meals, desserts, beverages });
    }

    fetchDishes();
  }, [search]);

  return (
    <Container>
      {!isDesktop && 
        <Menu 
          isAdmin={isAdmin} 
          isMenuOpen={isMenuOpen} 
          setIsMenuOpen={setIsMenuOpen} 
          setSearch={setSearch}
        />
      }

      <Header 
        isAdmin={isAdmin} 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
        setSearch={setSearch}
      />

      <main>
        <div>
          <header>
            <img 
              src={isDesktop ? 
                "../../src/assets/home-banner.png" : 
                "../../src/assets/banner-mobile.png"
              } 
              alt="Macarons coloridos em tons pastel despencando juntamente com folhas verdes e frutas frescas." 
            />
          
            <div>
              <h1>Sabores inigualáveis</h1>
              <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
            </div>
          </header>

          <Content>
            <Section title="Refeições">
              <swiper-container
                key={isDesktop}
                ref={swiperElRef1}
                space-between={isDesktop ? "27" : "16"}
                slides-per-view="auto"
                navigation={isDesktop ? "true" : "false"}
                loop="true"
                grab-cursor="true"
              >
                {
                  dishes.meals.map(dish => (
                    <swiper-slide key={String(dish.id)}>
                      <Food 
                        isChecked
                        isAdmin={isAdmin}
                        data={dish} 
                        onClick={() => handleDetails(dish.id)}
                      />
                    </swiper-slide>
                  ))
                }
              </swiper-container>
            </Section>

            <Section title="Sobremesas">
              <swiper-container
                key={isDesktop}
                ref={swiperElRef2}
                space-between={isDesktop ? "27" : "16"}
                slides-per-view="auto"
                navigation={isDesktop ? "true" : "false"}
                loop="true"
                grab-cursor="true"
              >
                {
                  dishes.desserts.map(dish => (
                    <swiper-slide key={String(dish.id)}>
                      <Food 
                        isChecked
                        isAdmin={isAdmin}
                        data={dish} 
                        onClick={() => handleDetails(dish.id)}
                      />
                    </swiper-slide>
                  ))
                }
              </swiper-container>
            </Section>

            <Section title="Bebidas">
              <swiper-container
                key={isDesktop}
                ref={swiperElRef3}
                space-between={isDesktop ? "27" : "16"}
                slides-per-view="auto"
                navigation={isDesktop ? "true" : "false"}
                loop="true"
                grab-cursor="true"
              >
                {
                  dishes.beverages.map(dish => (
                    <swiper-slide key={String(dish.id)}>
                      <Food 
                        isChecked
                        isAdmin={isAdmin}
                        data={dish} 
                        onClick={() => handleDetails(dish.id)}
                      />
                    </swiper-slide>
                  ))
                }
              </swiper-container>
            </Section>
          </Content>
        </div>
      </main>

      <Footer />
    </Container>
  );
}