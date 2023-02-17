import { FiSearch, FiLogOut } from "react-icons/fi";

import { Container, Brand, Search, Logout } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import brand from "../../assets/brand.svg";
import brandAdmin from "../../assets/brand-admin.svg";

export function Header({ isAdmin }) {
  const logo = isAdmin ? brandAdmin : brand;

  return (
    <Container>
      <Brand>
        <img src={logo} alt="Logo" />
      </Brand>

      <Search>
        <Input
          placeholder="Busque por pratos ou ingredientes"
          icon={FiSearch}
        />
      </Search>

      <Button title="Novo prato" />

      <Logout>
        <FiLogOut />
      </Logout>
    </Container>
  );
}
