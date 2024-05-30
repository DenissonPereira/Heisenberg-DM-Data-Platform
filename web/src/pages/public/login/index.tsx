import { Form } from "./components/form"
import { Left, LoginContainer, Right } from "./styles"

export const Login = () => {
  return (
    <LoginContainer>
      <Left></Left>
      <Right>
        <Form />
      </Right>
    </LoginContainer>
  )
}
