import { FiMenu, FiLogOut } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { useMediaQuery } from "react-responsive";

import { useNavigate } from 'react-router-dom';
import { Container, Menu, Brand, Logout } from "./styles";
import { useAuth } from '../../hooks/auth';

import { Search } from "../../components/Search";
import { Button } from "../../components/Button";

import brand from "../../assets/brand.svg";
import brandAdmin from "../../assets/brand-admin.svg";
import brandMobile from "../../assets/brand-mobile.svg";

export function Header({ isAdmin, isMenuOpen, setIsMenuOpen }) {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const logo = isAdmin ? (isDesktop ? brandAdmin : brandMobile) : brand;
  
  const { signOut } = useAuth();
  const navigation = useNavigate();

  function handleSignOut() {
    navigation("/");
    signOut();
  }

  return (
    <Container>
      {!isDesktop && (
        <Menu>
          {!isMenuOpen ?
            <FiMenu className="fi-menu-icon" onClick={() => setIsMenuOpen(true)} /> :
            <>
              <MdClose size={"1.8rem"} onClick={() => setIsMenuOpen(false)} />
              <span>Menu</span>
            </>
          }
        </Menu>
      )}

      {(isDesktop || !isMenuOpen) && (
        <>
          <Brand>
            <img src={logo} alt="Logo" />
          </Brand>

          {isDesktop && <Search />}

          {isAdmin ? 
            (isDesktop && <Button title="Novo prato" />) :
            <Button title={isDesktop ? "Pedidos" : undefined} isCustomer orderCount={0} />
          }

          {isDesktop &&
            <Logout onClick={handleSignOut}>
              <FiLogOut size={"3.2rem"} />
            </Logout>
          }
        </>
      )}
    </Container>
  );
}
