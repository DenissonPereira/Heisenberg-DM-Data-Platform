import { TrocarLinguagem } from "../../../components";
import { Cabecario, Form } from "./components"
import { Direitos, Left, LoginContainer, Right, Suporte, SuporteContainer } from "./styles"
import { FcPhone, FcInvite } from "react-icons/fc";

export const Login = () => {
  return (
    <LoginContainer>
      <Left></Left>
      <Right>
        <TrocarLinguagem />
        <Cabecario />
        <Form />
        <Suporte>
          <SuporteContainer>
            <FcPhone />
            <p>(79) 99X87 - 77X7</p>
          </SuporteContainer>
          <SuporteContainer>
            <FcInvite />
            <p>heisenbergdm@suporte.com</p>
          </SuporteContainer>
        </Suporte>
        <Direitos>Copyright © 2024 Heisenberg DM Date</Direitos>
      </Right>
    </LoginContainer>
  )
}
