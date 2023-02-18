import { TbReceipt } from "react-icons/tb";

import { Container } from "./styles";

export function Button({ title, loading = false, isCustomer, ...rest }) {
  return (
    <Container 
      type="button" 
      disabled={loading} 
      {...rest}
    >
      {isCustomer && <TbReceipt size={32} />}
      {loading ? "Carregando..." : title}
      {isCustomer && <span>({rest.orderCount})</span>}
    </Container>
  );
}