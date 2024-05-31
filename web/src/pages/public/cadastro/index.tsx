import { Form } from "./components/form"
import { CadastroContainer, Left, Right } from "./styles"

export const Cadastro = () => {
  return (
    <CadastroContainer>
      <Left></Left>
      <Right>
        <Form />
      </Right>
    </CadastroContainer>
  )
}
